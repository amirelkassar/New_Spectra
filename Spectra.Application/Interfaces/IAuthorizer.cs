using Spectra.Domain.Shared.Common;

namespace Spectra.Application.Interfaces
{
    public interface IAuthorizer<T>
    {
        Task<AuthorizationResult> AuthorizeAsync(T instance, CancellationToken cancellation = default);
    }
}
