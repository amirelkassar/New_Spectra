using Mapster;
using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Dtos;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Application.MasterData.ServicesMD.Dtos;
using Spectra.Application.Interfaces;

namespace Spectra.Application.MasterData.ServicesMD.Queries
{
    public class GetAllServicesMDQuery :QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
    }
    public class GetAllServicesMDQueryHandler(IBaseMongoDbRepository<PlatformService> serviceMRepository) : IRequestHandler<GetAllServicesMDQuery, OperationResult>
    {
        private readonly IBaseMongoDbRepository<PlatformService> _serviceMRepository = serviceMRepository;

        public async Task<OperationResult> Handle(GetAllServicesMDQuery request, CancellationToken cancellationToken)
        {
            IEnumerable<PlatformService> services = null;
            long totalData = 0;
            if (!string.IsNullOrEmpty(request.Search))
            {
                request.Search = request.Search.ToLower().Trim();
                var (data, total) = await _serviceMRepository.GetAllAsync(d => d.EnName.ToLower().StartsWith(request.Search) || d.ArName.ToLower().StartsWith(request.Search),
                null,
                request.SkipCount,
                request.MaxCount);
                totalData = total;
                services = data.ToArray();
            }
            else
            {
                var (data, total) = await _serviceMRepository.GetAllAsync(null,
                    null,
                    request.SkipCount,
                    request.MaxCount);
                totalData = total;
                services = data.ToArray();
            }
            var dtos = services.Adapt<IReadOnlyCollection<ServiceReadDto>>();
            return OperationResult<PaginatedResult<ServiceReadDto>>.Success(new PaginatedResult<ServiceReadDto>(dtos, totalData, request.MaxCount));

        }
    }
}
