using FluentValidation;
using MediatR;
using Spectra.Application.Identities;
using Spectra.Domain.AppUser;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Helpers;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppUsers.Commands
{
    public class ResetPasswordRequest : IRequest<OperationResult>
    {
        public string Email { get; set; }
        public string Token { get; set; }
        public string NewPassword { get; set; }

        public class ResetPasswordRequestHandler(IIdentityService identityService) : IRequestHandler<ResetPasswordRequest, OperationResult>
        {
            private readonly IIdentityService _identityService = identityService;

            public async Task<OperationResult> Handle(ResetPasswordRequest request, CancellationToken cancellationToken)
            {
                var userResults = (OperationResult<AppUser>)await _identityService.FindByEmailAsync(request.Email);

                if (!userResults.SuccessOpration)
                    throw new NotFoundException("Users", request.Email);

                var user = userResults.Data;


                return await _identityService.ResetPasswordAsync(user.Id, request.Token, request.NewPassword);
            }
        }
    }

    public class ResetPasswordRequestValidator : AbstractValidator<ResetPasswordRequest>
    {
        public ResetPasswordRequestValidator()
        {
            RuleFor(p => p.Email)
                .EmailAddress()
                .NotEmpty()
                .NotNull();

            RuleFor(p => p.Token)
            .NotEmpty()
            .NotNull();

            RuleFor(p => p.NewPassword)
                .Must(p => p.IsPassword());
        }
    }
}
