using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Spectra.Domain.AppRole;
using Spectra.Domain.Shared.Constants;

namespace Spectra.Application.Identities
{
    public class IdentitySeeder(IIdentityService identityService, RoleManager<AppRole> roleManager)
    {
        private readonly IIdentityService identityService = identityService;
        private readonly RoleManager<AppRole> roleManager = roleManager;

        public async Task SeedAsync()
        {
            var roles = await roleManager.Roles.ToArrayAsync();
            var propsRoles = typeof(Roles).GetFields()
                .Select(x => x.Name);

            foreach (var propRole in propsRoles)
            {
                if (!roles.Any(r => r.Name.Equals(propRole)))
                {
                    await roleManager.CreateAsync(new AppRole
                    {
                        Name = propRole,
                        NormalizedName = propRole.ToUpper(),
                    });
                }
            }

            if (!await identityService.IsExist("admin@profound-group.com"))
            {
                await identityService.CreateUserAsync("admin@profound-group.com", "Admin@1234", "Admin", "Admin", Roles.SystemAdmin);
            }
        }
    }
}
