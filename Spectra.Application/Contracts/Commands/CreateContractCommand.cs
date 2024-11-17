using MediatR;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;


namespace Spectra.Application.Contracts.Commands
{

    public class CreateContractCommand : ICommand<OperationResult<string>>
    {
        public List<OperationContract>? Freelance { get; set; }
        public List<OperationContract>? SpectraTeam { get; set; }
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public ContractCases ContractCase { get; set; }
    }

    public class CreateDoctorCommandHandler : IRequestHandler<CreateContractCommand, OperationResult<string>>
    {

        private readonly IContractRepository _contractRepository;
        private readonly ICurrentUser _currentUser;
        private readonly IMedicalProviderRepository _medicalProvider;

        //private readonly ISubContractRepository _subContractRepository;

        public CreateDoctorCommandHandler(IContractRepository contractRepository, ICurrentUser currentUser, IMedicalProviderRepository medicalProvider)
        {
            _contractRepository = contractRepository;
            _currentUser = currentUser;
            _medicalProvider = medicalProvider;
        }

        // here we Create Contract and have Two options First Send to Admin second Save it So 
        // here we get the Name From token but we Stell did not make it 
        public async Task<OperationResult<string>> Handle(CreateContractCommand request, CancellationToken cancellationToken)
        {

            var medicalProvider = await _medicalProvider.GetByIdentityIdAsync( _currentUser.Id);

            var CheckEmployees = await _contractRepository.GetAllAsync(x => x.EmployeeId== medicalProvider.Id, null);

            if (CheckEmployees.Any())
            {
                throw new RequestErrorException("Your Request is Under Review");
            }

            var fullName = new Name()
            {
                FirstName = medicalProvider.Name.FirstName

            };

             
            var contract = EmploymentContract.Create(       
            Ulid.NewUlid().ToString(),
            request.Freelance,
            request.SpectraTeam,
            request.HoursOfWork,
            request.DaysOfWork,
            medicalProvider.Id,
            medicalProvider.JobType.ToString(),
            request.ContractCase,
            fullName,
            AdminOrEmployee.Employee  
            );

            await _contractRepository.AddAsync(contract);

            return OperationResult<string>.Success(contract.Id);

        }
    }

   
}
