using MediatR;
using Spectra.Domain.Clients;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Clients.Queries
{
    public class GetAllClientsQuery : QueryPaginationParam, IRequest<IEnumerable<Client>>
    {
        public string? Search { get; set; }
        public ICollection<ClientTypes> ClientTypes { get; set; }
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
