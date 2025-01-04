using Mapster;
using MediatR;
using Spectra.Application.MasterData.InternalExaminations.Dtos;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.InternalExaminations.Queries
{

    public class GetInternalExaminationByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }
    }

    public class GetInternalExaminationByIdQueryHandler : IRequestHandler<GetInternalExaminationByIdQuery, OperationResult>
    {
        private readonly IInternalExaminationRepository _InternalExaminationRepository;

        public GetInternalExaminationByIdQueryHandler(IInternalExaminationRepository internalExaminationRepository)
        {

            _InternalExaminationRepository = internalExaminationRepository;
        }
        public async Task<OperationResult> Handle(GetInternalExaminationByIdQuery request, CancellationToken cancellationToken)
        {
            var entitiy = await _InternalExaminationRepository.GetByIdAsync(request.Id) ?? throw new NotFoundException("InternalExamination", nameof(request.Id));
            var dto = entitiy.Adapt<InternalExaminatioReadDto>();
            return OperationResult<InternalExaminatioReadDto>.Success(dto);


        }
    }
}
