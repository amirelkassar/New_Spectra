using Mapster;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Spectra.Application.AppRoles.Permissions.Dtos;
using Spectra.Application.Identities;
using Spectra.Domain.AppRole;
using Spectra.Domain.AppUser;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Infrastructure.Data;

namespace Spectra.Infrastructure.Services.IdentityServices
{
    internal class PermissionManager(IdentityContext identityContext, UserManager<AppUser> userManager) : IPermissionManager
    {
        private readonly IdentityContext _identityContext = identityContext;
        private readonly UserManager<AppUser> _userManager = userManager;

        public async Task AddPermissionToRole(string roleName,
            string permission,
            string permissionId,
            string categoryId,
            string groupId,
            AccessLevel accessLevel)
        {
            var role = await _identityContext.Roles.Where(r => r.NormalizedName == roleName.ToUpper())
                .Include(r => r.Permissions)
                .FirstOrDefaultAsync()
                ?? throw new NotFoundException(nameof(AppRole), roleName);

            if (!role.Permissions.Any(p => p.Permission == permission))
            {
                role.Permissions.Add(RolePermission.Create(Ulid.NewUlid().ToString(), role.Id, permission, permissionId, categoryId, groupId, accessLevel));
                _identityContext.Roles.Update(role);
                await _identityContext.SaveChangesAsync();
            }
        }

        public async Task AddPermissoinGroupToRole(string roleId, string groupId, AccessLevel accessLevel)
        {
            var group = await _identityContext.PermissionGroups
                .Include(g => g.Categories)
                .ThenInclude(c => c.Permissions)
                .FirstOrDefaultAsync(g => g.Id == groupId);
            if (group is not null)
            {
                var permissions = group.Categories
                    .SelectMany(c => c.Permissions);

                var role = await _identityContext.Roles.FindAsync(roleId);

                await AddRolePermissions(role.Name, permissions.Select(p => RolePermission.Create(Ulid.NewUlid().ToString(), roleId, p.LogicalName, p.Id, p.PermissoinCategoryId, groupId, accessLevel)));
            }
        }

        public async Task<PermissionGroup> CreatePermissoinGroup(string enName, string arName)
        {
            var group = new PermissionGroup(Ulid.NewUlid().ToString())
            {
                ArName = arName,
                EnName = enName,
            };
            await _identityContext.AddAsync(group);
            await _identityContext.SaveChangesAsync();
            return group;
        }

        public async Task DeletePermissoinGroup(string id)
        {
            var group = await _identityContext.PermissionGroups.FindAsync(id);
            if (group is not null)
            {
                _identityContext.PermissionGroups.Remove(group);
            }
        }

        public async Task<PermissionGroup> GetPermissionGroup(string id) => await _identityContext.PermissionGroups.FindAsync(id);

        public async Task<ICollection<PermissionGroup>> GetPermissionGroups(string? enName = null, string? arName = null)
        {
            var groups = await _identityContext
                .PermissionGroups
                .Where(g => (!string.IsNullOrWhiteSpace(enName) ? g.EnName.ToLower() == enName.ToLower() : g.EnName == g.EnName)
                && (!string.IsNullOrWhiteSpace(arName) ? g.ArName.ToLower() == arName.ToLower() : g.ArName == g.ArName))
                .Include(g => g.Categories)
                .ThenInclude(c => c.Permissions)
                .ToArrayAsync();
            return groups;
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
            var roleModel = new RolePermissionReadDto();
            var role = await _identityContext.Roles.FirstOrDefaultAsync(r => r.NormalizedName == roleName.ToUpper());
            var permissoinGroups = await GetRolePermissionGroups(roleName);
            roleModel.Name = role.Name;
            roleModel.Id = role.Id;
            roleModel.Groups = permissoinGroups.Adapt<ICollection<PermissionGroupReadDto>>();
            return roleModel;
        }

        public async Task<ICollection<string>> GetUserPermissionList(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            var userRoles = await _userManager.GetRolesAsync(user);
            var roleIds = await _identityContext.Roles.Where(r => userRoles.Any(ur => ur == r.Name))
                .Include(r => r.Permissions)
                .Select(r => r.Id)
                .ToArrayAsync();

            var userPermissions = await _identityContext
                .RolePermissions.Where(r => roleIds.Any(ur => ur == r.RoleId))
                .Select(p => p.Permission)
                .ToArrayAsync();

            return userPermissions;
        }

