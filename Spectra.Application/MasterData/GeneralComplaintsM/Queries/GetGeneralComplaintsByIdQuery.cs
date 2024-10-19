using MediatR;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Queries
{

    public class GetGeneralComplaintsByIdQuery : IRequest<OperationResult<GeneralComplaint>>
    {
        public string Id { get; set; }
    }

    public class GetDiagnoseByIdQueryHandler : IRequestHandler<GetGeneralComplaintsByIdQuery, OperationResult<GeneralComplaint>>
    {

        private readonly IGeneralComplaintRepository _generalComplaintRepository;

        public GetDiagnoseByIdQueryHandler(IGeneralComplaintRepository generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }

        public async Task<OperationResult<GeneralComplaint>> Handle(GetGeneralComplaintsByIdQuery request, CancellationToken cancellationToken)
        {



            var entitiy = await _generalComplaintRepository.GetByIdAsync(request.Id);
            if (entitiy == null)
            {
                throw new NotFoundException("GeneralComplaint", request.Id);
            }

            return OperationResult<GeneralComplaint>.Success(entitiy);


        }
    }
}
