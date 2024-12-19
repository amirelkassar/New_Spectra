using FluentValidation;
using MediatR;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.Sections;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Application.Messaging;
using Spectra.Domain.Contracts;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;
using static Spectra.Domain.Shared.Constants.ContractConses;


namespace Spectra.Application.Contracts.Commands
{

    public class CreateContractCommand : ICommand<OperationResult>
    {
        public CreateContractCommand()
        {
            FreelancingServices = [];
            SpectraTeamServices = [];
        }
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public double FreelancingPercentage { get; set; }
        public double SpectraTeamPercentage { get; set; }
        public int FreelancingDuration { get; set; }
        public int SpectraTeamDuration { get; set; }
        public List<string>? FreelancingServices { get; set; }
        public List<string>? SpectraTeamServices { get; set; }
    }

    public class CreateContractCommandHandler(IContractRepository contractRepository,
        IBaseMongoDbRepository<Employee> medicalProvider,
        IServiceMDRepository serviceMDRepository,
        ISectionsRepository sectionsRepository,
        ICurrentUser currentUser) : IRequestHandler<CreateContractCommand, OperationResult>
    {

        private readonly IContractRepository _contractRepository = contractRepository;
        private readonly IBaseMongoDbRepository<Employee> _medicalProvider = medicalProvider;
        private readonly IServiceMDRepository _serviceMDRepository = serviceMDRepository;
        private readonly ISectionsRepository _sectionsRepository = sectionsRepository;
        private readonly ICurrentUser _currentUser = currentUser;

        public async Task<OperationResult> Handle(CreateContractCommand request, CancellationToken cancellationToken)
        {

            var currentContracts = await _contractRepository.GetAsync(c => c.EmployeeUserId == _currentUser.Id);

            if (currentContracts is not null)
            {
                throw new RequestErrorException("Your Request is Under Review");
            }
            var medicalProvider = await _medicalProvider.GetAsync(e => e.UserId == _currentUser.Id);

            var departmentHead = await _sectionsRepository.GetByIdAsync(medicalProvider.SectionId);
            var empHead = await _medicalProvider.GetByIdAsync(departmentHead.HeadDoctorId);
            var services = await _serviceMDRepository.GetAllAsync();

            var contractVerion = new ContractVersion(Ulid.NewUlid().ToString(),
                request.HoursOfWork,
                request.DaysOfWork,
                request.FreelancingPercentage,
                request.SpectraTeamPercentage,
                request.FreelancingDuration,
                request.SpectraTeamDuration)
            {
                Order = 1,
                AcceptedByAdmin = false,
                AcceptedByEmployee = true,
                CreationDate = DateTime.UtcNow,
                State = ContractVersionStates.Active,
            };
            //adding freelancing services

            foreach (var service in services.Where(s => s.EnableForFreeLancer == true && request.FreelancingServices.Contains(s.Id)).ToArray())
            {
                var platformPercentage = 100 - request.FreelancingPercentage;
                if (!contractVerion.FreelancingServices.Any(s => s.ServiceId == service.Id))
                {
                    var requestService = request.FreelancingServices.First(s => s == service.Id);
                    contractVerion.FreelancingServices.Add(new ContractService
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
            foreach (var service in services.Where(s => s.EnableForSpectraTeam == true&& request.SpectraTeamServices.Contains(s.Id)).ToArray())
            {
                var platformPercentage = 100 - request.SpectraTeamPercentage;
                if (!contractVerion.SpectraTeamServices.Any(s => s.ServiceId == service.Id))
                {
                    var requestService = request.SpectraTeamServices.First(s => s == service.Id);
                    contractVerion.SpectraTeamServices.Add(new ContractService
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

            var contract = EmploymentContract.Create(
            Ulid.NewUlid().ToString(),
            medicalProvider.Id,
            medicalProvider.Name.FirstName,
             _currentUser.Id,
            departmentHead.HeadDoctorId,
            departmentHead.HeadDoctorName,
            empHead.UserId,
            $"Contract Of {medicalProvider.Name.FirstName}",
            ContractStates.Contracting,
            [contractVerion]
            );
            contract.JobTitle = medicalProvider.JobType.ToString();

            await _contractRepository.AddAsync(contract);

            return OperationResult<string>.Success(contract.Id);

        }
    }


    public class CreateContractCommandValidator : AbstractValidator<CreateContractCommand>
    {
        public CreateContractCommandValidator()
        {
            RuleFor(c => c.FreelancingServices)
                .NotEmpty()
                .NotNull()
                .Must(s => s.Count > 0);

            RuleFor(c => c.FreelancingPercentage)
                .NotEmpty()
                .NotNull()
                .LessThanOrEqualTo(70)
                .GreaterThanOrEqualTo(1);

            RuleFor(c => c.SpectraTeamPercentage)
                .NotEmpty()
                .NotNull()
                .LessThanOrEqualTo(40)
                .GreaterThanOrEqualTo(1);

            RuleFor(c => c.SpectraTeamDuration)
                .NotEmpty()
                .NotNull()
                .LessThanOrEqualTo(45)
                .GreaterThanOrEqualTo(1);

            RuleFor(c => c.FreelancingDuration)
                .NotEmpty()
                .NotNull()
                .LessThanOrEqualTo(20)
                .GreaterThanOrEqualTo(1);

        }
    }

}
