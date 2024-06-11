using Spectra.Domain.Enumeration;
using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Intrinsics.Arm;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Entities.Documents
{
	public class Document : BaseAuditableEntity<string>
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
        public ICollection<DocumentAccess> DocumentAccesses { get; set; }

        protected Document() { }
        private Document(string name , Guid documentKey , DocumentSources documentSource ,
            string documentSourceId , string path , bool external , bool isPublic , Type documentTypes ,
			string ownerId , string documentId)
        {
            Name = name;
            DocumentKey = documentKey;
            DocumentSource = documentSource;
            DocumentSourceId = documentSourceId;
            Path = path;
            External = external;
            IsPublic = isPublic;
            DocumentTypes = documentTypes;
            OwnerId = ownerId;
            DocumentId = documentId;
        }

        public static Document Create(string name, Guid documentKey, DocumentSources documentSource,
			string documentSourceId, string path, bool external, bool isPublic, Type documentTypes,
			string ownerId, string documentId)
        {
			if (string.IsNullOrWhiteSpace(name))
			{
				throw new ArgumentException("Name is required.", nameof(name));
			}

			if (documentKey == Guid.Empty)
			{
				throw new ArgumentException("Document key is required.", nameof(documentKey));
			}

			if (string.IsNullOrWhiteSpace(documentSourceId))
			{
				throw new ArgumentException("Document source ID is required.", nameof(documentSourceId));
			}

			if (string.IsNullOrWhiteSpace(path))
			{
				throw new ArgumentException("Path is required.", nameof(path));
			}

			if (string.IsNullOrWhiteSpace(ownerId))
			{
				throw new ArgumentException("Owner ID is required.", nameof(ownerId));
			}

			if (string.IsNullOrWhiteSpace(documentId))
			{
				throw new ArgumentException("Document ID is required.", nameof(documentId));
			}

			return new Document(name, documentKey, 
				documentSource, documentSourceId,
				path, external, isPublic, documentTypes, ownerId, documentId);
		}
    }
}
