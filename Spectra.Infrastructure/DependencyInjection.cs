using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Infrastructure.Data;
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
			ConfigureDataBase(services, configuration);

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
