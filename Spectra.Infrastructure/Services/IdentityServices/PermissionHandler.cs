using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;

namespace Spectra.Infrastructure.Services.IdentityServices
{
    internal class PermissionHandler(IServiceProvider serviceProvider) : AuthorizationHandler<PermissionRequirement>
    {
        private readonly IServiceProvider _serviceProvider = serviceProvider;

        protected async override Task HandleRequirementAsync(AuthorizationHandlerContext context, PermissionRequirement requirement)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var currentUser = scope.ServiceProvider.GetService<ICurrentUser>();
                var permissionManager = scope.ServiceProvider.GetService<IPermissionManager>();

                if (currentUser == null || currentUser.Id is null || !await permissionManager.UserHasPermission(currentUser.Id, requirement.Permission))
                {
                    context.Fail();
                }
                context.Succeed(requirement);
            }

        }
    }
}
