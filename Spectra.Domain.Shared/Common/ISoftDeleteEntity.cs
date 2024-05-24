using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Common
{
    public interface ISoftDeleteEntity
    {
        DateTimeOffset? Deleted { get; }
        string? DeletedBy { get; }
        string? Reason {  get; }
    }
}
