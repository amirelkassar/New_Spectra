using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Spectra.IdentityServer.Data.Models;

namespace Spectra.IdentityServer.Data
{
    public class AuthDataDbContext : IdentityDbContext<AppUser, AppRole, string>
    {
        public AuthDataDbContext(DbContextOptions<AuthDataDbContext> opts) : base(opts)
        {

        }
    }
}
