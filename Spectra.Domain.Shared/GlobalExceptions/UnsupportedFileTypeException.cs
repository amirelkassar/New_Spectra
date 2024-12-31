using System;

namespace Spectra.Domain.Shared.GlobalExceptions
{
    public class UnsupportedFileTypeException(string supportedtypes) : Exception($"Unsupported file typ , supported types are {supportedtypes}")
    {
    }
}
