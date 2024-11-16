using MediatR;

using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Queries
{

    public class GetAllGeneralComplaintsQuery : IRequest<OperationResult<IEnumerable<GeneralComplaint>>>
    {

    }

    public class GetAllGeneralComplaintsQueryHandler : IRequestHandler<GetAllGeneralComplaintsQuery, OperationResult<IEnumerable<GeneralComplaint>>>
    {

        private readonly IGeneralComplaintRepository _generalComplaintRepository;

        public GetAllGeneralComplaintsQueryHandler(IGeneralComplaintRepository generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }

        public async Task<OperationResult<IEnumerable<GeneralComplaint>>> Handle(GetAllGeneralComplaintsQuery request, CancellationToken cancellationToken)
        {


            var generalComplaint = await _generalComplaintRepository.GetAllAsync();

            return OperationResult<IEnumerable<GeneralComplaint>>.Success(generalComplaint);

        }
    }
}
