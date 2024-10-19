using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Identities
{
    public interface IIdentityService
    {
        Task<bool> IsExist(string username);
        Task<string?> GetUserNameAsync(string userId);

        Task<bool> IsInRoleAsync(string userId, string role);

        Task<bool> AuthorizeAsync(string userId, string policyName);

        Task<(OperationResult Result, string UserId)> CreateUserAsync(string userName, string password, string name, string surName, string role);

        Task<OperationResult> DeleteUserAsync(string userId);

        Task<OperationResult> ChangeUserEmail(string userId, string newEmail);

        Task<OperationResult> ChangePhoneAsync(string userId, string phone);
        Task<OperationResult> ChangePhoneAsync(string userId, string phone, string token);

        Task<OperationResult> GenerateForgetPasswordOTPAsync(string userId);

        Task<OperationResult> ChangeUserPassword(string userId, string newPassword);
        Task<OperationResult> ChangeUserPassword(string userId, string oldPassword, string newPassword);

        Task<OperationResult<string>> GenerateForgetPasswordTokenAsync(string email);

        Task<OperationResult> ResetPasswordAsync(string userId, string token, string newPassword);
    }
}
