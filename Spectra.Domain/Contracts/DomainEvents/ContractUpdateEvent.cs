using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Domain.Contracts.DomainEvents
{
    public record ContractUpdateEvent(EmploymentContract Contract, ContractChangeType Type) : BaseEvent
    {
    }
}
