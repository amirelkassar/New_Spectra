using Mapster;
using MediatR;
using Spectra.Application.MasterData.InternalExaminations.Dtos;
using Spectra.Application.MasterData.Sections.Dto;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Queries
{
    public class GetSectionByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }
    }

    public class GetSectionByIdQueryHandler(ISectionsRepository sectionsRepository) : IRequestHandler<GetSectionByIdQuery, OperationResult>
    {
        private readonly ISectionsRepository _sectionsRepository = sectionsRepository;

        public async Task<OperationResult> Handle(GetSectionByIdQuery request, CancellationToken cancellationToken)
        {
            var entitiy = await _sectionsRepository.GetByIdAsync(request.Id);
            if (entitiy is null)
            {
                throw new NotFoundException("Sections", request.Id);
            }
            var dto= entitiy.Adapt<SectionDto>();
            return OperationResult<SectionDto>.Success(dto);


        }
    }
}
