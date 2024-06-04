using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Spectra.Application;
using Spectra.Infrastructure;
using Spectra.Infrastructure.Data;
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
            ConfigureDataAccess(services, configuration);

			services.AddAuthentication("Bearer")
			   .AddJwtBearer("Bearer", options =>
			   {
				   options.Authority = "https://localhost:22413";
				   options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
				   {
					   ValidateAudience = false
				   };
			   });

			services.AddAuthorization(options =>
			{
				options.AddPolicy("ApiScope", policy =>
				{
					policy.RequireAuthenticatedUser();
					policy.RequireClaim("scope", "api1");
				});
			});


			return services;
        }


        private static void ConfigureDataAccess(IServiceCollection services,IConfiguration configuration)
        {
            var ConnectionString = configuration.GetConnectionString("MongoDb");
            var databaseName = configuration["SpectraDb"];
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseMongoDB(ConnectionString, databaseName)
            );
		}
    }
}
