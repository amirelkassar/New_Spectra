using System;

namespace Spectra.Domain.Contracts.Exceptions
{
    public class ContractSignatureNeededException() : Exception("Couldn't accept a contract without a signature")
    {
    }
}
