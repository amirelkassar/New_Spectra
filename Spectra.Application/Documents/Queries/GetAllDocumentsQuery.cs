using MediatR;
using Spectra.Domain.Documents;

namespace Spectra.Application.Documents.Queries
{
    public class GetAllDocumentsQuery : IRequest<IEnumerable<Document>>
    {
    }

    public class GetAllDocumentsQueryHandler : IRequestHandler<GetAllDocumentsQuery, IEnumerable<Document>>
    {
        private readonly IDocumentRepository _documentRepository;

        public GetAllDocumentsQueryHandler(IDocumentRepository documentRepository)
        {
            _documentRepository = documentRepository;
        }

        public async Task<IEnumerable<Document>> Handle(GetAllDocumentsQuery request, CancellationToken cancellationToken)
        {
            return await _documentRepository.GetAllAsync();
        }
    }
}
