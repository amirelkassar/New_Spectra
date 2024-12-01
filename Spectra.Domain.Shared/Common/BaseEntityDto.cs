using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Common
{
    public class BaseEntityDto<TKey>
    {
        public TKey Id { get; set; }
        public DateTimeOffset Created { get;  set; }

        public string? CreatedBy { get;  set; }

        public DateTimeOffset? LastModified { get;  set; }

        public string? LastModifiedBy { get; set; }
    }
}
