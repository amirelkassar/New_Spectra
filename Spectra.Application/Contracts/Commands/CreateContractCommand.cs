using MediatR;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.Contracts;
using Spectra.Domain.Employees.MedicalStaff;
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
        public string EmployeeId { get; set; }
        public ContractCases ContractCase { get; set; }
 

    }

    public class CreateDoctorCommandHandler : IRequestHandler<CreateContractCommand, OperationResult<string>>
    {
        private readonly IMedicalProviderRepository _medicalProvider;
        private readonly IContractRepository _contractRepository;
        private readonly ICurrentUser _currentUser;


        public CreateDoctorCommandHandler(IContractRepository contractRepository, IMedicalProviderRepository medicalProvider, ICurrentUser currentUser )
        {
            _contractRepository = contractRepository;
            _medicalProvider = medicalProvider;
            _currentUser = currentUser;
        }

        // here we Create Contract and have Two options First Send to Admin second Save it So 
        // here we get the Name From token but we Stell did not make it 
        public async Task<OperationResult<string>> Handle(CreateContractCommand request, CancellationToken cancellationToken)
        {
            var CheckEmployee = await _medicalProvider.GetAllAsync(x => x.UserId == _currentUser.Id, null);
            if (CheckEmployee.Any())
            {
                throw new RequestErrorException("Your Id is Not Found  ");
            }
            var employeeIds = CheckEmployee.Select(x => x.Id).ToList(); 

            var CheckEmployees = await _contractRepository.GetAllAsync(x => employeeIds.Contains(x.EmployeeId), null);

            if (CheckEmployees.Any())
            {
                throw new RequestErrorException("Your Request is Under Review");
            }
            var medicalProviders = await _medicalProvider.GetByIdAsync(request.EmployeeId);
            var fullName = new Name()
            {
                FirstName = medicalProviders.Name.FirstName

            };

             
            var contract = EmploymentContract.Create(
            Ulid.NewUlid().ToString(),
            request.Freelance,
            request.SpectraTeam,
            request.HoursOfWork,
            request.DaysOfWork,
            _currentUser.Id,
            medicalProviders.JobType.ToString(),
            request.ContractCase,
            fullName,
            AdminOrEmployee.Employee

                );

            await _contractRepository.AddAsync(contract);

            return OperationResult<string>.Success(contract.Id);


        }
    }


}
