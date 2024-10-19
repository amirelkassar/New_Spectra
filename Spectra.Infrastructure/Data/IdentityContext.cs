using Microsoft.AspNetCore.DataProtection.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Spectra.Domain.AppRole;
using Spectra.Domain.AppUser;

namespace Spectra.Infrastructure.Data
{
    internal class IdentityContext : IdentityDbContext<AppUser, AppRole, string>, IDataProtectionKeyContext
    {
        public IdentityContext(DbContextOptions<IdentityContext> options) : base(options)
        {

        }

        public DbSet<DataProtectionKey> DataProtectionKeys { get; set; }
    }
}
