using MediatR;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Clients;
using Spectra.Application.Hellper;
using Spectra.Domain.Clients;
using Spectra.Domain.Shared.Wrappers;
using System.Net.Sockets;

namespace Spectra.Application.Admin.Queries
{
    public class GetAllClientsQuery : IRequest<OperationResult<PaginatedResult<Client>>>
    {

        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;


    }

    public class GetAllClientQueryHandler : IRequestHandler<GetAllClientsQuery, OperationResult<PaginatedResult<Client>>>
    {
        private readonly IClientRepository _clientRepository;

        public GetAllClientQueryHandler(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        public async Task<OperationResult<PaginatedResult<Client>>> Handle(GetAllClientsQuery request, CancellationToken cancellationToken)
    {


        var paginatedClient = await _clientRepository.GetAllAsyncWithPaginated(pageNumber: request.PageNumber,
          pageSize: request.PageSize
            );


          
            var employeeData = paginatedClient.Items.Select(c => new GetAllClientsDto { Name = $"{c.Name.FirstName} + {c.Name.LastName}" , NumberOfKids= c.Patients.Count(), ClientType = c.ClientType  });

     



        return OperationResult<PaginatedResult<Client>>.Success(paginatedClient);
    }
}
}
