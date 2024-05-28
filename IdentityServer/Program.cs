using Microsoft.Extensions.DependencyInjection;
using IdentityServer.Settings;
using IdentityServer.Models;

namespace IdentityServer
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);

			// Add services to the container.
			builder.Services.AddControllers();
			// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();

			var identityServerSettings = builder.Configuration.GetSection(nameof(IdentityServerSettings)).Get<IdentityServerSettings>();
			var mongoDbSettings = builder.Configuration.GetSection(nameof(MongoDbConfig)).Get<MongoDbConfig>();

			builder.Services.AddIdentity<ApplicationUser, ApplicationRole>()
					.AddMongoDbStores<ApplicationUser, ApplicationRole, Guid>
					(
						mongoDbSettings.ConnectionString, mongoDbSettings.Name
					);
			builder.Services.AddIdentityServer(options =>
			{
				options.Events.RaiseErrorEvents = true;
				options.Events.RaiseFailureEvents = true;
				options.Events.RaiseErrorEvents = true;
			})
				.AddAspNetIdentity<ApplicationUser>()
				.AddInMemoryApiScopes(identityServerSettings.ApiScopes)
				.AddInMemoryApiResources(identityServerSettings.ApiResources)
				.AddInMemoryClients(identityServerSettings.Clients)
				.AddInMemoryIdentityResources(identityServerSettings.IdentityResources)
				.AddDeveloperSigningCredential();

			var app = builder.Build();

			// Configure the HTTP request pipeline.
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}
			app.UseIdentityServer();
			app.UseHttpsRedirection();

			app.UseAuthorization();

			app.MapControllers();

			app.Run();
		}
	}
}
