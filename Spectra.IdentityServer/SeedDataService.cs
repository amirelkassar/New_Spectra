using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Mappers;
using IdentityServer4.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Spectra.IdentityServer.Settings;
using System.Linq;
using System.Threading.Tasks;

public class SeedDataService
{
	private readonly IConfiguration _configuration;
	private readonly IServiceProvider _serviceProvider;
	private readonly ILogger<SeedDataService> _logger;

	public SeedDataService(IConfiguration configuration, IServiceProvider serviceProvider, ILogger<SeedDataService> logger)
	{
		_configuration = configuration;
		_serviceProvider = serviceProvider;
		_logger = logger;
	}

	public async Task SeedAsync()
	{
		using var scope = _serviceProvider.CreateScope();
		var context = scope.ServiceProvider.GetRequiredService<ConfigurationDbContext>();
		var identityServerSettings = _configuration.GetSection(nameof(IdentityServerSetting)).Get<IdentityServerSetting>();

		if (!context.Clients.Any())
		{
			foreach (var client in identityServerSettings.Clients)
			{
				context.Clients.Add(client.ToEntity());
			}
		}

		if (!context.ApiScopes.Any())
		{
			foreach (var apiScope in identityServerSettings.ApiScopes)
			{
				context.ApiScopes.Add(apiScope.ToEntity());
			}
		}

		if (!context.ApiResources.Any())
		{
			foreach (var apiResource in identityServerSettings.ApiResources)
			{
				context.ApiResources.Add(apiResource.ToEntity());
			}
		}

		if (!context.IdentityResources.Any())
		{
			foreach (var identityResource in identityServerSettings.IdentityResources)
			{
				context.IdentityResources.Add(identityResource.ToEntity());
			}
		}

		await context.SaveChangesAsync();
	}
}
