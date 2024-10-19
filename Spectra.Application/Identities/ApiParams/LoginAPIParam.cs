using FluentValidation;
using System.ComponentModel.DataAnnotations;

namespace Spectra.Application.Identities.ApiParams
{
    public class LoginAPIParam
    {
        [Required]
        public string UserEmail { get; set; }
        [Required]
        public string Password { get; set; }
    }

    public class LoginAPIParamValidator : AbstractValidator<LoginAPIParam>
    {
        public LoginAPIParamValidator()
        {
            RuleFor(m => m.UserEmail)
                .NotEmpty()
                .NotNull()
                .MinimumLength(5)
                .EmailAddress();

            RuleFor(m => m.Password)
                .NotEmpty()
                .NotNull()
                .MinimumLength(8);
        }
    }
}
