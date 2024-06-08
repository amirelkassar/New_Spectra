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
			var connectionString = configuration.GetConnectionString("MongoDb");
			var databaseName = configuration.GetValue<string>("DatabaseName");
			var mongoClient = new MongoClient(connectionString);

			services.AddDbContext<ApplicationDbContext>(options =>
			{

				options.EnableDetailedErrors();
				options.EnableThreadSafetyChecks();
				options.UseMongoDB(mongoClient, databaseName);
			});


			services.AddSingleton<IMongoClient>(sp => mongoClient);

			services.AddScoped<IApplicationDbContext, ApplicationDbContext>();
			return services;
		}
	}
}
