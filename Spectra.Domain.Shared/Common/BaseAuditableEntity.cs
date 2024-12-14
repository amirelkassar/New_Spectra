using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Spectra.Domain.Shared.Common
{
    public abstract class BaseAuditableEntity<TKey> : BaseEntity<TKey> , IBaseAuditableEntity<TKey>
    {
        protected BaseAuditableEntity() : base() { }
        protected BaseAuditableEntity(TKey id) : base(id)
        {
            Created = DateTimeOffset.UtcNow;
        }
        protected BaseAuditableEntity(TKey id, string? createdBy = null) : base(id)
        {
            CreatedBy = createdBy;
            Created = DateTimeOffset.UtcNow;
        }

        public DateTimeOffset Created {  get;protected set; }

        public string? CreatedBy { get; protected set; }

        public DateTimeOffset LastModified { get; set; }

        public string? LastModifiedBy { get; set; }
    }

    public interface IBaseAuditableEntity<TKey> : IBaseEntity<TKey>
    {
        DateTimeOffset Created { get; }
        string? CreatedBy { get;  }

        DateTimeOffset LastModified { get; set; }
        string? LastModifiedBy { get; set; }

    }
}
