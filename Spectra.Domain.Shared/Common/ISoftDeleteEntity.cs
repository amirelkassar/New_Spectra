using System;

namespace Spectra.Domain.Shared.Common
{
    public interface ISoftDeleteEntity
    {
        DateTimeOffset? Deleted { get; }
        string? DeletedBy { get; }
        string? Reason { get; }
    }
}
