using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.GlobalExceptions
{
    public class UnsupportedFileTypeException(string supportedtypes) : Exception($"Unsupported file typ , supported types are {supportedtypes}")
    {
    }
}
