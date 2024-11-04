using MediatR;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Admin.Commands
{
    public class UpdateContractStatusCommand : ICommand<OperationResult<Unit>>

    {
        public string Id { get; set; }
        public ContractCases ContractCases { get; set; }
    }
    public class UpdateContractCommandHandler : IRequestHandler<UpdateContractStatusCommand, OperationResult<Unit>>
    {
        private readonly IContractRepository _contractRepository;

        public UpdateContractCommandHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;

        }

        public async Task<OperationResult<Unit>> Handle(UpdateContractStatusCommand request, CancellationToken cancellationToken)
        {
      


            var contract = await _contractRepository.GetByIdAsync(request.Id);

            contract.ContractCase = request.ContractCases;

            await _contractRepository.UpdateAsync(contract);
            return OperationResult<Unit>.Success(Unit.Value);
        }
    }
}
