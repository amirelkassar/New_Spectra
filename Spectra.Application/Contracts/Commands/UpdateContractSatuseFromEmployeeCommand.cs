using MediatR;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Commands
{
    public class UpdateContractSatuseFromEmployeeCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }




    }

    public class UpdateContractSatuseFromEmployeeCommandHandler : IRequestHandler<UpdateContractSatuseFromEmployeeCommand, OperationResult<Unit>>
    {
        private readonly IContractRepository _contractRepository;

        public UpdateContractSatuseFromEmployeeCommandHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;

        }

        public async Task<OperationResult<Unit>> Handle(UpdateContractSatuseFromEmployeeCommand request, CancellationToken cancellationToken)
        {


            var contract = await _contractRepository.GetByIdAsync(request.Id);

            contract.ContractCase = ContractCases.EMLOYEEACCPETOFFER;

            await _contractRepository.UpdateAsync(contract);

            return OperationResult<Unit>.Success(Unit.Value);

        }



    }
}


