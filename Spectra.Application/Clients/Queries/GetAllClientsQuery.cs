using MediatR;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Domain.Clients;

namespace Spectra.Application.Clients.Queries
{
	public class GetAllClientsQuery : IRequest<IEnumerable<Client>>
	{
	}

	public class GetAllClientsQueryHandler : IRequestHandler<GetAllClientsQuery, IEnumerable<Client>>
	{
		private readonly IClientRepository _clientRepository;

		public GetAllClientsQueryHandler(IClientRepository clientRepository)
		{
			_clientRepository = clientRepository;
		}

		public async Task<IEnumerable<Client>> Handle(GetAllClientsQuery request, CancellationToken cancellationToken)
		{
			return await _clientRepository.GetAllAsync();
		}
	}
}
