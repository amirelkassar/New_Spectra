using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.Sections.Commands
{
    public class DeleteSectionsCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
    }
    public class DeleteSectionsCommandHandler(ISectionsRepository sectionsRepository) : IRequestHandler<DeleteSectionsCommand, OperationResult>
    {
        private readonly ISectionsRepository _sectionsRepository = sectionsRepository;

        public async Task<OperationResult> Handle(DeleteSectionsCommand request, CancellationToken cancellationToken)
        {
            var entity = await _sectionsRepository.GetByIdAsync(request.Id);
            if (entity is null)
            {
                throw new NotFoundException("Sections", request.Id);
            }
            await _sectionsRepository.DeleteAsync(entity);
            return OperationResult<Unit>.Success(Unit.Value);
        }
    }

}
