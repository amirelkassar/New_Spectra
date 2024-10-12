using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;

namespace Spectra.IdentityServer.Data
{
    public class AuthOperationDbContext : PersistedGrantDbContext<AuthOperationDbContext>
    {
        public AuthOperationDbContext(DbContextOptions options, OperationalStoreOptions storeOptions) : base(options, storeOptions)
        {

        }
    }
}
