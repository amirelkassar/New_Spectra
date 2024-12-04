using Spectra.Application.Identities.Dtos;
using Spectra.Domain.AppRole;

namespace Spectra.Application.Identities
{
    public interface IPermissionManager
    {
        Task AddPermissionToRole(string roleName, string permission ,string permissionId,
            string categoryId,
            string groupId);
        Task RemovePermissionFromRole(string roleName, string permission);
        Task AddRolePermissions(string roleName, IEnumerable<RolePermission> permissions);
        Task UpdateRolePermissions(string roleName, IEnumerable<PermissionGroup> groups);
        Task<IEnumerable<PermissionGroup>> GetRolePermissionGroups(string roleName);
        Task<ICollection<string>> GetRolePermissionList(string roleName);
        Task<ICollection<string>> GetUserPermissionList(string userId);
        Task<bool> RoleHasPermission(string roleName, string permission);
        Task<bool> UserHasPermission(string userId, string permission);
        Task<RolePermissionReadDto> GetRolePermissionListDto(string roleName);
        Task<PermissionGroup> CreatePermissoinGroup(string enName, string arName);
        Task<PermissionGroup> UpdatePermissoinGroup(PermissionGroup group);
        Task DeletePermissoinGroup(string id);
        Task<ICollection<PermissionGroup>> GetPermissionGroups(string? enName = default, string? arName = default);
        Task<PermissionGroup> GetPermissionGroup(string id);
        Task AddPermissoinGroupToRole(string roleId, string groupId);
        Task RemovePermissoinGroupFromRole(string roleId, string groupId);
    }
}
