using MediatR;
using Spectra.Domain.MasterData.InternalExaminations;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.InternalExaminations.Queries
{

    public class GetAllInternalExaminationQuery : IRequest<OperationResult<IEnumerable<InternalExamination>>>
    {

    }

    public class GetAllInternalExaminationQueryHandler : IRequestHandler<GetAllInternalExaminationQuery, OperationResult<IEnumerable<InternalExamination>>>
    {
        private readonly IInternalExaminationRepository _InternalExaminationRepository;

        public GetAllInternalExaminationQueryHandler(IInternalExaminationRepository internalExaminationRepository)
        {

            _InternalExaminationRepository = internalExaminationRepository;
        }

        public async Task<OperationResult<IEnumerable<InternalExamination>>> Handle(GetAllInternalExaminationQuery request, CancellationToken cancellationToken)
        {

            var entity = await _InternalExaminationRepository.GetAllAsync();

            return OperationResult<IEnumerable<InternalExamination>>.Success(entity);


        }
    }
}
