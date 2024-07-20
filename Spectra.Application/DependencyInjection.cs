using FluentValidation;
using MediatR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Spectra.Application.Common;
using Spectra.Application.Countries;
using Spectra.Application.Countries.Services;
using Spectra.Application.Messaging;
using Spectra.Domain;
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
			//Register the Mediator
			services.AddMediatR(cfg =>
            {
                cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly());
                cfg.AddOpenBehavior(typeof(LoggingBehavior<,>));
                cfg.AddBehavior(typeof(IPipelineBehavior<,>), typeof(ExceptionHandlingBehavior<,>));

				cfg.AddBehavior(typeof(IPipelineBehavior<IAuthorizedQuery, object>), typeof(AuthorizationBehavior<IAuthorizedQuery, object>));
				cfg.AddBehavior(typeof(IPipelineBehavior<IAuthorizedQuery<object>, object>), typeof(AuthorizationBehavior<IAuthorizedQuery<object>, object>));

				cfg.AddBehavior(typeof(IPipelineBehavior<IAuthorizedCommand, object>), typeof(AuthorizationBehavior<IAuthorizedCommand, object>));
				cfg.AddBehavior(typeof(IPipelineBehavior<IAuthorizedCommand<object>, object>), typeof(AuthorizationBehavior<IAuthorizedCommand<object>, object>));

				cfg.AddBehavior(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
            });

			return services;

		}

	}
}
