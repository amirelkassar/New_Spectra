using Mapster;
using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.DiagnoseCommend.DTO;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.DiagnoseCommend.Queries
{

    public class GetAllDiagnoseQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
    }

    public class GetAllDiagnoseQueryHandler : IRequestHandler<GetAllDiagnoseQuery, OperationResult>
    {
        private readonly IBaseMongoDbRepository<Diagnose> _diagnoseRepository;

        public GetAllDiagnoseQueryHandler(IBaseMongoDbRepository<Diagnose> diagnoseRepository)
        {
            _diagnoseRepository = diagnoseRepository;
        }
        public async Task<OperationResult> Handle(GetAllDiagnoseQuery request, CancellationToken cancellationToken)
        {
            IEnumerable<Diagnose> diagnoses = null;
            long totalData = 0;
            if (!string.IsNullOrEmpty(request.Search))
            {
                request.Search = request.Search.ToLower().Trim();
                var (data, total) = await _diagnoseRepository.GetAllAsync(d => d.Code1.ToLower().Contains(request.Search) || d.Name.ToLower().Contains(request.Search),
                    null,
                    request.SkipCount,
                    request.MaxCount);

                totalData = total;
                diagnoses = data.ToArray();
            }
            else
            {
                var (data, total) = await _diagnoseRepository.GetAllAsync(null,
                    null,
                    request.SkipCount,
                    request.MaxCount);
                totalData = total;
                diagnoses = data.ToArray();
            }
            var dtos = diagnoses.Adapt<IReadOnlyCollection<DiagnoseReadDto>>();
            return OperationResult<PaginatedResult<DiagnoseReadDto>>.Success(new PaginatedResult<DiagnoseReadDto>(dtos, totalData, request.MaxCount));
        }
    }
}


