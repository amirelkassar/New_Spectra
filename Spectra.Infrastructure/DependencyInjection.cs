using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Infrastructure.Data;
using Spectra.Infrastructure.Repositories;
using Spectra.Infrastructure.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure
{
	public static class DependencyInjection
	{

		public static IServiceCollection ConfigureInfrastructure(this IServiceCollection services,
			IConfiguration configuration)
		{
			services.ConfigureDataBase(configuration);

			services.AddScoped<ICountryRepository, CountryRepository>();
			services.AddScoped<IStateRepository, StateRepository>();
			services.AddScoped<ICityRepository, CityRepository>();
			services.AddScoped<SeedService>();

			services.AddHttpClient();
			return services;
		}
		private static IServiceCollection ConfigureDataBase(this IServiceCollection services,
			IConfiguration configuration)
		{
			services.AddScoped<IMongoDbService, MongoDbService>(); 
			return services;
		}
	}
}
