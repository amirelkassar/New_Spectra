using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.AppUsers.ProfileManagement.Commands
{
    public class UpdateUserImageCommand : IRequest<OperationResult>
    {
        public IFormFile Image { get; set; }

        public class UpdateUserImageCommandHandler(ICurrentUser currentUser,
            IIdentityService identityService,
            IHellper documentsManager) : IRequestHandler<UpdateUserImageCommand, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IIdentityService _identityService = identityService;
            private readonly IHellper _documentsManager = documentsManager;

            public async Task<OperationResult> Handle(UpdateUserImageCommand request, CancellationToken cancellationToken)
            {
                var filePath = await _documentsManager.CreateAttachment(request.Image, Pathes.UserImages);
                return await _identityService.UpdateUserImageAsync(_currentUser.Id, filePath);
            }
        }
    }
}
