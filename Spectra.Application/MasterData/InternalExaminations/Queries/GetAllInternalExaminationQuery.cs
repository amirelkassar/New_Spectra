using Mapster;
using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.DiagnoseCommend.DTO;
using Spectra.Application.MasterData.DiagnoseCommend;
using Spectra.Application.MasterData.InternalExaminations.Dtos;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.MasterData.InternalExaminations;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.InternalExaminations.Queries
{

    public class GetAllInternalExaminationQuery :QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
    }

    public class GetAllInternalExaminationQueryHandler(IBaseMongoDbRepository<InternalExamination> internalExaminationRepository) : IRequestHandler<GetAllInternalExaminationQuery, OperationResult>
    {
        private readonly IBaseMongoDbRepository<InternalExamination> _InternalExaminationRepository = internalExaminationRepository;

        public async Task<OperationResult> Handle(GetAllInternalExaminationQuery request, CancellationToken cancellationToken)
        {
            IEnumerable<InternalExamination> internalExaminations = null;
            long totalData = 0;
            if (!string.IsNullOrEmpty(request.Search))
            {
                request.Search = request.Search.ToLower().Trim();
                var (data, total) = await _InternalExaminationRepository.GetAllAsync(d => d.Name.ToLower().StartsWith(request.Search),
                    null,
                    request.SkipCount,
                request.MaxCount);

                totalData = total;
                internalExaminations = data.ToArray();
            }
            else
            {
                var (data, total) = await _InternalExaminationRepository.GetAllAsync(null,
                    null,
                    request.SkipCount,
                    request.MaxCount);
                totalData = total;
                internalExaminations = data.ToArray();
            }
            var dtos = internalExaminations.Adapt<IReadOnlyCollection<InternalExaminatioReadDto>>();
            return OperationResult<PaginatedResult<InternalExaminatioReadDto>>.Success(new PaginatedResult<InternalExaminatioReadDto>(dtos, totalData,request.MaxCount));
        }
    }
}
