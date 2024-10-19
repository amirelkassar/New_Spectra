using Spectra.Application.Identities.ApiParams;
using Spectra.Application.Identities.Dtos;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Interfaces
{
    public interface IAuthenticationService
    {
        Task<LoginModel> LoginAsync(LoginAPIParam input);
        Task<LoginModel> RefreshTokenAsync(string token);
        Task<OperationResult> ValidateUserAsync(LoginAPIParam input);
    }
}
