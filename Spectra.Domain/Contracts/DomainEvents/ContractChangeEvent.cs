using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Domain.Contracts.DomainEvents
{
    public record ContractChangeEvent(EmploymentContract Contract, ContractChangeType Type, bool Value) : BaseEvent
    {
    }
}
