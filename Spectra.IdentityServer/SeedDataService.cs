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
        _authConfigDbContext = authConfigDbContext;
        _identityServerSetting = identityServerSetting;
        _logger = logger;
        _userManager = userManager;
        _roleManager = roleManager;
    }

    public async Task SeedAsync()
    {

        foreach (var role in _identityServerSetting.AppRoles)
        {
            if (await _roleManager.FindByNameAsync(role.Name) == null)
            {
                await _roleManager.CreateAsync(new AppRole
                {
                    Name = role.Name,
                    NormalizedName = role.Name.ToUpper()
                });
            }
        }
        foreach (var userData in _identityServerSetting.AppUsers)
        {
            if (await _userManager.FindByEmailAsync(userData.Email) == null)
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
        //api scopes
        var apiScopes = GetApiScopes();
        //api resourcs
        var apiResources = GetApiResources();
        // identity resourcs
        var identityRescources = GetIdentityResources();
        //clients
        var clients = GetClients();

        await Task.WhenAll(_authConfigDbContext.ApiScopes.AddRangeAsync(apiScopes),
            _authConfigDbContext.ApiResources.AddRangeAsync(apiResources),
            _authConfigDbContext.IdentityResources.AddRangeAsync(identityRescources),
            _authConfigDbContext.Clients.AddRangeAsync(clients));

        await _authConfigDbContext.SaveChangesAsync();
    }

    private IEnumerable<IdentityServer4.EntityFramework.Entities.IdentityResource> GetIdentityResources()
    {
        foreach (var identityResource in _identityServerSetting.IdentityResources)
        {
            if (!_authConfigDbContext.IdentityResources.Any(i => i.Name == identityResource.Name))
                yield return identityResource.ToEntity();

        }
    }
    private IEnumerable<IdentityServer4.EntityFramework.Entities.ApiScope> GetApiScopes()
    {
        foreach (var apiScope in _identityServerSetting.ApiScopes)
        {
            if (!_authConfigDbContext.ApiScopes.Any(s => s.Name == apiScope.Name))
                yield return apiScope.ToEntity();
        }
    }
    private IEnumerable<IdentityServer4.EntityFramework.Entities.ApiResource> GetApiResources()
    {
        foreach (var apiResource in _identityServerSetting.ApiResources)
        {
            if (!_authConfigDbContext.ApiResources.Any(i => i.Name == apiResource.Name))
                yield return apiResource.ToEntity();
        }
    }
    private IEnumerable<IdentityServer4.EntityFramework.Entities.Client> GetClients()
    {
        foreach (var client in _identityServerSetting.Clients)
        {
            if (!_authConfigDbContext.Clients.Any(c=>c.ClientId==client.ClientId))
            {
                client.ClientSecrets.ToList().ForEach(s => s.Value = s.Value.Sha256());
                yield return client.ToEntity();
            }
        }
    }
}
