using Mapster;
using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Dtos;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries
{

    public class GetAllMedicalTestsAndXraysQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
    }

    public class GetAllMedicalTestsAndXraysQueryHandler : IRequestHandler<GetAllMedicalTestsAndXraysQuery, OperationResult>
    {

        private readonly IBaseMongoDbRepository<MedicalTestAndXray> _medicalTestsAndXrayRepository;
        public GetAllMedicalTestsAndXraysQueryHandler(IBaseMongoDbRepository<MedicalTestAndXray> medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
        }
        public async Task<OperationResult> Handle(GetAllMedicalTestsAndXraysQuery request, CancellationToken cancellationToken)
        {
            IEnumerable<MedicalTestAndXray> medicalTestAndXray = null;
            long totalData = 0;
            if (!string.IsNullOrEmpty(request.Search))
            {
                request.Search = request.Search.ToLower().Trim();
                var (data, total) = await _medicalTestsAndXrayRepository.GetAllAsync(d => d.Name.ToLower().StartsWith(request.Search),
                null,
                request.SkipCount,
                request.MaxCount);
                totalData = total;
                medicalTestAndXray = data.ToArray();
            }
            else
            {
                var (data, total) = await _medicalTestsAndXrayRepository.GetAllAsync(null,
                    null,
                    request.SkipCount,
                    request.MaxCount);
                totalData = total;
                medicalTestAndXray = data.ToArray();
            }
            var dtos = medicalTestAndXray.Adapt<IReadOnlyCollection<MedicalTestsAndXrayReadDto>>();
            return OperationResult<PaginatedResult<MedicalTestsAndXrayReadDto>>.Success(new PaginatedResult<MedicalTestsAndXrayReadDto>(dtos, totalData, request.MaxCount));
        }
    }
}
