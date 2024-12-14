using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Spectra.Application.AppRoles.Permissions.Dtos;
using Spectra.Domain.AppRole;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppRoles.Queries
{
    public class GetRoleListQuery : IRequest<OperationResult>
    {
        public class GetRoleListQueryHandler(RoleManager<AppRole> roleManager) : IRequestHandler<GetRoleListQuery, OperationResult>
        {
            private readonly RoleManager<AppRole> _roleManager = roleManager;

            public async Task<OperationResult> Handle(GetRoleListQuery request, CancellationToken cancellationToken)
            {
                var roles = _roleManager.Roles.ToArray();
                var dto = roles.Adapt<IReadOnlyCollection<RolePermissionReadDto>>();
                return OperationResult<IReadOnlyCollection<RolePermissionReadDto>>.Success(dto);
            }
        }
    }
}
