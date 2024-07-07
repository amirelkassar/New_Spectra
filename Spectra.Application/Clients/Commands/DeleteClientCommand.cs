using MediatR;
using Spectra.Application.Messaging;
using System.Windows.Input;

namespace Spectra.Application.Clients.Commands
{
    public class DeleteClientCommand : ICommand<Unit>
	{
		public string Id { get; set; }
	}

	public class DeleteClientCommandHandler : IRequestHandler<DeleteClientCommand ,Unit>
	{
		private readonly IClientRepository _clientRepository;

		public DeleteClientCommandHandler(IClientRepository clientRepository)
		{
			_clientRepository = clientRepository;
		}

		public async Task<Unit> Handle(DeleteClientCommand request, CancellationToken cancellationToken)
		{
			var client = await _clientRepository.GetByIdAsync(request.Id);
			if (client == null)
			{
				throw new Exception("Client not found");
			}

			await _clientRepository.DeleteAsync(client);
			return Unit.Value;
		}


	}
}
