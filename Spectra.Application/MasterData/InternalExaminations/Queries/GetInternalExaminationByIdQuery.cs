using MediatR;
using Spectra.Domain.MasterData.InternalExaminations;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.InternalExaminations.Queries
{

    public class GetInternalExaminationByIdQuery : IRequest<OperationResult<InternalExamination>>
    {
        public string Id { get; set; }
    }

    public class GetInternalExaminationByIdQueryHandler : IRequestHandler<GetInternalExaminationByIdQuery, OperationResult<InternalExamination>>
    {
        private readonly IInternalExaminationRepository _InternalExaminationRepository;

        public GetInternalExaminationByIdQueryHandler(IInternalExaminationRepository internalExaminationRepository)
        {

            _InternalExaminationRepository = internalExaminationRepository;
        }
        public async Task<OperationResult<InternalExamination>> Handle(GetInternalExaminationByIdQuery request, CancellationToken cancellationToken)
        {



            var entitiy = await _InternalExaminationRepository.GetByIdAsync(request.Id); ;


            return OperationResult<InternalExamination>.Success(entitiy);


        }
    }
}
