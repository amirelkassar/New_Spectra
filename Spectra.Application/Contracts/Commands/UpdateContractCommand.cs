using MediatR;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Application.Messaging;
using Spectra.Application.Notifications;
using Spectra.Domain.Contracts;
using Spectra.Domain.Contracts.DomainEvents;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Application.Contracts.Commands
{
    public class UpdateContractCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
        public string ModifierRole { get; set; }
        public string? EmployeeUserId { get; set; }
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public double FreelancingPercentage { get; set; }
        public double SpectraTeamPercentage { get; set; }
        public int FreelancingDuration { get; set; }
        public int SpectraTeamDuration { get; set; }
        public List<string>? FreelancingServices { get; set; }
        public List<string>? SpectraTeamServices { get; set; }
    }

    public class UpdateContractCommandHandler(IContractRepository contractRepository,
        IServiceMDRepository serviceMDRepository,
        INotificationService notificationService) : IRequestHandler<UpdateContractCommand, OperationResult>
    {
        private readonly IContractRepository _contractRepository = contractRepository;
        private readonly IServiceMDRepository _serviceMDRepository = serviceMDRepository;
        private readonly INotificationService _notificationService = notificationService;

        public async Task<OperationResult> Handle(UpdateContractCommand request, CancellationToken cancellationToken)
        {
            EmploymentContract contract;

            if (request.ModifierRole.Equals(Roles.SystemAdmin))
            {
                contract = await _contractRepository.GetAsync(c => c.Id == request.Id)
                 ?? throw new NotFoundException("Contracts", request.Id);
            }
            else
            {
                contract = await _contractRepository.GetAsync(c => c.Id == request.Id && c.EmployeeUserId == request.EmployeeUserId)
                 ?? throw new NotFoundException("Contracts", request.Id);

                if (contract.ContractState != ContractStates.Contracting)
                {
                    throw new InvalidOperationException("Couldn't edit accepted or canceled contract");
                }
            }
            //get the cuurent version to convert it to draft
            var currentVersion = contract.Versions.FirstOrDefault(v => v.State == ContractVersionStates.Active);
            currentVersion.State = ContractVersionStates.Draft;
            currentVersion.DraftingDate = DateTime.UtcNow;
            //create new version
            var newVersion = new ContractVersion(Ulid.NewUlid().ToString(),
                request.HoursOfWork,
                request.DaysOfWork,
                request.FreelancingPercentage,
                request.SpectraTeamPercentage,
                request.FreelancingDuration,
                request.SpectraTeamDuration)
            {
                AcceptedByAdmin = false,
                AcceptedByEmployee = false,
                CreationDate = DateTime.UtcNow,
                Order = currentVersion.Order + 1,
                State = ContractVersionStates.Active
            };

            var services = await _serviceMDRepository.GetAllAsync();
            //adding freelancing services

            foreach (var service in services.Where(s => s.EnableForFreeLancer == true && request.FreelancingServices.Contains(s.Id)).ToArray())
            {
                var platformPercentage = 100 - request.FreelancingPercentage;
                if (!newVersion.FreelancingServices.Any(s => s.ServiceId == service.Id))
                {
                    var requestService = request.FreelancingServices.First(s => s == service.Id);
                    newVersion.FreelancingServices.Add(new ContractService
                    {
                        ServiceId = service.Id,
                        EnName = service.EnName,
                        ArName = service.ArName,
                        Duration = request.FreelancingDuration,
                        EmployeeFees = service.Price * (request.FreelancingPercentage / 100),
                        EmployeePercentage = request.FreelancingPercentage,
                        PlatformFees = service.Price * (platformPercentage / 100),
                        PlatformPercentage = platformPercentage,
                        ServiceFees = service.Price,
                        ArTerms = service.ArTermsAndConditions,
                        EnTerms = service.EnTermsAndConditions
                    });
                }
            }
            //spectra team services
            foreach (var service in services.Where(s => s.EnableForSpectraTeam == true && request.SpectraTeamServices.Contains(s.Id)).ToArray())
            {
                var platformPercentage = 100 - request.SpectraTeamPercentage;
                if (!newVersion.SpectraTeamServices.Any(s => s.ServiceId == service.Id))
                {
                    var requestService = request.SpectraTeamServices.First(s => s == service.Id);
                    newVersion.SpectraTeamServices.Add(new ContractService
                    {
                        ServiceId = service.Id,
                        EnName = service.EnName,
                        ArName = service.ArName,
                        Duration = request.SpectraTeamDuration,
                        EmployeeFees = service.Price * (request.SpectraTeamPercentage / 100),
                        EmployeePercentage = request.SpectraTeamPercentage,
                        PlatformFees = service.Price * (platformPercentage / 100),
                        PlatformPercentage = platformPercentage,
                        ServiceFees = service.Price,
                        ArTerms = service.ArTermsAndConditions,
                        EnTerms = service.EnTermsAndConditions
                    });
                }
            }

            contract.Versions.Add(newVersion);
            await _contractRepository.UpdateAsync(contract);

            var updateType = request.ModifierRole switch
            {
                Roles.SystemAdmin => ContractChangeType.Admin,
                _ => ContractChangeType.Doctor
            };
            var response = OperationResult.Success();
            response.AddDomainEvent(new ContractUpdateEvent(contract, updateType));

            return response;
        }
    }

}
