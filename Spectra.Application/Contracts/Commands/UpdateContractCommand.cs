using MediatR;
using Spectra.Application.Contracts.Repository;
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
    public class UpdateAdminContractCommand : ICommand<OperationResult<Unit>>
    {
        public string id { get; set; }
        public List<OperationContract>? Freelance { get; set; }
        public List<OperationContract>? SpectraTeam { get; set; }
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
        public ContractCases ContractCase { get; set; }

    }

    public class UpdateContractCommandHandler : IRequestHandler<UpdateAdminContractCommand, OperationResult<Unit>>
    {
        private readonly IContractRepository _contractRepository;
        private readonly ICurrentUser _currentUser;
  

        public UpdateContractCommandHandler(IContractRepository contractRepository, ICurrentUser currentUser)
        {
            _contractRepository = contractRepository;
            _currentUser = currentUser;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateAdminContractCommand request, CancellationToken cancellationToken)
        {

            var contract = await _contractRepository.GetByIdAsync(request.id);
            if (_currentUser.Id != contract.EmployeeId)
            {
                throw new RequestErrorException("You are Not Allow to Change the Contract");
            }
          
            switch (contract.ContractCase)
            {

                case ContractCases.SAVE:
                    contract.ContractCase = request.ContractCase;
                  
                    contract.HoursOfWork = request.HoursOfWork;
                    contract.DaysOfWork = request.DaysOfWork;
                    contract.EmployeeName = _currentUser.Name;
                    contract.EmployeeId = _currentUser.Id;
                    contract.ContractCase = request.ContractCase;
                    contract.Freelance = request.Freelance;
                    contract.ContractCase = ContractCases.SENDTOADMIN;
                    contract.AdminOrEmployee = AdminOrEmployee.Employee;
                    await _contractRepository.UpdateAsync(contract);

                    return OperationResult<Unit>.Success(Unit.Value);
                case ContractCases.SENDTOADMIN:
                    throw new RequestErrorException(" Your Request Under review ");
                case ContractCases.SendContarctToSignature:
                    throw new RequestErrorException("Admin Accpet the Offer cannot modify ");
                case ContractCases.ACTIVE:
                    throw new RequestErrorException("You cannot modify right now.");

                case ContractCases.REFUSE:
                    throw new RequestErrorException("Your request is refused. You cannot make any further requests.");

                // Add any additional cases here if needed
                default:
                    var contracts = EmploymentContract.Create(

              Ulid.NewUlid().ToString(),
              request.Freelance,
              request.SpectraTeam,
              request.HoursOfWork,
              request.DaysOfWork,
              contract.Id,
              contract.Titel,
              ContractCases.SENDTOADMIN,
              _currentUser.Name,
              AdminOrEmployee.Employee
             );
                 
                    await _contractRepository.AddAsync(contracts);
                    contract.ContractCase = ContractCases.REFUSE;
                    await _contractRepository.UpdateAsync(contract);

                    return OperationResult<Unit>.Success(Unit.Value);
                    
            }

           

        }
    }

}
