using MediatR;
using Microsoft.AspNetCore.Identity;
using Spectra.Application.AppRoles.Permissions.Dtos;
using Spectra.Application.Identities;
using Spectra.Domain.AppRole;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppRoles.Permissions.Commands
{
    public class UpdateRolePermissionCommand : IRequest<OperationResult>
    {
        public string Id { get; set; }
        public ICollection<PermissoinGroupUpdateDto> Groups { get; set; }

        public class UpdateRolePermissionCommandHandler(IPermissionManager permissionManager,
            RoleManager<AppRole> roleManager) : IRequestHandler<UpdateRolePermissionCommand, OperationResult>
        {
            private readonly IPermissionManager _permissionManager = permissionManager;
            private readonly RoleManager<AppRole> _roleManager = roleManager;

            public async Task<OperationResult> Handle(UpdateRolePermissionCommand request, CancellationToken cancellationToken)
            {
                var role = await _roleManager.FindByIdAsync(request.Id) ?? throw new NotFoundException("Roles", request.Id);

                var permissions = request.Groups
                    .SelectMany(g => g.Categories)
                    .SelectMany(c => c.Permissoins)
                    .Where(p => p.Grant)
                    .Select(p => p.LogicalName)
                    .ToArray();

                var accessLevel = role.Name switch
                {
                    Roles.SystemAdmin => AccessLevel.All,
                    Roles.DepartmentHead => AccessLevel.Department,
                    Roles.ServiceHead => AccessLevel.Department,
                    _ => AccessLevel.Self
                };
                await _permissionManager.UpdateRolePermissions(role.Name, permissions, accessLevel);

                return OperationResult.Success();
            }
        }
    }
}
