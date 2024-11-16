using MediatR;
using Spectra.Domain.Settings.SuccessStorIes;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.SuccessStorIes.Queries
{

    public class GetSuccessStoryByIdQuery : IRequest<OperationResult<SuccessStory>>
    {
        public string Id { get; set; }
    }

    public class GetSuccessStoryByIdQueryHandler : IRequestHandler<GetSuccessStoryByIdQuery, OperationResult<SuccessStory>>
    {
        private readonly ISuccessStorIesRepository _successStorIesRepository;

        public GetSuccessStoryByIdQueryHandler(ISuccessStorIesRepository successStorIesRepository)
        {
            _successStorIesRepository = successStorIesRepository;
        }


        public async Task<OperationResult<SuccessStory>> Handle(GetSuccessStoryByIdQuery request, CancellationToken cancellationToken)
        {

            var entitiy = await _successStorIesRepository.GetByIdAsync(request.Id);

            return OperationResult<SuccessStory>.Success(entitiy);


        }
    }
}
