using MediatR;
using Spectra.Application.Documents.Commands;
using Spectra.Application.Documents.Queries;
using Spectra.Domain.Documents;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Documents.Services
{
    public class DocumentService
    {
        private readonly IMediator _mediator;

        public DocumentService(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<string> CreateDocument(string name,
            Guid documentKey,
            DocumentSources documentSource,
            string documentSourceId,
            string path,
            bool external,
            bool isPublic,
            DocumentTypes documentType,
            string ownerId,
            string documentId)
        {
            var command = new CreateDocumentCommand
            {
                Name = name,
                DocumentKey = documentKey,
                DocumentSource = documentSource,
                DocumentSourceId = documentSourceId,
                Path = path,
                External = external,
                IsPublic = isPublic,
                DocumentType = documentType,
                OwnerId = ownerId,
                DocumentId = documentId
            };

            return await _mediator.Send(command);
        }

        public async Task UpdateDocument(string id,
            string name,
            Guid documentKey,
            DocumentSources documentSource,
            string documentSourceId,
            string path,
            bool external,
            bool isPublic,
            string ownerId,
            string documentId)
        {
            var command = new UpdateDocumentCommand
            {
                Id = id,
                Name = name,
                Path = path,
                External = external,
                IsPublic = isPublic,
            };

            await _mediator.Send(command);
        }

        public async Task DeleteDocument(string id)
        {
            var command = new DeleteDocumentCommand { Id = id };
            await _mediator.Send(command);
        }

        public async Task<Document> GetDocumentById(string id)
        {
            var query = new GetDocumentByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<IEnumerable<Document>> GetAllDocuments()
        {
            var query = new GetAllDocumentsQuery();
            return await _mediator.Send(query);
        }
    }
}
