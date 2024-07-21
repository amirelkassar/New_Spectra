using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Enumeration;
using Spectra.Domain.ValueObjects;
using System;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Input;

namespace Spectra.Application.Clients.Commands
{
    public class UpdateClientCommand : ICommand<Unit>
	{
		public string Id { get; set; }
		public Name Name { get; set; }
		public string NationalId { get; set; }
		public PhoneNumber PhoneNumber { get; set; }
		public ClientTypes ClientType { get; set; }
		public string UserId { get; set; }
		public EmailAddress EmailAddress { get; set; }
		public Address Address { get; set; }
	}

	public class UpdateClientCommandHandler : IRequestHandler<UpdateClientCommand, Unit>
	{
		private readonly IClientRepository _clientRepository;

		public UpdateClientCommandHandler(IClientRepository clientRepository)
		{
			_clientRepository = clientRepository;
		}

		public async Task<Unit> Handle(UpdateClientCommand request, CancellationToken cancellationToken)
		{
			var client = await _clientRepository.GetByIdAsync(request.Id);
			if (client == null)
			{
				throw new Exception("Client not found");
			}

			client.Name = request.Name;
			client.NationalId = request.NationalId;
			client.PhoneNumber = request.PhoneNumber;
			client.ClientType = request.ClientType;
			client.UserId = request.UserId;
			client.EmailAddress = request.EmailAddress;
			client.Address = request.Address;

			await _clientRepository.UpdateAsync(client);
			return Unit.Value;
		}
	}
}
