using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.Contracts.DomainEvents
{
    public record EmployeeCreateContractEvent(EmploymentContract Contract) : BaseEvent
    {

    }
}
