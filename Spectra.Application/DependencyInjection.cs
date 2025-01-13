using System.Reflection;
using DinkToPdf;
using FluentValidation;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RazorLight;
using RazorLight.Extensions;
using Spectra.Application.Behavior;
using Spectra.Application.Common;
using Spectra.Application.Countries;
using Spectra.Application.Countries.Services;
using Spectra.Application.Identities;
using Spectra.Application.Settings.AppSettings;
using Spectra.Domain;
using Spectra.Domain.Shared.Constants;
using Spectra.Infrastructure.PipelineBehaviors;

namespace Spectra.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection ConfigureApplication(this IServiceCollection services,
            IConfiguration configuration,IWebHostEnvironment webHostEnvironment)
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
                cfg.AddBehavior(typeof(IPipelineBehavior<,>), typeof(EventDispatcherBehavior<,>));

            });
            

            TypeAdapterConfig.GlobalSettings.Scan(Assembly.GetExecutingAssembly());
            var razorPageEngin= new RazorLightEngineBuilder()
                .UseFileSystemProject(Path.Combine(webHostEnvironment.WebRootPath, Pathes.GetTemplatesPath()))
                .UseMemoryCachingProvider()
                .Build();
            services.AddSingleton(razorPageEngin);

            var converter = new SynchronizedConverter(new PdfTools() { });

            services.AddSingleton(converter);
            return services;

        }

    }
}
