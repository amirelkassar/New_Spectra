using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Spectra.Application.Identities;
using Spectra.Application.Identities.ApiParams;
using Spectra.Application.Identities.Dtos;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Services.IdentityServices
{
    internal class IdentityService : IIdentityService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IUserClaimsPrincipalFactory<AppUser> _userClaimsPrincipalFactory;
        private readonly IAuthorizationService _authorizationService;
        private readonly IAuthenticationService _authTokenProvider;

        public IdentityService(
            UserManager<AppUser> userManager,
            IUserClaimsPrincipalFactory<AppUser> userClaimsPrincipalFactory,
            IAuthorizationService authorizationService,
            IAuthenticationService authTokenProvider)
        {
            _userManager = userManager;
            _userClaimsPrincipalFactory = userClaimsPrincipalFactory;
            _authorizationService = authorizationService;
            _authTokenProvider = authTokenProvider;
        }
        public async Task<string?> GetUserNameAsync(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);

            return user?.UserName;
        }

        public async Task<(OperationResult Result, string UserId)> CreateUserAsync(string userName, string password, string name, string surName, string role)
        {
            var user = new AppUser
            {
                UserName = userName,
                Email = userName,
                Name = name,
                SurName = surName,
            };

            var result = await _userManager.CreateAsync(user, password);

            await _userManager.AddToRoleAsync(user, role);

            return (result.ToApplicationResult(), user.Id);
        }

        public async Task<bool> IsInRoleAsync(string userId, string role)
        {
            var user = await _userManager.FindByIdAsync(userId);

            return user != null && await _userManager.IsInRoleAsync(user, role);
        }

        public async Task<bool> AuthorizeAsync(string userId, string policyName)
        {
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
            {
                return false;
            }

            var principal = await _userClaimsPrincipalFactory.CreateAsync(user);

            var result = await _authorizationService.AuthorizeAsync(principal, policyName);

            return result.Succeeded;
        }

        public async Task<OperationResult> DeleteUserAsync(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);

            return user != null ? await DeleteUserAsync(user) : OperationResult.Success();
        }

        public async Task<OperationResult> DeleteUserAsync(AppUser user)
        {
            var result = await _userManager.DeleteAsync(user);

            return result.ToApplicationResult();
        }

        public async Task<LoginModel> LoginAsync(LoginAPIParam input) => await _authTokenProvider.LoginAsync(input);

        public async Task<LoginModel> RefreshTokenAsync(string token) => await _authTokenProvider.RefreshTokenAsync(token);

        public async Task<OperationResult> ValidateUserAsync(LoginAPIParam input) => await _authTokenProvider.ValidateUserAsync(input);

        public async Task<OperationResult> ChangeUserEmail(string userId, string newEmail)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                var changeEmailToken = await _userManager.GenerateChangeEmailTokenAsync(user, newEmail);
                await _userManager.ChangeEmailAsync(user, newEmail, changeEmailToken);
                return OperationResult.Success();
            }
            throw new NotFoundException(userId, nameof(user));
        }

        public async Task<OperationResult> ChangeUserPassword(string userId, string newPassword)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                var changePasswordToken = await _userManager.GeneratePasswordResetTokenAsync(user);
                await _userManager.ResetPasswordAsync(user, changePasswordToken, newPassword);
                return OperationResult.Success();
            }
            throw new NotFoundException(userId, nameof(user));
        }

        public async Task<OperationResult> ChangeUserPassword(string userId, string oldPassword, string newPassword)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                var results = await _userManager.ChangePasswordAsync(user, oldPassword, newPassword);
                return results.Succeeded ?
                    OperationResult.Success()
                    : OperationResult.Failure(results.Errors.Select(e => new { e.Code, Description = new string[] { } }).ToDictionary(e => e.Code, e => e.Description));
            }
            throw new NotFoundException(userId, nameof(user));
        }

        public async Task<OperationResult<string>> GenerateForgetPasswordTokenAsync(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user != null)
            {
                var changePasswordToken = await _userManager.GeneratePasswordResetTokenAsync(user);
                return OperationResult<string>.Success(changePasswordToken);
            }
            throw new NotFoundException(email, nameof(user));
        }

        public async Task<OperationResult> ResetPasswordAsync(string userId, string token, string newPassword)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                await _userManager.ResetPasswordAsync(user, token, newPassword);
                return OperationResult.Success();
            }
            throw new NotFoundException(userId, nameof(user));
        }

        public async Task<OperationResult> ChangePhoneAsync(string userId, string phone)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                var chnagePhoneToken = await _userManager.GenerateChangePhoneNumberTokenAsync(user, phone);
                await _userManager.ChangePhoneNumberAsync(user, phone, chnagePhoneToken);
                return OperationResult.Success();
            }
            throw new NotFoundException(userId, nameof(user));
        }

        public Task<OperationResult> GenerateForgetPasswordOTPAsync(string userId)
        {
            throw new NotImplementedException();

        }

        public async Task<OperationResult> ChangePhoneAsync(string userId, string phone, string token)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                await _userManager.ChangePhoneNumberAsync(user, phone, token);
                return OperationResult.Success();
            }
            throw new NotFoundException(userId, nameof(user));
        }

        public async Task<bool> IsExist(string username)
        {
            AppUser user = default;
            user = await _userManager.FindByNameAsync(username);
            user ??= await _userManager.FindByEmailAsync(username);
            return user != default;
        }
    }
}
