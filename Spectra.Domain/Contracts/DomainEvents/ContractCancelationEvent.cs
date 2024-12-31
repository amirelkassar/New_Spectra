using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Domain.Contracts.DomainEvents
{
    public record ContractCancelationEvent(EmploymentContract Contract, ContractChangeType Type) : BaseEvent
    {
    }
}
