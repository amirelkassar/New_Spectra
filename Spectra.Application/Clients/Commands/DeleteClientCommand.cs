using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Clients.Commands
{
    public class DeleteClientCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteClientCommandHandler : IRequestHandler<DeleteClientCommand, OperationResult<Unit>>
    {
        private readonly IClientRepository _clientRepository;

        public DeleteClientCommandHandler(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        public async Task<OperationResult<Unit>> Handle(DeleteClientCommand request, CancellationToken cancellationToken)
        {

            var client = await _clientRepository.GetByIdAsync(request.Id);

            await _clientRepository.DeleteAsync(client);
            return OperationResult<Unit>.Success(Unit.Value);

        }


    }

}
