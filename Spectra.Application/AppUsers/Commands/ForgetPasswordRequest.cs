using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Commons.Dtos;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.Templates.Models;
using Spectra.Application.Templates.Service;
using Spectra.Domain.AppUser;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppUsers.Commands
{
    public class ForgetPasswordRequest : IRequest<OperationResult>
    {
        public string Email { get; set; }

        public class ResetPasswordRequestHandler(IEmailSender emailSender,
            ITemplateService templateService,
            IIdentityService identityService,
            IHttpContextAccessor httpContextAccessor) : IRequestHandler<ForgetPasswordRequest, OperationResult>
        {
            private readonly IEmailSender _emailSender = emailSender;
            private readonly ITemplateService _templateService = templateService;
            private readonly IIdentityService _identityService = identityService;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;

            public async Task<OperationResult> Handle(ForgetPasswordRequest request, CancellationToken cancellationToken)
            {
                var results = await _identityService.FindByEmailAsync(request.Email) ;

                if(!results.SuccessOpration)
                    throw new NotFoundException("Users", request.Email);

                var userResults = (OperationResult<AppUser>)results;
                var user = userResults.Data;


                var tokenResults = await _identityService.GenerateForgetPasswordTokenAsync(user.Email);

                var httpRequest = _httpContextAccessor.HttpContext.Request;

                var resetUrl = $"{httpRequest.Scheme}://{httpRequest.Host}{httpRequest.PathBase}/api/public/identity/reset-password?token={tokenResults.Data}&email={request.Email}";

                var emailModel = new PasswordResetEmailTemplateModel
                {
                    Token= tokenResults.Data,
                    Email= request.Email,
                    UserFullName=$"{user.Name} {user.SurName}",
                    ResetPasswordUrl= resetUrl
                };

                var emailTemplate = await _templateService.GetEmailTemplateAsync("ForgetPasswordEmailTemplate.cshtml", emailModel);

                await _emailSender.SendAsync(new EmailMetadata(request.Email, "no-reply spectra reset password", emailTemplate));

                return OperationResult.Success();
            }
        }
    }
}
