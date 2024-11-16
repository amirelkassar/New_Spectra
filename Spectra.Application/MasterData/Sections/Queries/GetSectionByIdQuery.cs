using MediatR;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Queries
{

    public class GetSectionByIdQuery : IRequest<OperationResult<Section>>
    {
        public string Id { get; set; }

    }

    public class GetSectionByIdQueryHandler : IRequestHandler<GetSectionByIdQuery, OperationResult<Section>>
    {
        private readonly ISectionsRepository _sectionsRepository;

        public GetSectionByIdQueryHandler(ISectionsRepository sectionsRepository)
        {
            _sectionsRepository = sectionsRepository;

        }
        public async Task<OperationResult<Section>> Handle(GetSectionByIdQuery request, CancellationToken cancellationToken)
        {

            var entitiy = await _sectionsRepository.GetByIdAsync(request.Id);
            if (entitiy == null)
            {
                throw new NotFoundException("Service", request.Id);
            }

            return OperationResult<Section>.Success(entitiy);


        }
    }
}
