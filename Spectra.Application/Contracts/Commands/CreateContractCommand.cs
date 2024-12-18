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
        public List<ContractServiceCreateDto>? FreelancingServices { get; set; }
        public List<ContractServiceCreateDto>? SpectraTeamServices { get; set; }
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

            var contractVerion = new ContractVersion(Ulid.NewUlid().ToString())
            {
                Order = 1,
                AcceptedByAdmin = false,
                AcceptedByEmployee = true,
                CreationDate = DateTime.UtcNow,
                State = ContractVersionStates.Active
            };

            foreach (var service in services)
            {
                if (request.FreelancingServices.Any(s => s.ServiceId == service.Id) && !contractVerion.FreelancingServices.Any(s => s.ServiceId == service.Id))
                {
                    var requestService = request.FreelancingServices.First(s => s.ServiceId == service.Id);
                    contractVerion.FreelancingServices.Add(new ContractService
                    {
                        ServiceId = service.Id,
                        EnName = service.EnName,
                        ArName = service.ArName,
                        Duration = requestService.Duration,
                        EmployeeFees = requestService.EmployeeFees,
                        EmployeePercentage = requestService.EmployeePercentage,
                        PlatformFees = requestService.PlatformFees,
                        PlatformPercentage = requestService.PlatformPercentage,
                        ServiceFees = requestService.ServiceFees,
                        ArTerms = service.ArTermsAndConditions,
                        EnTerms=service.ArTermsAndConditions
                    });
                }
                if (request.SpectraTeamServices.Any(s => s.ServiceId == service.Id) && !contractVerion.SpectraTeamServices.Any(s => s.ServiceId == service.Id))
                {
                    var requestService = request.SpectraTeamServices.First(s => s.ServiceId == service.Id);
                    contractVerion.SpectraTeamServices.Add(new ContractService
                    {
                        ServiceId = service.Id,
                        EnName = service.EnName,
                        ArName = service.ArName,
                        Duration = requestService.Duration,
                        EmployeeFees = requestService.EmployeeFees,
                        EmployeePercentage = requestService.EmployeePercentage,
                        PlatformFees = requestService.PlatformFees,
                        PlatformPercentage = requestService.PlatformPercentage,
                        ServiceFees = requestService.ServiceFees,
                        ArTerms = service.ArTermsAndConditions,
                        EnTerms = service.ArTermsAndConditions
                    });
                }
            }

            var contract = EmploymentContract.Create(
            Ulid.NewUlid().ToString(),
            request.HoursOfWork,
            request.DaysOfWork,
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


}
