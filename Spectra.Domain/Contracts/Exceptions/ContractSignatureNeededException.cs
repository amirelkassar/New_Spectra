using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Contracts.Exceptions
{
    public class ContractSignatureNeededException() : Exception("Couldn't accept a contract without a signature")
    {
    }
}
