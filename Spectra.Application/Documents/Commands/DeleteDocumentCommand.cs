using MediatR;
using Spectra.Application.Messaging;

namespace Spectra.Application.Documents.Commands
{
    public class DeleteDocumentCommand : ICommand<Unit>
    {
        public string Id { get; set; }
    }

    public class DeleteDocumentCommandHandler : IRequestHandler<DeleteDocumentCommand, Unit>
    {
        private readonly IDocumentRepository _documentRepository;

        public DeleteDocumentCommandHandler(IDocumentRepository documentRepository)
        {
            _documentRepository = documentRepository;
        }

        public async Task<Unit> Handle(DeleteDocumentCommand request, CancellationToken cancellationToken)
        {
            await _documentRepository.DeleteAsync(request.Id);
            return Unit.Value;
        }
    }
}
