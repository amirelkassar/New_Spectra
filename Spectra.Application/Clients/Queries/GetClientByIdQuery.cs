using MediatR;
using Spectra.Domain.Clients;

namespace Spectra.Application.Clients.Queries
{
    public class GetClientByIdQuery : IRequest<Client>
	{
		public string Id { get; set; }
	}

	public class GetClientByIdQueryHandler : IRequestHandler<GetClientByIdQuery, Client>
	{
		private readonly IClientRepository _clientRepository;

		public GetClientByIdQueryHandler(IClientRepository clientRepository)
		{
			_clientRepository = clientRepository;
		}

		public async Task<Client> Handle(GetClientByIdQuery request, CancellationToken cancellationToken)
		{
			return await _clientRepository.GetByIdAsync(request.Id);
		}
	}
}
