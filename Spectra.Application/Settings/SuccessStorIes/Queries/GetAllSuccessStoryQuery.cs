using MediatR;
using Spectra.Domain.Settings.SuccessStorIes;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.SuccessStorIes.Queries
{

    public class GetAllSuccessStoryQuery : IRequest<OperationResult<IEnumerable<SuccessStory>>>
    {

    }
    public class GetAllSuccessStoryQueryHandler : IRequestHandler<GetAllSuccessStoryQuery, OperationResult<IEnumerable<SuccessStory>>>
    {
        private readonly ISuccessStorIesRepository _successStorIesRepository;

        public GetAllSuccessStoryQueryHandler(ISuccessStorIesRepository successStorIesRepository)
        {
            _successStorIesRepository = successStorIesRepository;
        }

        public async Task<OperationResult<IEnumerable<SuccessStory>>> Handle(GetAllSuccessStoryQuery request, CancellationToken cancellationToken)
        {

            var entitiy = await _successStorIesRepository.GetAllAsync();
            return OperationResult<IEnumerable<SuccessStory>>.Success(entitiy);
        }
    }
}
