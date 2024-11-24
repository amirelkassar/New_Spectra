using FluentValidation;
using MediatR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.UserSecrets;
using Microsoft.Extensions.DependencyInjection;
using Spectra.Application.Common;
using Spectra.Application.Countries;
using Spectra.Application.Countries.Services;
using Spectra.Application.Identities;
using Spectra.Application.Settings.AppSettings;
using Spectra.Domain;
using Spectra.Domain.Shared.Constants;
using Spectra.Infrastructure.PipelineBehaviors;
using System.Reflection;

namespace Spectra.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection ConfigureApplication(this IServiceCollection services,
            IConfiguration configuration)
        {
            //Domain
            services.ConfigureDomain(configuration);
            // Register FluentValidation
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());

            services.AddScoped<ICountryService, CountryService>();

            services.AddScoped<ApplicationSettingSeeder>();
            services.AddScoped<IdentitySeeder>();
            //Register the Mediator
            services.AddMediatR(cfg =>
            {
                cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly());
                cfg.AddOpenBehavior(typeof(LoggingBehavior<,>));
                cfg.AddBehavior(typeof(IPipelineBehavior<,>), typeof(ExceptionHandlingBehavior<,>));

                cfg.AddBehavior(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
            });

            return services;

        }

    }
}
