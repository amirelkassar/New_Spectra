using IdentityServer4.Models;
using Spectra.IdentityServer.Models;

namespace Spectra.IdentityServer.Settings
{
    public class IdentityServerSetting
    {
        public IReadOnlyCollection<ApiScope> ApiScopes { get; set; }
        public IReadOnlyCollection<ApiResource> ApiResources { get; set; }
        public IReadOnlyCollection<Client> Clients { get; set; }
        public IReadOnlyCollection<IdentityResource> IdentityResources =>
            [
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email(),
                new IdentityResources.Phone(),
                new IdentityResources.Address()
            ];
        public IReadOnlyCollection<UserDataModel> AppUsers { get; set; }
        public IReadOnlyCollection<RoleDataModel> AppRoles { get; set; }
    }
}
