using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Spectra.Domain.AppRole;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Helpers;
using System.Reflection;

namespace Spectra.Application.Identities
{
    public class IdentitySeeder(IIdentityService identityService, RoleManager<AppRole> roleManager, IPermissionManager permissionManager)
    {
        private readonly IIdentityService _identityService = identityService;
        private readonly RoleManager<AppRole> _roleManager = roleManager;
        private readonly IPermissionManager _permissionManager = permissionManager;

        public async Task SeedAsync()
        {
            await SeedPermissionsAsync();
            await SeedRolesPermissionsAsync();
            if (!await _identityService.IsExist("admin@profound-group.com"))
            {
                await _identityService.CreateUserAsync("admin@profound-group.com", "Admin@1234", "Admin", "Admin", Roles.SystemAdmin);
            }
        }

        private async Task SeedRolesPermissionsAsync()
        {
            var groups = await _permissionManager.GetPermissionGroups();
            var roles = await _roleManager.Roles.ToArrayAsync();
            var propsRoles = typeof(Roles).GetFields()
                .Select(x => x.Name);

            foreach (var propRole in propsRoles)
            {
                if (!roles.Any(r => r.Name.Equals(propRole)))
                {
                    await _roleManager.CreateAsync(new AppRole
                    {
                        Name = propRole,
                        NormalizedName = propRole.ToUpper(),
                    });
                }
                await _permissionManager.UpdateRolePermissions(propRole, groups);
            }
        }

        private async Task SeedPermissionsAsync()
        {
            var permissionContributors = typeof(IPermissionContributor)
              .Assembly
              .GetTypes()
              .Where(type => typeof(IPermissionContributor).IsAssignableFrom(type) && type.IsClass && type.GetCustomAttributes<PermissionGroupNameAttribute>().Count() > 0)
              .ToArray();
            var groups = await _permissionManager.GetPermissionGroups();
            foreach (var permissionContributor in permissionContributors)
            {
                var groupName = permissionContributor.GetCustomAttribute<PermissionGroupNameAttribute>();
                if (!groups.Any(g => g.EnName.Equals(groupName.EnName)))
                {
                    var group = await _permissionManager.CreatePermissoinGroup(groupName.EnName, groupName.ArName);

                    var categoriesNames = permissionContributor.GetFields().SelectMany(p=>p.GetCustomAttributes<PermissoinCategoryNameAttribute>()).ToArray();
                    foreach (var categoryName in categoriesNames)
                    {
                        var category = new PermissoinCategory(Ulid.NewUlid().ToString()) 
                        {
                            EnName=categoryName.EnName,
                            ArName=categoryName.ArName,
                        };
                        permissionContributor.GetFields().SelectMany(p => p.GetCustomAttributes<PermissoinNameAttribute>())
                            .Where(n=>n.LogicalName.Contains(categoryName.LogicalName))
                           .ToList()
                           .ForEach(per => category.Permissions.Add(new Permission(Ulid.NewUlid().ToString())
                           {
                               ArName = per.ArName,
                               EnName = per.EnName,
                               LogicalName = per.LogicalName
                           }));
                        group.Categories.Add(category);
                    }
                    await _permissionManager.UpdatePermissoinGroup(group);
                }
            }
        }
    }
}
