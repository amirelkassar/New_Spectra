using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Spectra.Domain.AppRole;
using Spectra.Domain.AppUser;
using Spectra.IdentityServer.Data;
using Spectra.IdentityServer.Settings;
using System.Reflection;

namespace Spectra.IdentityServer
{
    public static class ServicesExtensions
    {
        public static IServiceCollection InitServices(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("AuthCS");
            var migrationsAssembly = Assembly.GetExecutingAssembly().GetName().Name;

            services.AddControllersWithViews();

            services.AddDbContext<AuthDataDbContext>(options =>
            options.UseSqlServer(connectionString));

            services.AddIdentity<AppUser, AppRole>(config =>
            {
                //Password config
                config.Password.RequireLowercase = true;
                config.Password.RequireUppercase = true;
                config.Password.RequireNonAlphanumeric = true;
                config.Password.RequireDigit = true;
                config.Password.RequiredLength = 10;
                //User config
                config.User.RequireUniqueEmail = true;
                //Lockout config
                config.Lockout.AllowedForNewUsers = true;
                config.Lockout.MaxFailedAccessAttempts = 3;
                config.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(2);
            })
            .AddEntityFrameworkStores<AuthDataDbContext>()
            .AddSignInManager()
            .AddDefaultTokenProviders();
            //adding identity server configs
            var identitySettings = configuration.GetSection("IdentityServerSetting").Get<IdentityServerSetting>();
            if (identitySettings is not null)
                services.AddSingleton(identitySettings);

            services.AddIdentityServer(options =>
            {
                options.EmitStaticAudienceClaim = true;
            })
                .AddDeveloperSigningCredential()
            .AddConfigurationStore<AuthConfigDbContext>(options =>
            {
                options.ConfigureDbContext = b => b.UseSqlServer(connectionString,
                    sql => sql.MigrationsAssembly(migrationsAssembly));
            })
            .AddOperationalStore<AuthOperationDbContext>(options =>
            {
                options.ConfigureDbContext = b => b.UseSqlServer(connectionString,
                    sql => sql.MigrationsAssembly(migrationsAssembly));

                options.EnableTokenCleanup = true;
            })
            .AddAspNetIdentity<AppUser>();

            services.AddTransient<SeedDataService>();
            return services;
        }
    }
}
