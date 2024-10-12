using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Services.AuthorizerService
{
    public class AuthenticationService : IAuthenticationService
    {
        public Task<bool> AuthorizeAsync(string userId, string policyName)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> ChangePhoneAsync(string userId, string phone)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> ChangePhoneAsync(string userId, string phone, string token)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> ChangeUserEmail(string userId, string newEmail)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> ChangeUserPassword(string userId, string newPassword)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> ChangeUserPassword(string userId, string oldPassword, string newPassword)
        {
            throw new NotImplementedException();
        }

        public Task<(OperationResult operationResult, string id)> CreateUserAsync(string userName, string password, string name, string surName, string role)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> DeleteUserAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> GenerateForgetPasswordOTPAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult<string>> GenerateForgetPasswordTokenAsync(string email)
        {
            throw new NotImplementedException();
        }

        public Task<string?> GetUserNameAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<bool> IsExist(string username)
        {
            throw new NotImplementedException();
        }

        public Task<bool> IsInRoleAsync(string userId, string role)
        {
            throw new NotImplementedException();
        }

        public Task<OperationResult> ResetPasswordAsync(string userId, string token, string newPassword)
        {
            throw new NotImplementedException();
        }
    }
}
