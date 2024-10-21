using Microsoft.AspNetCore.DataProtection.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Spectra.Domain.AppRole;
using Spectra.Domain.AppUser;

namespace Spectra.Infrastructure.Data
{
    internal class IdentityContext(DbContextOptions<IdentityContext> options) : IdentityDbContext<AppUser, AppRole, string>(options), IDataProtectionKeyContext
    {
        public DbSet<DataProtectionKey> DataProtectionKeys { get; set; }
    }
}
