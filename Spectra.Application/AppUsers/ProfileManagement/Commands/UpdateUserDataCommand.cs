using MediatR;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.AppUsers.ProfileManagement.Commands
{
    public class UpdateUserDataCommand : IRequest<OperationResult>
    {
        [Required]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [Phone]
        public string Phone { get; set; }

        public class UpdateUserDataCommandHandler(ICurrentUser currentUser,
            IIdentityService identityService) : IRequestHandler<UpdateUserDataCommand, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IIdentityService _identityService = identityService;

            public async Task<OperationResult> Handle(UpdateUserDataCommand request, CancellationToken cancellationToken)
            {
                if (!request.Email.Equals(_currentUser.Email)) 
                {
                   var res= await _identityService.ChangeUserEmail(_currentUser.Id, request.Email);
                    if (!res.SuccessOpration)
                        return res;
                    
                }

                if (!request.Phone.Equals(_currentUser.Phone))
                {
                   var res= await _identityService.ChangePhoneAsync(_currentUser.Id, request.Phone);
                    if (!res.SuccessOpration)
                        return res;
                }

                return OperationResult.Success();

            }
        }
    }
}
