using MediatR;
using Spectra.Domain.Documents;

namespace Spectra.Application.Documents.Queries
{
    public class GetDocumentByIdQuery : IRequest<Document>
    {
        public string Id { get; set; }
    }

    public class GetDocumentByIdQueryHandler : IRequestHandler<GetDocumentByIdQuery, Document>
    {
        private readonly IDocumentRepository _documentRepository;

        public GetDocumentByIdQueryHandler(IDocumentRepository documentRepository)
        {
            _documentRepository = documentRepository;
        }

        public async Task<Document> Handle(GetDocumentByIdQuery request, CancellationToken cancellationToken)
        {
            return await _documentRepository.GetByIdAsync(request.Id);
        }
    }
}
