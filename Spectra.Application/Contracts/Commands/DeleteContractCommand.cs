using MediatR;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Commands
{
    public class DeleteContractCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
    }

    public class DeleteContractCommandHandler : IRequestHandler<DeleteContractCommand, OperationResult>
    {
        private readonly IContractRepository _contractRepository;


        public DeleteContractCommandHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
        }

        public async Task<OperationResult> Handle(DeleteContractCommand request, CancellationToken cancellationToken)
        {
            await _contractRepository.DeleteAsync(request.Id);
            return OperationResult.Success();

        }


    }

}
