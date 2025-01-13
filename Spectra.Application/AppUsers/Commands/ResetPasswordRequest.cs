using System.Web;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Spectra.Application.Commons.Dtos;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.Templates.Models;
using Spectra.Application.Templates.Service;
using Spectra.Domain.AppUser;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Helpers;
using Spectra.Domain.Shared.OptionDtos;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppUsers.Commands
{
    public class ResetPasswordRequest : IRequest<OperationResult>
    {
        public string Email { get; set; }
        public string Token { get; set; }
        public string NewPassword { get; set; }

        public class ResetPasswordRequestHandler(IIdentityService identityService,
            ITemplateService templateService,
            IEmailSender emailSender,
            IServiceProvider serviceProvider)  : IRequestHandler<ResetPasswordRequest, OperationResult>
        {
            private readonly IIdentityService _identityService = identityService;
            private readonly ITemplateService _templateService = templateService;
            private readonly IEmailSender _emailSender = emailSender;
            private readonly IServiceProvider _serviceProvider = serviceProvider;

            public async Task<OperationResult> Handle(ResetPasswordRequest request, CancellationToken cancellationToken)
            {
                var webClient = _serviceProvider.GetKeyedService<ClientSide>("spectra_web");
                var userResults = (OperationResult<AppUser>)await _identityService.FindByEmailAsync(request.Email);

                if (!userResults.SuccessOpration)
                    throw new NotFoundException("Users", request.Email);

                var user = userResults.Data;

                var token=HttpUtility.UrlDecode(request.Token);
                var results= await _identityService.ResetPasswordAsync(user.Id, request.Token, request.NewPassword);

                if (results.SuccessOpration)
                {
                    var resetPasswordModel = new PasswordResetEmailTemplateModel
                    {
                        UserFullName=$"{user.Name} {user.SurName}",
                        LoginPage=$"{webClient.Url}ar/login",
                    };

                    var template = await _templateService.GetEmailTemplateAsync("PasswordResetEmailTemplate.cshtml", resetPasswordModel);
                    await _emailSender.SendAsync(new EmailMetadata(user.Email, "no-reply sepctra password updated", template));
                }

                return results;
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
