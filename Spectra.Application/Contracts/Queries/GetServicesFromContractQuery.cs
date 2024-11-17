using MediatR;
using MongoDB.Driver;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Contracts.Repository;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetServicesFromContractQuery : IRequest<OperationResult<List<GetAllServicesFromContractDto>>>
    {
        public string Id { get; set; }

    }

    public class GetServicesFromContractQueryHandler : IRequestHandler<GetServicesFromContractQuery, OperationResult<List<GetAllServicesFromContractDto>>>
    {
        private readonly IContractRepository _contractRepository;

        public GetServicesFromContractQueryHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
        }

        public async Task<OperationResult<List<GetAllServicesFromContractDto>>> Handle(GetServicesFromContractQuery request, CancellationToken cancellationToken)
        {
            var services = await _contractRepository.GetAllAsync(
                x => x.EmployeeId == request.Id && x.ContractCase == ContractCases.ACTIVE, null);

            var doctorServices = services.Select(x => new GetAllServicesFromContractDto
            {
                Freelance = x.Freelance.Select(y => new ServicesDataFromContractDto
                {
                    ServicesData = y.Service,
                    Price = y.Selary,
                }).ToList(),
                SpectraTeam = x.SpectraTeam.Select(y => new ServicesDataFromContractDto
                {

                    ServicesData = y.Service,
                    Price = y.Selary,
                }).ToList()
            }).ToList();

            return OperationResult<List<GetAllServicesFromContractDto>>.Success(doctorServices);
        }
    }
}

