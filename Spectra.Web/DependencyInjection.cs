using Amazon.Auth.AccessControlPolicy;
using Flurl.Http;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Spectra.Application;
using Spectra.Infrastructure;
using Spectra.Infrastructure.Data;
using Spectra.Web.Models;
using Spectra.WebAPI;

namespace Spectra.Web
{
    public static class DependencyInjection
    {
        public static IServiceCollection ConfigureWebHost(this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddControllers();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.ConfigureApplication(configuration);
            services.ConfigureInfrastructure(configuration);
            services.ConfigureWebAPIs(configuration);
            ConfigureDataAccess(services, configuration);
            ConfigureIdentityManagement(services, configuration);
            ConfigureIdentityServerSettings(services, configuration);
            return services;
        }

        private static void ConfigureIdentityManagement(IServiceCollection services, IConfiguration configuration)
        {
            var _identityServerSetting = configuration.GetSection("IdentityServerSetting").Get<IdentityServerSetting>();

            if (_identityServerSetting != null)
            {
                services.AddAuthentication("Bearer")
                   .AddJwtBearer("Bearer", options =>
                   {
                       options.Authority = _identityServerSetting.Authority;
                       options.TokenValidationParameters = new TokenValidationParameters
                       {
                           SaveSigninToken = _identityServerSetting.SaveToken,
                           ValidAudience = _identityServerSetting.Audience
                       };
                   });

                services.AddAuthorization(options =>
                {
                    options.AddPolicy("SuperAdmin", policy =>
                    {
                        policy.RequireAuthenticatedUser();
                        policy.RequireRole("SuperAdmin");
                    });
                    options.AddPolicy("ApiScope", policy =>
                    {
                        policy.RequireAuthenticatedUser();
                    });
                });
            }
        }
        private static void ConfigureDataAccess(IServiceCollection services, IConfiguration configuration)
        {
            var ConnectionString = configuration.GetConnectionString("MongoDb");
            var databaseName = configuration["SpectraDb"];
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseMongoDB(ConnectionString, databaseName)
            );
        }
        private static void ConfigureIdentityServerSettings(IServiceCollection services, IConfiguration configuration)
        {
            var _identityServerSetting = configuration.GetSection("IdentityServerSetting").Get<IdentityServerSetting>();
            if (_identityServerSetting != null)
                services.AddSingleton(_identityServerSetting);
        }
    }
}
