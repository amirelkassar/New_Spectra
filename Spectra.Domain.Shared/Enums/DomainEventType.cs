﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Enums
{
    public enum DomainEventType:byte
    {
        BeforeCommit=1, 
        AfterCommit=2
    }
}
