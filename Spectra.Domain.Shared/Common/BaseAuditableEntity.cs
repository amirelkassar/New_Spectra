using System;

namespace Spectra.Domain.Shared.Common
{
    public abstract class BaseAuditableEntity<TKey> : BaseEntity<TKey>
    {
        protected BaseAuditableEntity(string? createdBy = null) : base()
        {
            CreatedBy = createdBy;
            Created = DateTimeOffset.UtcNow;
        }
        protected BaseAuditableEntity(TKey id, string? createdBy = null) : base(id)
        {
            CreatedBy = createdBy;
            Created = DateTimeOffset.UtcNow;
        }
        public DateTimeOffset Created { get; protected set; } = DateTimeOffset.UtcNow;

        public string? CreatedBy { get; protected set; }

        public DateTimeOffset? LastModified { get; protected set; }

        public string? LastModifiedBy { get; protected set; }
    }
}
