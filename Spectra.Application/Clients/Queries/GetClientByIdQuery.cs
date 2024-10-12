using MediatR;
using Spectra.Application.MasterData.Drug;
using Spectra.Domain.Clients;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Clients.Queries
{
    public class GetClientByIdQuery : IRequest<OperationResult<Client>>
    {
        public string Id { get; set; }
    }

    public class GetClientByIdQueryHandler : IRequestHandler<GetClientByIdQuery, OperationResult<Client>>
    {
        private readonly IClientRepository _clientRepository;

        public GetClientByIdQueryHandler(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        public async Task<OperationResult<Client>> Handle(GetClientByIdQuery request, CancellationToken cancellationToken)
        {
    
         

        
                var client = await _clientRepository.GetByIdAsync(request.Id);


                if (client == null)
                {
                    throw new NotFoundException("client", request.Id);
                }

                return OperationResult<Client>.Success(client);
            
        
        }
    }
}
