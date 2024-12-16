using MediatR;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Application.Messaging;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Application.Contracts.Commands
{
    public class UpdateContractCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
        public string ModifierRole { get; set; }
        public int HoursOfWork { get; set; }
        public string? EmployeeUserId { get; set; }
        public int DaysOfWork { get; set; }
        public List<ContractServiceCreateDto>? FreelancingServices { get; set; }
        public List<ContractServiceCreateDto>? SpectraTeamServices { get; set; }
    }

    public class UpdateContractCommandHandler(IContractRepository contractRepository, IServiceMDRepository serviceMDRepository) : IRequestHandler<UpdateContractCommand, OperationResult>
    {
        private readonly IContractRepository _contractRepository = contractRepository;
        private readonly IServiceMDRepository _serviceMDRepository = serviceMDRepository;

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
            currentVersion.CreationDate = DateTime.UtcNow;
            //create new version
            var newVersion = new ContractVersion
            {
                AcceptedByAdmin = request.ModifierRole.Equals(Roles.SystemAdmin),
                AcceptedByEmployee = new string[] { Roles.Accountant, Roles.Specialist, Roles.Doctor, Roles.CustomerSupport }.Any(r => r.Equals(request.ModifierRole)),
                CreationDate = DateTime.UtcNow,
                Order = currentVersion.Order++,
                State = ContractVersionStates.Active,
            };
            //update contract
            contract.HoursOfWork = request.HoursOfWork;
            contract.DaysOfWork = request.DaysOfWork;

            var services = await _serviceMDRepository.GetAllAsync();

            foreach (var service in services)
            {
                if (request.FreelancingServices.Any(s => s.ServiceId == service.Id) && !newVersion.FreelancingServices.Any(s => s.ServiceId == service.Id))
                {
                    var requestService = request.FreelancingServices.First(s => s.ServiceId == service.Id);
                    newVersion.FreelancingServices.Add(new ContractService
                    {
                        ServiceId = service.Id,
                        ServiceName = service.EnName,
                        Duration = TimeSpan.FromMinutes(requestService.Duration),
                        EmployeeFees = requestService.EmployeeFees,
                        EmployeePercentage = requestService.EmployeePercentage,
                        PlatformFees = requestService.PlatformFees,
                        PlatformPercentage = requestService.PlatformPercentage,
                        ServiceFees = requestService.ServiceFees,
                        ServiceTerms = service.ArTermsAndConditions
                    });
                }
                if (request.SpectraTeamServices.Any(s => s.ServiceId == service.Id) && !newVersion.SpectraTeamServices.Any(s => s.ServiceId == service.Id))
                {
                    var requestService = request.SpectraTeamServices.First(s => s.ServiceId == service.Id);
                    newVersion.SpectraTeamServices.Add(new ContractService
                    {
                        ServiceId = service.Id,
                        ServiceName = service.EnName,
                        Duration = TimeSpan.FromMinutes(requestService.Duration),
                        EmployeeFees = requestService.EmployeeFees,
                        EmployeePercentage = requestService.EmployeePercentage,
                        PlatformFees = requestService.PlatformFees,
                        PlatformPercentage = requestService.PlatformPercentage,
                        ServiceFees = requestService.ServiceFees,
                        ServiceTerms = service.ArTermsAndConditions
                    });
                }
            }

            await _contractRepository.UpdateAsync(contract);

            return OperationResult.Success();
        }
    }

}
