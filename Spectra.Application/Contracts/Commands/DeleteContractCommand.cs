using MediatR;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Commands
{
    public class DeleteContractCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteContractCommandHandler : IRequestHandler<DeleteContractCommand, OperationResult<Unit>>
    {
        private readonly IContractRepository _contractRepository;
     

        public DeleteContractCommandHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
          
        }

        public async Task<OperationResult<Unit>> Handle(DeleteContractCommand request, CancellationToken cancellationToken)
        {

            var contract = await _contractRepository.GetByIdAsync(request.Id);
          
            await _contractRepository.DeleteAsync(contract);
            return OperationResult<Unit>.Success(Unit.Value);

        }


    }

}
