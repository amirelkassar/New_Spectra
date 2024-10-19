using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;

namespace Spectra.Domain.Documents
{
    public class Document : BaseAuditableEntity<string>
    {
        public string Name { get; set; }
        public DocumentSources DocumentSource { get; private set; }
        public string? DocumentSourceId { get; private set; }
        public string Path { get; set; }
        public bool External { get; set; }
        public bool IsPublic { get; set; }
        public DocumentTypes DocumentType { get; private set; }
        public string OwnerId { get; private set; }

        protected Document() { }
        private Document(string id,
            string name,
            DocumentSources documentSource,
            string path,
            DocumentTypes documentType,
            string ownerId,
            bool external = false,
            bool isPublic = false)
        {
            Name = name;
            DocumentSource = documentSource;
            Path = path;
            External = external;
            IsPublic = isPublic;
            DocumentType = documentType;
            OwnerId = ownerId;
        }

        public static Document Create(string id,
            string name,
            DocumentSources documentSource,
            string path,
            DocumentTypes documentType,
            string ownerId,
            bool external = false,
            bool isPublic = false)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(documentSource, nameof(documentSource));
            ArgumentNullException.ThrowIfNull(path, nameof(path));
            ArgumentNullException.ThrowIfNull(documentType, nameof(documentType));
            ArgumentNullException.ThrowIfNull(ownerId, nameof(ownerId));

            return new Document(id,
                name,
                documentSource,
                path,
                documentType,
                ownerId,
                external,
                isPublic);
        }
    }
}
