namespace Spectra.Web.Models
{
    public record IdentityServerSetting(string Authority,bool RequireHttpsMetadata,string Audience,bool SaveToken);
}
