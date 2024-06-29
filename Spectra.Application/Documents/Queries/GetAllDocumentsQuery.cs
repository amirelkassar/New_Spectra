using MediatR;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Domain.Entities.Documents;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

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
