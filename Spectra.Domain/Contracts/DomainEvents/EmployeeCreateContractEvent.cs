using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.Contracts.DomainEvents
{
    public record EmployeeCreateContractEvent(EmploymentContract Contract) : BaseEvent
    {

    }
}
