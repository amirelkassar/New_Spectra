namespace Spectra.Web.Models
{
    public record IdentityServerSetting(string Authority, bool RequireHttpsMetadata, string Audience, bool SaveToken, List<IdentityServerClientSetting> Clients);
    public record IdentityServerClientSetting(string ClientId, string ClientName, string Secret);

}
