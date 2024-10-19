using MediatR;
using Spectra.Domain.Documents;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Documents.Commands
{
    public class CreateDocumentCommand : IRequest<string>
    {
        public string Name { get; set; }
        public Guid DocumentKey { get; set; }
        public DocumentSources DocumentSource { get; set; }
        public string DocumentSourceId { get; set; }
        public string Path { get; set; }
        public bool External { get; set; }
        public bool IsPublic { get; set; }
        public DocumentTypes DocumentType { get; set; }
        public string OwnerId { get; set; }
        public string DocumentId { get; set; }
    }

    public class CreateDocumentCommandHandler : IRequestHandler<CreateDocumentCommand, string>
    {
        private readonly IDocumentRepository _documentRepository;

        public CreateDocumentCommandHandler(IDocumentRepository documentRepository)
        {
            _documentRepository = documentRepository;
        }

        public async Task<string> Handle(CreateDocumentCommand request, CancellationToken cancellationToken)
        {
            var document = Document.Create(
                  Ulid.NewUlid().ToString(),
            request.Name,
                request.DocumentSource,
                request.Path,
                request.DocumentType,
                request.OwnerId,
                request.External,
                request.IsPublic
            //,request.DocumentKey,
            //request.DocumentSourceId,
            //request.DocumentId

            );

            await _documentRepository.AddAsync(document);
            return document.Id;
        }
    }
}