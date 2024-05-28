using IdentityServer4.Models;

namespace Spectra.IdentityServer.Settings
{
    public class IdentityServerSetting
    {
        public IReadOnlyCollection<ApiScope> ApiScopes { get; init; }
        public IReadOnlyCollection<ApiResource> ApiResources { get; init; }

        public IReadOnlyCollection<Client> Clients { get; init; }

        public IReadOnlyCollection<IdentityResource> IdentityResources =>
            [
                new IdentityResources.OpenId(),
                new IdentityResources.Profile()
            ];
    }
}
