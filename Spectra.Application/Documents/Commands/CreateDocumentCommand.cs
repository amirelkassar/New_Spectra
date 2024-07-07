using MediatR;
using Spectra.Domain.Documents;
using Spectra.Domain.Enumeration;
using System.Threading;
using System.Threading.Tasks;

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
		public Type DocumentTypes { get; set; }
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
				request.Name,
				request.DocumentKey,
				request.DocumentSource,
				request.DocumentSourceId,
				request.Path,
				request.External,
				request.IsPublic,
				request.DocumentTypes,
				request.OwnerId,
				request.DocumentId
			);

			await _documentRepository.AddAsync(document);
			return document.Id;
		}
	}
}