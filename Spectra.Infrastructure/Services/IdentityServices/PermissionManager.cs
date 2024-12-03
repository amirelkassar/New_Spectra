using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Spectra.Application.Identities;
using Spectra.Application.Identities.Dtos;
using Spectra.Domain.AppRole;
using Spectra.Domain.AppUser;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Helpers;
using Spectra.Infrastructure.Data;
using System.Reflection;

namespace Spectra.Infrastructure.Services.IdentityServices
{
    internal class PermissionManager(IdentityContext identityContext, UserManager<AppUser> userManager) : IPermissionManager
    {
        private readonly IdentityContext _identityContext = identityContext;
        private readonly UserManager<AppUser> _userManager = userManager;

        public async Task AddPermissionToRole(string roleName, string permission)
        {
            var role = await _identityContext.Roles.Where(r => r.NormalizedName == roleName.ToUpper())
                .Include(r => r.Permissions)
                .FirstOrDefaultAsync()
                ?? throw new NotFoundException(nameof(AppRole), roleName);

            if (!role.Permissions.Any(p => p.Permission == permission))
            {
                role.Permissions.Add(RolePermission.Create(Ulid.NewUlid().ToString(), role.Id, permission));
                _identityContext.Roles.Update(role);
                await _identityContext.SaveChangesAsync();
            }

        }

        public async Task<ICollection<string>> GetRolePermissionList(string roleName)
        {
            var role = await _identityContext.Roles.Where(r => r.NormalizedName == roleName.ToUpper())
               .Include(r => r.Permissions)
               .FirstOrDefaultAsync()
               ?? throw new NotFoundException(nameof(AppRole), roleName);

            return role.Permissions.Select(p => p.Permission).ToArray();
        }

        public async Task<RolePermissionReadDto> GetRolePermissionListDto(string roleName)
        {
            var rolePermissions = await GetRolePermissionList(roleName);
            var roleModel = new RolePermissionReadDto();
            roleModel.Name = roleName;
            var permissionContributors = typeof(IPermissionContributor)
                .Assembly
                .GetTypes()
                .Where(type => typeof(IPermissionContributor).IsAssignableFrom(type) && type.IsClass);

            var fields = permissionContributors.Select(t => t.GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy)
                   .Where(field => field.IsLiteral && !field.IsInitOnly))
                .SelectMany(f => f);

            var permissionGroups = fields.Where(f => f.Name == "Group").ToArray();

            foreach (var item in fields)
            {

            }

            throw new Exception();
        }

        public async Task<ICollection<string>> GetUserPermissionList(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            var userRoles = await _userManager.GetRolesAsync(user);
            var roleIds = await _identityContext.Roles.Where(r => userRoles.Any(ur => ur == r.Name))
                .Select(r => r.Id)
                .ToArrayAsync();

            var userPermissions = await _identityContext
                .RolePermissions.Where(r => roleIds.Any(ur => ur == r.RoleId))
                .Select(p => p.Permission)
                .ToArrayAsync();

            return userPermissions;
        }

        public async Task RemovePermissionToRole(string roleName, string permission)
        {
            var role = await _identityContext.Roles.Where(r => r.NormalizedName == roleName.ToUpper())
               .Include(r => r.Permissions)
               .FirstOrDefaultAsync()
               ?? throw new NotFoundException(nameof(AppRole), roleName);

            if (role.Permissions.Any(p => p.Permission == permission))
            {
                var rolePermission = role.Permissions.First(p => p.Permission == permission);
                role.Permissions.Remove(rolePermission);
                _identityContext.Roles.Update(role);
                await _identityContext.SaveChangesAsync();
            }
        }

        public async Task<bool> RoleHasPermission(string roleName, string permission)
        {
            var role = await _identityContext.Roles.Where(r => r.NormalizedName == roleName.ToUpper())
               .Include(r => r.Permissions.Where(p => p.Permission == permission))
               .FirstOrDefaultAsync()
               ?? throw new NotFoundException(nameof(AppRole), roleName);

            return role.Permissions.Count > 0;
        }

        public async Task UpdateRolePermissions(string roleName, IEnumerable<string> permissions)
        {
            var role = await _identityContext.Roles.Where(r => r.NormalizedName == roleName.ToUpper())
             .Include(r => r.Permissions)
             .FirstOrDefaultAsync()
             ?? throw new NotFoundException(nameof(AppRole), roleName);

            role.Permissions.Clear();
            foreach (var permission in permissions)
            {
                role.Permissions.Add(RolePermission.Create(Ulid.NewUlid().ToString(), role.Id, permission));
            }
            await _identityContext.SaveChangesAsync();
        }

        public async Task<bool> UserHasPermission(string userId, string permission)
        {
            var user = await _userManager.FindByIdAsync(userId);
            var userRoles = await _userManager.GetRolesAsync(user);
            var roleIds = await _identityContext.Roles.Where(r => userRoles.Any(ur => ur == r.Name))
                .Select(r => r.Id)
                .ToArrayAsync();

            var userPermission = await _identityContext
                .RolePermissions.Where(r => roleIds.Any(ur => ur == r.RoleId) && r.Permission == permission)
                .AnyAsync();
            return userPermission;
        }
    }
}
