using AutoMapper;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Mappers;
using IdentityServer4.Models;
using Microsoft.AspNetCore.Identity;
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
            yield return new IdentityServer4.EntityFramework.Entities.IdentityResource
            {
                Description = identityResource.Description,
                DisplayName = identityResource.DisplayName,
                Emphasize = identityResource.Emphasize,
                Enabled = identityResource.Enabled,
                Name = identityResource.Name,
                Required = identityResource.Required,
                ShowInDiscoveryDocument = identityResource.ShowInDiscoveryDocument,
                Properties=identityResource.Properties.Select(p=>new IdentityServer4.EntityFramework.Entities.IdentityResourceProperty
                {
                    Key = p.Key,
                    Value = p.Value
                }).ToList(),
                UserClaims=identityResource.UserClaims.Select(u => new IdentityServer4.EntityFramework.Entities.IdentityResourceClaim
                {
                    Type = u
                }).ToList()
            };
        }
    }
    private IEnumerable<IdentityServer4.EntityFramework.Entities.ApiScope> GetApiScopes()
    {
        foreach (var apiScope in _identityServerSetting.ApiScopes)
        {
            yield return new IdentityServer4.EntityFramework.Entities.ApiScope
            {
                Description = apiScope.Description,
                DisplayName = apiScope.DisplayName,
                Emphasize = apiScope.Emphasize,
                Enabled = apiScope.Enabled,
                Name = apiScope.Name,
                Required = apiScope.Required,
                ShowInDiscoveryDocument = apiScope.ShowInDiscoveryDocument,
                UserClaims= apiScope.UserClaims.Select(u=>new IdentityServer4.EntityFramework.Entities.ApiScopeClaim
                {
                    Type=u
                }).ToList()
            };
        }
    }
    private IEnumerable<IdentityServer4.EntityFramework.Entities.ApiResource> GetApiResources()
    {
        foreach (var apiResource in _identityServerSetting.ApiResources)
        {
            yield return new IdentityServer4.EntityFramework.Entities.ApiResource
            {
                Name = apiResource.Name,
                Enabled = apiResource.Enabled,
                Description = apiResource.Description,
                DisplayName = apiResource.DisplayName,
                Scopes = apiResource.Scopes.Select(s => new IdentityServer4.EntityFramework.Entities.ApiResourceScope
                {
                    Scope= s,
                }).ToList(),
                ShowInDiscoveryDocument= apiResource.ShowInDiscoveryDocument,
                Secrets=apiResource.ApiSecrets.Select(s=>new IdentityServer4.EntityFramework.Entities.ApiResourceSecret
                {
                    Description= s.Description,
                    Expiration=s.Expiration,
                    Type=s.Type,
                    Value = s.Value
                }).ToList(),
                Properties=apiResource.Properties.Select(p=>new IdentityServer4.EntityFramework.Entities.ApiResourceProperty
                {
                    Value=p.Value,
                    Key=p.Key,
                }).ToList(),
                UserClaims=apiResource.UserClaims.Select(u=>new IdentityServer4.EntityFramework.Entities.ApiResourceClaim
                {
                    Type=u,
                }).ToList()
            };
        }
    }
    private IEnumerable<IdentityServer4.EntityFramework.Entities.Client> GetClients()
    {
        foreach (var client in _identityServerSetting.Clients)
        {
            yield return new IdentityServer4.EntityFramework.Entities.Client
            {
                ClientId= client.ClientId,
                ClientName= client.ClientName,
                ClientClaimsPrefix= client.ClientClaimsPrefix,
                ClientUri= client.ClientUri,
                Description= client.Description,
                AbsoluteRefreshTokenLifetime= client.AbsoluteRefreshTokenLifetime,
                AllowAccessTokensViaBrowser= client.AllowAccessTokensViaBrowser,
                AccessTokenLifetime= client.AccessTokenLifetime,
                AccessTokenType = (int)client.AccessTokenType,
                AllowedCorsOrigins = client.AllowedCorsOrigins.Select(c=>new IdentityServer4.EntityFramework.Entities.ClientCorsOrigin
                {
                    Origin= c,
                }).ToList(),
                AllowedGrantTypes= client.AllowedGrantTypes.Select(g=>new IdentityServer4.EntityFramework.Entities.ClientGrantType
                {
                    GrantType=g
                }).ToList(),
                AllowedScopes=client.AllowedScopes.Select(s=>new IdentityServer4.EntityFramework.Entities.ClientScope
                {
                    Scope=s
                }).ToList(),
                AllowOfflineAccess=client.AllowOfflineAccess,
                AllowPlainTextPkce=client.AllowPlainTextPkce,
                AllowRememberConsent=client.AllowRememberConsent,
                AlwaysIncludeUserClaimsInIdToken = client.AlwaysIncludeUserClaimsInIdToken,
                AlwaysSendClientClaims=client.AlwaysSendClientClaims,
                AuthorizationCodeLifetime= client.AuthorizationCodeLifetime,
                BackChannelLogoutSessionRequired=client.BackChannelLogoutSessionRequired,
                BackChannelLogoutUri = client.BackChannelLogoutUri,
                Claims= client.Claims.Select(c=>new IdentityServer4.EntityFramework.Entities.ClientClaim
                {
                    Type=c.Type,
                    Value=c.Value,
                }).ToList(),
                ClientSecrets=client.ClientSecrets.Select(s=>new IdentityServer4.EntityFramework.Entities.ClientSecret
                {
                    Description=s.Description,
                    Expiration=s.Expiration,
                    Type=s.Type,
                    Value = s.Value
                }).ToList(),
                ConsentLifetime=client.ConsentLifetime,
                DeviceCodeLifetime=client.DeviceCodeLifetime,
                Enabled=client.Enabled,
                EnableLocalLogin=client.EnableLocalLogin,
                FrontChannelLogoutSessionRequired= client.FrontChannelLogoutSessionRequired,
                FrontChannelLogoutUri = client.FrontChannelLogoutUri,
                IdentityProviderRestrictions= client.IdentityProviderRestrictions.Select(ipr=>new IdentityServer4.EntityFramework.Entities.ClientIdPRestriction
                {
                    Provider=ipr
                }).ToList(),
                IdentityTokenLifetime=client.IdentityTokenLifetime,
                IncludeJwtId=client.IncludeJwtId,
                LogoUri=client.LogoUri,
                PairWiseSubjectSalt=client.PairWiseSubjectSalt,
                PostLogoutRedirectUris = client.PostLogoutRedirectUris.Select(uri=>new IdentityServer4.EntityFramework.Entities.ClientPostLogoutRedirectUri
                {
                    PostLogoutRedirectUri=uri,
                }).ToList(),
                Properties= client.Properties.Select(p=>new IdentityServer4.EntityFramework.Entities.ClientProperty
                {
                    Key = p.Key,
                    Value = p.Value
                }).ToList(),
                ProtocolType=client.ProtocolType,
                RedirectUris=client.RedirectUris.Select(uri=>new IdentityServer4.EntityFramework.Entities.ClientRedirectUri
                {
                    RedirectUri=uri,
                }).ToList(),
                RefreshTokenExpiration=(int)client.RefreshTokenExpiration,
                RefreshTokenUsage=(int)client.RefreshTokenUsage,
                RequireClientSecret=client.RequireClientSecret,
                RequireConsent= client.RequireConsent,
                RequirePkce= client.RequirePkce,
                RequireRequestObject= client.RequireRequestObject,
                SlidingRefreshTokenLifetime=client.SlidingRefreshTokenLifetime,
                UpdateAccessTokenClaimsOnRefresh=client.UpdateAccessTokenClaimsOnRefresh,
                UserCodeType=client.UserCodeType,
                UserSsoLifetime = client.UserSsoLifetime,
            };
        }
    }
}
