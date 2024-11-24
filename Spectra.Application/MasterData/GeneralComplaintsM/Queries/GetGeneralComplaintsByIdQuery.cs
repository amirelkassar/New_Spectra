using Mapster;
using MediatR;
using Spectra.Application.MasterData.GeneralComplaintsM.Dtos;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Queries
{

    public class GetGeneralComplaintsByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }
    }

    public class GetDiagnoseByIdQueryHandler : IRequestHandler<GetGeneralComplaintsByIdQuery, OperationResult>
    {

        private readonly IGeneralComplaintRepository _generalComplaintRepository;

        public GetDiagnoseByIdQueryHandler(IGeneralComplaintRepository generalComplaintRepository)
        {

            _generalComplaintRepository = generalComplaintRepository;
        }

        public async Task<OperationResult> Handle(GetGeneralComplaintsByIdQuery request, CancellationToken cancellationToken)
        {
            var entitiy = await _generalComplaintRepository.GetByIdAsync(request.Id);
            if (entitiy == null)
            {
                throw new NotFoundException("GeneralComplaint", request.Id);
            }
            var dto = entitiy.Adapt<ComplaintReadDto>();
            return OperationResult<ComplaintReadDto>.Success(dto);


        }
    }
}
