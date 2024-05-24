using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
        public DateTimeOffset Created { get; private set; }

        public string? CreatedBy { get; private set; }

        public DateTimeOffset? LastModified { get; private set; }

        public string? LastModifiedBy { get; private set; }
    }
}
