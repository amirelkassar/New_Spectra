using AutoMapper;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Mappers;
using IdentityServer4.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Spectra.Domain.AppRole;
using Spectra.Domain.AppUser;
using Spectra.IdentityServer.Data;
using Spectra.IdentityServer.Settings;

public class SeedDataService
{
    private readonly IdentityServerSetting _identityServerSetting;
    private readonly ILogger<SeedDataService> _logger;
    private readonly AuthConfigDbContext _authConfigDbContext;
    private readonly UserManager<AppUser> _userManager;
    private readonly RoleManager<AppRole> _roleManager;

    public SeedDataService(IdentityServerSetting identityServerSetting,
        ILogger<SeedDataService> logger,
        AuthConfigDbContext authConfigDbContext,
        UserManager<AppUser> userManager,
		RoleManager<AppRole> roleManager)
	{
        _authConfigDbContext=authConfigDbContext;
        _identityServerSetting = identityServerSetting;
        _logger = logger;
        _userManager = userManager;
        _roleManager = roleManager;
    }

	public async Task SeedAsync()
	{

        if (!_roleManager.Roles.Any())
        {
            foreach (var role in _identityServerSetting.AppRoles)
            {
                await _roleManager.CreateAsync(new AppRole
                {
                    Name = role.Name,
                    NormalizedName = role.Name.ToUpper()
                });
            }
        }
        if (!_userManager.Users.Any())
        {
            foreach (var userData in _identityServerSetting.AppUsers)
            {
                var user = new AppUser
                {
                    Email = userData.Email,
                    UserName = userData.UserName,
                    PhoneNumber = userData.PhoneNUmber,
                    EmailConfirmed = true,
                    PhoneNumberConfirmed = true,
                    LockoutEnabled = false,
                };
                var userCreateRes = await _userManager.CreateAsync(user, userData.Password);
                if (userCreateRes.Succeeded)
                {
                    await _userManager.AddToRolesAsync(user, userData.Roles);
                }
            }
        }
        if (!_authConfigDbContext.ApiScopes.Any())
        {
            var apiScopes = GetApiScopes();
            await _authConfigDbContext.ApiScopes.AddRangeAsync(apiScopes);
        }
        if (!_authConfigDbContext.ApiResources.Any())
        {
            var apiResources = GetApiResources();
            await _authConfigDbContext.ApiResources.AddRangeAsync(apiResources);
        }
        if (!_authConfigDbContext.IdentityResources.Any())
        {
            var identityRescources = GetIdentityResources();
            await _authConfigDbContext.IdentityResources.AddRangeAsync(identityRescources);
        }
		
       
        if (!_authConfigDbContext.Clients.Any())
        {
            var clients = GetClients();
            await _authConfigDbContext.Clients.AddRangeAsync(clients);
        }
       
		await _authConfigDbContext.SaveChangesAsync();
	}

    private IEnumerable<IdentityServer4.EntityFramework.Entities.IdentityResource> GetIdentityResources()
    {
        foreach (var identityResource in _identityServerSetting.IdentityResources)
        {
            yield return identityResource.ToEntity();
        }
    }
    private IEnumerable<IdentityServer4.EntityFramework.Entities.ApiScope> GetApiScopes()
    {
        foreach (var apiScope in _identityServerSetting.ApiScopes)
        {
            yield return apiScope.ToEntity();
        }
    }
    private IEnumerable<IdentityServer4.EntityFramework.Entities.ApiResource> GetApiResources()
    {
        foreach (var apiResource in _identityServerSetting.ApiResources)
        {
            yield return apiResource.ToEntity();
        }
    }
    private IEnumerable<IdentityServer4.EntityFramework.Entities.Client> GetClients()
    {
        foreach (var client in _identityServerSetting.Clients)
        {
            client.ClientSecrets.ToList().ForEach(s => s.Value = s.Value.Sha256());
            yield return client.ToEntity();
        }
    }
}
