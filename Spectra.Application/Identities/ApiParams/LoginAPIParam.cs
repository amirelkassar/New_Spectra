using FluentValidation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
