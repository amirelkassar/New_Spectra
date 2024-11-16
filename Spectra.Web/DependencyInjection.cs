using IdentityServer4.AccessTokenValidation;
using Microsoft.OpenApi.Models;
using Spectra.Application;
using Spectra.Infrastructure;
using Spectra.Web.CustomFilters;
using Spectra.Web.Models;
using Spectra.WebAPI;

namespace Spectra.Web
{
    public static class DependencyInjection
    {
        public static IServiceCollection ConfigureWebHost(this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddControllers()
                .AddNewtonsoftJson(opts => opts.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            services.AddEndpointsApiExplorer();
            services.AddHttpContextAccessor();
            services.ConfigureApplication(configuration);
            services.ConfigureInfrastructure(configuration);
            services.ConfigureWebAPIs(configuration);
            ConfigureSwagger(services, configuration);
            ConfigureCors(services, configuration);
            return services;
        }

        private static void ConfigureCors(IServiceCollection services, IConfiguration configuration)
        {
            var allowedOrigins = configuration.GetSection("AllowedCorsOrigins").Get<string[]>();
            services.AddCors(opts =>
            {
                opts.AddPolicy("DefaultCors", p =>
                {
                    p.WithOrigins(allowedOrigins)
                               .AllowAnyHeader()
                               .AllowAnyMethod()
                               .AllowCredentials();
                });
            });
        }
        private static void ConfigureIdentityManagement(IServiceCollection services, IConfiguration configuration)
        {
            var _identityServerSetting = configuration.GetSection("IdentityServerSetting").Get<IdentityServerSetting>();

            if (_identityServerSetting != null)
            {
                var webClient = _identityServerSetting.Clients.FirstOrDefault(c => c.ClientId.Equals("spectra_web"));
                services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme)
                   .AddIdentityServerAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme, options =>
                   {
                       options.Authority = _identityServerSetting.Authority;
                       options.ApiName = "IS4API";
                       options.SaveToken = true;
                   });
            }
        }

        private static void ConfigureSwagger(IServiceCollection services, IConfiguration configuration)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Spectra APIs", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Please enter token",
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    BearerFormat = "JWT",
                    Scheme = "bearer"
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type=ReferenceType.SecurityScheme,
                                Id="Bearer"
                            }
                        },
                        Array.Empty<string>()
                    }
                });
                var filePath = Path.Combine(Environment.CurrentDirectory, "SpectraApiDocs.xml");
                if (File.Exists(filePath))
                {
                    c.IncludeXmlComments(filePath);
                }
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
