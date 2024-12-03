using Microsoft.AspNetCore.DataProtection.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Spectra.Domain.AppRole;
using Spectra.Domain.AppUser;

namespace Spectra.Infrastructure.Data
{
    public class IdentityContext(DbContextOptions<IdentityContext> options) : IdentityDbContext<AppUser, AppRole, string>(options), IDataProtectionKeyContext
    {
        public DbSet<DataProtectionKey> DataProtectionKeys { get; set; }
        public DbSet<RolePermission> RolePermissions { get; set; }
        public DbSet<PermissionGroup> PermissionGroups { get; set; }
        public DbSet<PermissoinCategory> PermissoinCategories { get; set; }
        public DbSet<Permission> Permissions { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<RolePermission>(e =>
            {
                e.HasOne<AppRole>()
                .WithMany(r => r.Permissions)
                .HasForeignKey(p => p.RoleId);
            });

            builder.Entity<PermissionGroup>(e => 
            {
                e.HasMany(p => p.Categories)
                .WithOne()
                .HasForeignKey(p => p.PermissionGroupId);
            });

            builder.Entity<PermissoinCategory>(e =>
            {
                e.HasMany(p => p.Permissions)
                .WithOne()
                .HasForeignKey(p => p.PermissoinCategoryId);
            });
        }
    }
}
