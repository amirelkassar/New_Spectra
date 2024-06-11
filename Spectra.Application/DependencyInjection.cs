﻿using FluentValidation;
using MediatR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Spectra.Application.Common;
using Spectra.Application.Countries.Queries;
using Spectra.Application.Interfaces;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Application.Interfaces.IServices;
using Spectra.Application.Services;
using Spectra.Domain;
using Spectra.Infrastructure.PipelineBehaviors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

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
                cfg.AddBehavior(typeof(IPipelineBehavior<,>), typeof(AuthorizationBehavior<,>));
                cfg.AddBehavior(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
            });

			return services;

        }

    }
}
