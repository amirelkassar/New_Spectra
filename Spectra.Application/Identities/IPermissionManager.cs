using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Identities
{
    public interface IPermissionManager
    {
        Task AddPermissionToRole(string roleName, string permission);
        Task RemovePermissionToRole(string roleName, string permission);
        Task UpdateRolePermissions(string roleName, IEnumerable<string> permissions);
        Task<ICollection<string>> GetRolePermissionList(string roleName);
        Task<ICollection<string>> GetUserPermissionList(string userId);
        Task<bool> RoleHasPermission(string roleName, string permission);
        Task<bool> UserHasPermission(string userId, string permission);

    }
}
