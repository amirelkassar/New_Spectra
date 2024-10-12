namespace Spectra.Domain.Shared.Common.Exceptions
{
    internal class UnauthorizedException : CleanArchitectureApplicationException
    {
        public UnauthorizedException(string message)
            : base(message)
        {
        }
    }
}
