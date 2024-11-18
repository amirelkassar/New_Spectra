using MediatR;

using Spectra.Application.Contracts.Repository;
using Spectra.Application.Messaging;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Admin.Commands
{
    public class UpdateContractToSendToEmployeeCommand : ICommand<OperationResult<Unit>>
    {
        public string id { get; set; }
        public List<OperationContract>? Freelance { get; set; }
        public List<OperationContract>? SpectraTeam { get; set; }
        public double Discount { get; set; }
        public double Duration { get; set; }
        public int HoursOfWork { get; set; }
        public int DaysOfWork { get; set; }
      
    
        public ContractCases ContractCase { get; set; }

    }

    public class UpdateContractToSendToEmployeeCommandHandler : IRequestHandler<UpdateContractToSendToEmployeeCommand, OperationResult<Unit>>
    {
        private readonly IContractRepository _contractRepository;

        public UpdateContractToSendToEmployeeCommandHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;

        }

        public async Task<OperationResult<Unit>> Handle(UpdateContractToSendToEmployeeCommand request, CancellationToken cancellationToken)
        {

          

       
            var contract = await _contractRepository.GetByIdAsync(request.id);

          
            switch (contract.ContractCase)
            {

                case ContractCases.BACkTOEMPlOYEE:
                    throw new RequestErrorException(" Your Request Under review ");
                case ContractCases.SendContarctToSignature:
                    throw new RequestErrorException("Admin Accpet the Offer cannot modify ");
                case ContractCases.ACTIVE:
                    throw new RequestErrorException("You cannot modify right now.");

                case ContractCases.REFUSE:
                    throw new RequestErrorException("Your request is refused. You cannot make any further requests.");

                // Add any additional cases here if needed
                default:

                    break;
            }

            var Newcontract = EmploymentContract.Create(

              Ulid.NewUlid().ToString(),
              request.Freelance,
              request.SpectraTeam,
              request.HoursOfWork,
              request.DaysOfWork,
               contract.Id,
              contract.Titel,
              request.ContractCase,
              contract.EmployeeName,
              AdminOrEmployee.Admin
             );

            await _contractRepository.AddAsync(Newcontract);
            contract.ContractCase = ContractCases.REFUSE;
            await _contractRepository.UpdateAsync(contract);

            return OperationResult<Unit>.Success(Unit.Value);

        }
    }
}


