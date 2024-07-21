using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Enumeration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace Spectra.Application.Documents.Commands
{
    public class UpdateDocumentCommand : ICommand<Unit>
	{
		public string Id { get; set; }
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
	public class UpdateDocumentCommandHandler : IRequestHandler<UpdateDocumentCommand, Unit>
	{
		private readonly IDocumentRepository _documentRepository;

		public UpdateDocumentCommandHandler(IDocumentRepository documentRepository)
		{
			_documentRepository = documentRepository;
		}

		public async Task<Unit> Handle(UpdateDocumentCommand request, CancellationToken cancellationToken)
		{
			var document = await _documentRepository.GetByIdAsync(request.Id);
			if (document == null)
			{
				throw new Exception("Document not found");
			}

			document.Name = request.Name;
			document.DocumentKey = request.DocumentKey;
			document.DocumentSource = request.DocumentSource;
			document.DocumentSourceId = request.DocumentSourceId;
			document.Path = request.Path;
			document.External = request.External;
			document.IsPublic = request.IsPublic;
			document.DocumentTypes = request.DocumentTypes;
			document.OwnerId = request.OwnerId;
			document.DocumentId = request.DocumentId;

			await _documentRepository.UpdateAsync(document);
			return Unit.Value;
		}
	}
}