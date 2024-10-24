﻿using Flurl.Http;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
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
                       options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                       {
                           SaveSigninToken = _identityServerSetting.SaveToken,
                           ValidAudience = _identityServerSetting.Audience
                       };
                   });

                services.AddAuthorization(options =>
                {
                    foreach (var scope in _identityServerSetting.ApiScopes)
                    {
                        options.AddPolicy("ApiScope", policy =>
                        {
                            policy.RequireAuthenticatedUser();
                        });
                    }

                });
            }
        }

        private static void ConfigureIdentityServerSettings(IServiceCollection services, IConfiguration configuration)
        {
            var _identityServerSetting = configuration.GetSection("IdentityServerSetting").Get<IdentityServerSetting>();
            if (_identityServerSetting != null)
                services.AddSingleton(_identityServerSetting);
        }
    }
}
