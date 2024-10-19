using MediatR;
using Spectra.Domain.Clients;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Clients.Queries
{
    public class GetAllClientsQuery : QueryPaginationParam, IRequest<OperationResult<IEnumerable<Client>>>
    {
        public string? Search { get; set; }
        public ICollection<ClientTypes> ClientTypes { get; set; }
    }

    public class GetAllClientsQueryHandler : IRequestHandler<GetAllClientsQuery, OperationResult<IEnumerable<Client>>>
    {
        private readonly IClientRepository _clientRepository;

        public GetAllClientsQueryHandler(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        public async Task<OperationResult<IEnumerable<Client>>> Handle(GetAllClientsQuery request, CancellationToken cancellationToken)
        {


            var client = await _clientRepository.GetAllAsync();

            return OperationResult<IEnumerable<Client>>.Success(client);


        }
    }
}
