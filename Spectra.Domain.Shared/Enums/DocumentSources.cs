using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Enums
{
    public enum DocumentSources : byte
    {
        Others = 0,
        SystemDocument = 1,
        UserDocument = 2,
        PatientDocument = 3
    }
}
