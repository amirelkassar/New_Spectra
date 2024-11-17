using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.Sections.Commands
{
    public class DeleteSectionsCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteSectionsCommandHandler : IRequestHandler<DeleteSectionsCommand, OperationResult<Unit>>
    {
        private readonly ISectionsRepository _sectionsRepository;




        public DeleteSectionsCommandHandler(ISectionsRepository sectionsRepository)
        {
            _sectionsRepository = sectionsRepository;

        }

        public async Task<OperationResult<Unit>> Handle(DeleteSectionsCommand request, CancellationToken cancellationToken)
        {

            var entity = await _sectionsRepository.GetByIdAsync(request.Id);


            await _sectionsRepository.DeleteAsync(entity);
            return OperationResult<Unit>.Success(Unit.Value);

        }
    }

}
