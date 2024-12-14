using System.ComponentModel.DataAnnotations;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Domain.AppUser;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Helpers;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppUsers.ProfileManagement.Commands
{
    public class UpdateUserProfileCommand : IRequest<OperationResult>
    {
        [Required]
        public string FirstName { get; set; }
        public string? LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [Phone]
        public string Phone { get; set; }
        public string? NewPassword { get; set; }
        public string? OldPassword { get; set; }

        public IFormFile? UserImage { get; set; }

        public class UpdateUserDataCommandHandler(ICurrentUser currentUser,
            IIdentityService identityService,
            IDocumentHellper documentHellper) : IRequestHandler<UpdateUserProfileCommand, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IIdentityService _identityService = identityService;
            private readonly IDocumentHellper _documentHellper = documentHellper;

            public async Task<OperationResult> Handle(UpdateUserProfileCommand request, CancellationToken cancellationToken)
            {
                var userOperation = await _identityService.FindByIdAsync(_currentUser.Id) as OperationResult<AppUser>;
                var user = userOperation.Data;
                if (!string.IsNullOrWhiteSpace(request.NewPassword) && !request.NewPassword.IsPassword())
                {
                    throw new ValidationException("Password format is invalid");
                }
                else if (!string.IsNullOrWhiteSpace(request.OldPassword) && !request.OldPassword.IsPassword())
                {
                    throw new ValidationException("Password format is invalid");
                }
                else if (!string.IsNullOrWhiteSpace(request.NewPassword) && !string.IsNullOrWhiteSpace(request.OldPassword))
                {
                    var res = await _identityService.ChangeUserPassword(_currentUser.Id, request.OldPassword, request.NewPassword);
                    if (!res.SuccessOpration)
                        return res;
                }

                if (!request.Email.Equals(_currentUser.Email))
                {
                    var res = await _identityService.ChangeUserEmail(_currentUser.Id, request.Email);
                    if (!res.SuccessOpration)
                        return res;
                }

                if (!request.Phone.Equals(_currentUser.Phone))
                {
                    var res = await _identityService.ChangePhoneAsync(_currentUser.Id, request.Phone);
                    if (!res.SuccessOpration)
                        return res;
                }

                user.Name = request.FirstName;
                user.SurName = request.LastName;

                var updateUserRes = await _identityService.UpdateUserAsync(user);
                if (!updateUserRes.SuccessOpration)
                    return updateUserRes;

                if (request.UserImage is not null && request.UserImage.Length > 0)
                {
                    var filePath = await _documentHellper.CreateAttachment(request.UserImage, Pathes.GetUsersPath());
                    await _identityService.UpdateUserImageAsync(_currentUser.Id, filePath);
                }


                return OperationResult.Success();

            }
        }
    }
}