        public async Task RemovePermissionFromRole(string roleName, string permission)
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

        public async Task RemovePermissoinGroupFromRole(string roleId, string groupId)
        {
            var group = await _identityContext.PermissionGroups
                .Include(g => g.Categories)
                .ThenInclude(c => c.Permissions)
                .FirstOrDefaultAsync(g => g.Id == groupId);
            if (group is not null)
            {
                var permissions = group.Categories
                    .SelectMany(c => c.Permissions);

                var role = await _identityContext.Roles.Include(r => r.Permissions)
                    .FirstAsync(r => r.Id == roleId);
                var permissionsToBeDeleted = role.Permissions.Where(p => permissions.Any(gp => gp.Id == p.PermissoinId)).ToArray();
                _identityContext.RolePermissions.RemoveRange(permissionsToBeDeleted);

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

        public async Task<PermissionGroup> UpdatePermissoinGroup(PermissionGroup group)
        {
            var res = _identityContext.PermissionGroups.Update(group);
            return res.Entity;
        }

        public async Task AddRolePermissions(string roleName, IEnumerable<RolePermission> permissions)
        {
            var role = await _identityContext.Roles.Where(r => r.NormalizedName == roleName.ToUpper())
            .Include(r => r.Permissions)
            .FirstOrDefaultAsync()
            ?? throw new NotFoundException(nameof(AppRole), roleName);

            foreach (var permission in permissions.Where(p => !role.Permissions.Any(rp => rp.Id == p.Id)).ToArray())
            {
                role.Permissions.Add(permission);
            }
            _identityContext.Roles.Update(role);
            await _identityContext.SaveChangesAsync();
        }

        public async Task UpdateRolePermissions(string roleName, IEnumerable<string> permissions, AccessLevel accessLevel)
        {
            var role = await _identityContext.Roles.Where(r => r.NormalizedName == roleName.ToUpper())
             .Include(r => r.Permissions)
             .FirstOrDefaultAsync()
             ?? throw new NotFoundException(nameof(AppRole), roleName);

            var localGroups = await _identityContext.PermissionGroups
                .Include(g => g.Categories)
                .ThenInclude(c => c.Permissions)
                .ToArrayAsync();

            var permissoins = new List<RolePermission>();

            foreach (var group in localGroups)
            {
                permissoins.AddRange(group.Categories.SelectMany(c => c.Permissions)
                .Where(p=>permissions.Any(np=>np.Equals(p.LogicalName)))
                .Select(p => RolePermission.Create(Ulid.NewUlid().ToString(), role.Id, p.LogicalName, p.Id, p.PermissoinCategoryId, group.Id, accessLevel)));
            }

            _identityContext.RolePermissions.RemoveRange(role.Permissions);
            await _identityContext.SaveChangesAsync();

            await AddRolePermissions(role.Name, permissoins);
        }

        public async Task<bool> UserHasPermission(string userId, string permission)
        {
            var user = await _userManager.FindByIdAsync(userId);
            var userRoles = await _userManager.GetRolesAsync(user);
            var roleIds = await _identityContext.Roles.Where(r => userRoles.Any(ur => ur == r.Name))
                .Include(r => r.Permissions)
                .Select(r => r.Id)
                .ToArrayAsync();

            var userPermission = await _identityContext
                .RolePermissions.Where(r => roleIds.Any(ur => ur == r.RoleId) && r.Permission == permission)
                .AnyAsync();
            return userPermission;
        }

        public async Task<IEnumerable<PermissionGroup>> GetRolePermissionGroups(string roleName)
        {
            var role = await _identityContext.
                Roles
                .Include(r => r.Permissions)
                .FirstOrDefaultAsync(r => r.NormalizedName == roleName.ToUpper());
            var permissoinGroups = await _identityContext.PermissionGroups
                .Include(g => g.Categories)
                .ThenInclude(c => c.Permissions)
                .Where(g => role.Permissions.Select(p => p.PermissoinGroupId).Distinct().Any(p => p == g.Id))
                .ToArrayAsync();
            return permissoinGroups;
        }
    }
}
