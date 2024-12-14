using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Spectra.Application.AppRoles.Permissions.Dtos;
using Spectra.Application.Identities;
using Spectra.Domain.AppRole;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppRoles.Permissions.Queries
{
    public class GetRolePermissionListByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }

        public class GetRolePermissionListByIdQueryHandler(IPermissionManager permissionManager,
            RoleManager<AppRole> roleManager) : IRequestHandler<GetRolePermissionListByIdQuery, OperationResult>
        {
            private readonly IPermissionManager _permissionManager = permissionManager;
            private readonly RoleManager<AppRole> _roleManager = roleManager;

            public async Task<OperationResult> Handle(GetRolePermissionListByIdQuery request, CancellationToken cancellationToken)
            {
                var role=await _roleManager.FindByIdAsync(request.Id)?? throw new NotFoundException("Roles",request.Id);
                var permissions = await _permissionManager.GetRolePermissionGroups(role.Name);

                var permissionsDtos = permissions.Adapt<IReadOnlyCollection<PermissionGroupReadDto>>();
                var dto = new RolePermissionReadDto
                {
                    Id = request.Id,
                    Name = role.Name,
                    Groups = [.. permissionsDtos]
                };
                return OperationResult<RolePermissionReadDto>.Success(dto);
            }
        }
    }
}
