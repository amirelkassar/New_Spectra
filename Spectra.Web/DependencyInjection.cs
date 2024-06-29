using Flurl.Http;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Spectra.Application;
using Spectra.Infrastructure;
using Spectra.Infrastructure.Data;
using Spectra.Web.CustomFilters;
using Spectra.Web.Models;
using Spectra.WebAPI;
using System.Reflection;

namespace Spectra.Web
{
    public static class DependencyInjection
    {
        public static IServiceCollection ConfigureWebHost(this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddControllers();
            services.AddEndpointsApiExplorer();
            services.ConfigureApplication(configuration);
            services.ConfigureInfrastructure(configuration);
            services.ConfigureWebAPIs(configuration);
            ConfigureIdentityManagement(services, configuration);
            ConfigureIdentityServerSettings(services, configuration);
            ConfigureSwagger(services, configuration);
            return services;
        }

        private static void ConfigureIdentityManagement(IServiceCollection services, IConfiguration configuration)
        {
            var _identityServerSetting = configuration.GetSection("IdentityServerSetting").Get<IdentityServerSetting>();

            if (_identityServerSetting != null)
            {
                services.AddAuthentication("Bearer")
                   .AddIdentityServerAuthentication("Bearer", options =>
                   {
                       options.Authority = _identityServerSetting.Authority;
                       options.ApiName = "apis";
                   });
            }
        }

        private static void ConfigureSwagger(IServiceCollection services, IConfiguration configuration)
        {
            var authServer = configuration["IdentityServerSetting:Authority"];
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Spctra Web App", Version = "v1" });

                c.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
                {
                    Type = SecuritySchemeType.OAuth2,
                    Flows = new OpenApiOAuthFlows
                    {
                        AuthorizationCode = new OpenApiOAuthFlow
                        {
                            AuthorizationUrl = new Uri($"{authServer}/connect/authorize"),
                            TokenUrl = new Uri($"{authServer}/connect/token"),
                            Scopes = new Dictionary<string, string>
                            {
                                {"apis","" }
                            }
                        }
                    }
                });
                var filePath = Path.Combine(Environment.CurrentDirectory, "SpectraApiDocs.xml");
                if (File.Exists(filePath))
                {
                    c.IncludeXmlComments(filePath);
                }
                c.OperationFilter<AuthorizeCheckOperationFilter>();
            });
        }

        private static void ConfigureIdentityServerSettings(IServiceCollection services, IConfiguration configuration)
        {
            var _identityServerSetting = configuration.GetSection("IdentityServerSetting").Get<IdentityServerSetting>();
            if (_identityServerSetting != null)
                services.AddSingleton(_identityServerSetting);
        }
    }
}
