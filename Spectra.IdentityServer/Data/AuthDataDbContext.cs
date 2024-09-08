using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Spectra.Domain.AppRole;
using Spectra.Domain.AppUser;

namespace Spectra.IdentityServer.Data
{
    public class AuthDataDbContext : IdentityDbContext<AppUser, AppRole, string>
    {
        public AuthDataDbContext(DbContextOptions<AuthDataDbContext> opts) : base(opts)
        {

        }
    }
}
