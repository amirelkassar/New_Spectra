using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;

namespace Spectra.IdentityServer.Data
{
    public class AuthConfigDbContext : ConfigurationDbContext<AuthConfigDbContext>
    {
        public AuthConfigDbContext(DbContextOptions<AuthConfigDbContext> options, ConfigurationStoreOptions storeOptions) : base(options, storeOptions)
        {

        }


    }
}
