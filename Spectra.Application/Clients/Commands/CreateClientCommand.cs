using MediatR;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Application.Messaging;
using Spectra.Domain.Clients;
using Spectra.Domain.Entities.ValueObjects;
using Spectra.Domain.Enumeration;
using System.Windows.Input;

namespace Spectra.Application.Clients.Commands
{
	public class CreateClientCommand : ICommand<string>
	{
		public Name Name { get; set; }
		public string NationalId { get; set; }
		public PhoneNumber PhoneNumber { get; set; }
		public ClientTypes ClientType { get; set; }
		public string UserId { get; set; }
		public EmailAddress EmailAddress { get; set; }
		public Address Address { get; set; }
	}

	public class CreateClientCommandHandler : IRequestHandler<CreateClientCommand, string>
	{
		private readonly IClientRepository _clientRepository;

		public CreateClientCommandHandler(IClientRepository clientRepository)
		{
			_clientRepository = clientRepository;
		}

		public async Task<string> Handle(CreateClientCommand request, CancellationToken cancellationToken)
		{
			var client = Client.Create(request.Name, request.NationalId, request.PhoneNumber, request.ClientType, request.UserId, request.EmailAddress, request.Address);
			await _clientRepository.AddAsync(client);
			return client.Id;
		}
	}
}
