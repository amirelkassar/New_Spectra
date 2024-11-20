using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Spectra.Domain.AppRole;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Helpers;
using System.Reflection;

namespace Spectra.Application.Identities
{
    public class IdentitySeeder(IIdentityService identityService, RoleManager<AppRole> roleManager,IPermissionManager permission)
    {
        private readonly IIdentityService _identityService = identityService;
        private readonly RoleManager<AppRole> _roleManager = roleManager;
        private readonly IPermissionManager _permission = permission;

        public async Task SeedAsync()
        {
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
            }

            if (!await _identityService.IsExist("admin@profound-group.com"))
            {
                await _identityService.CreateUserAsync("admin@profound-group.com", "Admin@1234", "Admin", "Admin", Roles.SystemAdmin);
            }

            await SeedPermissionsAsync();
        }

        private async Task SeedPermissionsAsync()
        {
            var adminRole=Roles.SystemAdmin;
            var permissionContributors = typeof(IPermissionContributor)
               .Assembly
               .GetTypes()
               .Where(type => typeof(IPermissionContributor).IsAssignableFrom(type) && type.IsClass);

            var permissions = permissionContributors.Select(t => t.GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy)
                   .Where(field => field.IsLiteral && !field.IsInitOnly))
                .SelectMany(f => f.Select(p => p.GetRawConstantValue() as string))
                .ToArray();
           await  _permission.UpdateRolePermissions(adminRole, permissions);
        } 
    }
}
