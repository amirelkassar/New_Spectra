using Mapster;
using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.DiagnoseCommend.DTO;
using Spectra.Application.MasterData.GeneralComplaintsM.Dtos;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Queries
{

    public class GetAllGeneralComplaintsQuery :QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
    }

    public class GetAllGeneralComplaintsQueryHandler(IBaseMongoDbRepository<GeneralComplaint> generalComplaintRepository) 
        : IRequestHandler<GetAllGeneralComplaintsQuery, OperationResult>
    {
        private readonly IBaseMongoDbRepository<GeneralComplaint> _generalComplaintRepository = generalComplaintRepository;

        public async Task<OperationResult> Handle(GetAllGeneralComplaintsQuery request, CancellationToken cancellationToken)
        {
            ICollection<GeneralComplaint> complaints = null;
            long totalCount = 0;
            if (!string.IsNullOrWhiteSpace(request.Search)) 
            {
                request.Search = request.Search.Trim().ToLower();
                var (data, total) = await _generalComplaintRepository.GetAllAsync(c => c.ComplaintName.ToLower().StartsWith(request.Search)
                || c.Code1.ToLower().StartsWith(request.Search), null,
                request.SkipCount,
                request.MaxCount);

                complaints = data.ToArray();
                totalCount = total;
            }
            else
            {
                var (data, total) = await _generalComplaintRepository.GetAllAsync(null, null,
               request.SkipCount,
                request.MaxCount);

                complaints = data.ToArray();
                totalCount = total;
            }

            var dtos = complaints.Adapt<IReadOnlyCollection<ComplaintReadDto>>();
            return OperationResult<PaginatedResult<ComplaintReadDto>>.Success(new PaginatedResult<ComplaintReadDto>(dtos, totalCount, request.MaxCount));

        }
    }
}
