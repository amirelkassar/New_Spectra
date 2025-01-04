using MediatR;
using Spectra.Application.Messaging;

namespace Spectra.Application.Documents.Commands
{
    public class UpdateDocumentCommand : ICommand<Unit>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
        public bool External { get; set; }
        public bool IsPublic { get; set; }
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
            document.Path = request.Path;
            document.External = request.External;
            document.IsPublic = request.IsPublic;

            await _documentRepository.UpdateAsync(document);
            return Unit.Value;
        }
    }
}