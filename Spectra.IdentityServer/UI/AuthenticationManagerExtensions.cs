using IdentityServer4;
using IdentityServer4.Configuration;
using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;

namespace Spectra.IdentityServer.UI
{
    public static class AuthenticationManagerExtensions
    {
        //
        // Summary:
        //     Signs the user in.
        //
        // Parameters:
        //   context:
        //     The manager.
        //
        //   subject:
        //     The subject.
        //
        //   claims:
        //     The claims.
        public static async Task SignInAsync(this HttpContext context, string subject, params Claim[] claims)
        {
            ISystemClock clock = context.GetClock();
            IdentityServerUser user = new IdentityServerUser(subject)
            {
                AdditionalClaims = claims,
                AuthenticationTime = clock.UtcNow.UtcDateTime
            };
            await context.SignInAsync(user);
        }

        //
        // Summary:
        //     Signs the user in.
        //
        // Parameters:
        //   context:
        //     The manager.
        //
        //   subject:
        //     The subject.
        //
        //   properties:
        //     The authentication properties
        //
        //   claims:
        //     The claims.
        public static async Task SignInAsync(this HttpContext context, string subject, AuthenticationProperties properties, params Claim[] claims)
        {
            ISystemClock clock = context.GetClock();
            IdentityServerUser user = new IdentityServerUser(subject)
            {
                AdditionalClaims = claims,
                AuthenticationTime = clock.UtcNow.UtcDateTime
            };
            await context.SignInAsync(user, properties);
        }

        //
        // Summary:
        //     Signs the user in.
        //
        // Parameters:
        //   context:
        //     The manager.
        //
        //   subject:
        //     The subject.
        //
        //   name:
        //     The name.
        //
        //   claims:
        //     The claims.
        public static async Task SignInAsync(this HttpContext context, string subject, string name, params Claim[] claims)
        {
            ISystemClock clock = context.GetClock();
            IdentityServerUser user = new IdentityServerUser(subject)
            {
                DisplayName = name,
                AdditionalClaims = claims,
                AuthenticationTime = clock.UtcNow.UtcDateTime
            };
            await context.SignInAsync(user);
        }

        //
        // Summary:
        //     Signs the user in.
        //
        // Parameters:
        //   context:
        //     The manager.
        //
        //   subject:
        //     The subject.
        //
        //   name:
        //     The name.
        //
        //   properties:
        //     The properties.
        //
        //   claims:
        //     The claims.
        public static async Task SignInAsync(this HttpContext context, string subject, string name, AuthenticationProperties properties, params Claim[] claims)
        {
            ISystemClock clock = context.GetClock();
            IdentityServerUser user = new IdentityServerUser(subject)
            {
                DisplayName = name,
                AdditionalClaims = claims,
                AuthenticationTime = clock.UtcNow.UtcDateTime
            };
            await context.SignInAsync(user, properties);
        }

        //
        // Summary:
        //     Signs the user in.
        //
        // Parameters:
        //   context:
        //     The manager.
        //
        //   subject:
        //     The subject.
        //
        //   name:
        //     The name.
        //
        //   identityProvider:
        //     The identity provider.
        //
        //   claims:
        //     The claims.
        public static async Task SignInAsync(this HttpContext context, string subject, string name, string identityProvider, params Claim[] claims)
        {
            ISystemClock clock = context.GetClock();
            IdentityServerUser user = new IdentityServerUser(subject)
            {
                DisplayName = name,
                IdentityProvider = identityProvider,
                AdditionalClaims = claims,
                AuthenticationTime = clock.UtcNow.UtcDateTime
            };
            await context.SignInAsync(user);
        }

        //
        // Summary:
        //     Signs the user in.
        //
        // Parameters:
        //   context:
        //     The manager.
        //
        //   subject:
        //     The subject.
        //
        //   name:
        //     The name.
        //
        //   identityProvider:
        //     The identity provider.
        //
        //   properties:
        //     The properties.
        //
        //   claims:
        //     The claims.
        public static async Task SignInAsync(this HttpContext context, string subject, string name, string identityProvider, AuthenticationProperties properties, params Claim[] claims)
        {
            ISystemClock clock = context.GetClock();
            IdentityServerUser user = new IdentityServerUser(subject)
            {
                DisplayName = name,
                IdentityProvider = identityProvider,
                AdditionalClaims = claims,
                AuthenticationTime = clock.UtcNow.UtcDateTime
            };
            await context.SignInAsync(user, properties);
        }

        //
        // Summary:
        //     Signs the user in.
        //
        // Parameters:
        //   context:
        //     The manager.
        //
        //   subject:
        //     The subject.
        //
        //   name:
        //     The name.
        //
        //   authenticationMethods:
        //     The authentication methods.
        //
        //   claims:
        //     The claims.
        public static async Task SignInAsync(this HttpContext context, string subject, string name, IEnumerable<string> authenticationMethods, params Claim[] claims)
        {
            ISystemClock clock = context.GetClock();
            IdentityServerUser user = new IdentityServerUser(subject)
            {
                DisplayName = name,
                AuthenticationMethods = authenticationMethods.ToList(),
                AdditionalClaims = claims,
                AuthenticationTime = clock.UtcNow.UtcDateTime
            };
            await context.SignInAsync(user);
        }

        //
        // Summary:
        //     Signs the user in.
        //
        // Parameters:
        //   context:
        //     The manager.
        //
        //   subject:
        //     The subject.
        //
        //   name:
        //     The name.
        //
        //   authenticationMethods:
        //     The authentication methods.
        //
        //   properties:
        //     The properties.
        //
        //   claims:
        //     The claims.
        public static async Task SignInAsync(this HttpContext context, string subject, string name, IEnumerable<string> authenticationMethods, AuthenticationProperties properties, params Claim[] claims)
        {
            ISystemClock clock = context.GetClock();
            IdentityServerUser user = new IdentityServerUser(subject)
            {
                DisplayName = name,
                AuthenticationMethods = authenticationMethods.ToList(),
                AdditionalClaims = claims,
                AuthenticationTime = clock.UtcNow.UtcDateTime
            };
            await context.SignInAsync(user, properties);
        }

        //
        // Summary:
        //     Signs the user in.
        //
        // Parameters:
        //   context:
        //     The manager.
        //
        //   sub:
        //     The sub.
        //
        //   name:
        //     The name.
        //
        //   identityProvider:
        //     The identity provider.
        //
        //   authenticationMethods:
        //     The authentication methods.
        //
        //   claims:
        //     The claims.
        public static async Task SignInAsync(this HttpContext context, string sub, string name, string identityProvider, IEnumerable<string> authenticationMethods, params Claim[] claims)
        {
            ISystemClock clock = context.GetClock();
            IdentityServerUser user = new IdentityServerUser(sub)
            {
                DisplayName = name,
                IdentityProvider = identityProvider,
                AuthenticationMethods = authenticationMethods.ToList(),
                AdditionalClaims = claims,
                AuthenticationTime = clock.UtcNow.UtcDateTime
            };
            await context.SignInAsync(user);
        }

        //
        // Summary:
        //     Signs the user in.
        //
        // Parameters:
        //   context:
        //     The manager.
        //
        //   sub:
        //     The sub.
        //
        //   name:
        //     The name.
        //
        //   identityProvider:
        //     The identity provider.
        //
        //   authenticationMethods:
        //     The authentication methods.
        //
        //   properties:
        //     The properties.
        //
        //   claims:
        //     The claims.
        public static async Task SignInAsync(this HttpContext context, string sub, string name, string identityProvider, IEnumerable<string> authenticationMethods, AuthenticationProperties properties, params Claim[] claims)
        {
            ISystemClock clock = context.GetClock();
            IdentityServerUser user = new IdentityServerUser(sub)
            {
                DisplayName = name,
                IdentityProvider = identityProvider,
                AuthenticationMethods = authenticationMethods.ToList(),
                AdditionalClaims = claims,
                AuthenticationTime = clock.UtcNow.UtcDateTime
            };
            await context.SignInAsync(user, properties);
        }

        //
        // Summary:
        //     Signs the user in.
        //
        // Parameters:
        //   context:
        //     The manager.
        //
        //   user:
        //     The IdentityServer user.
        public static async Task SignInAsync(this HttpContext context, IdentityServerUser user)
        {
            await context.SignInAsync(await context.GetCookieAuthenticationSchemeAsync(), user.CreatePrincipal());
        }

        //
        // Summary:
        //     Signs the user in.
        //
        // Parameters:
        //   context:
        //     The manager.
        //
        //   user:
        //     The IdentityServer user.
        //
        //   properties:
        //     The authentication properties.
        public static async Task SignInAsync(this HttpContext context, IdentityServerUser user, AuthenticationProperties properties)
        {
            await context.SignInAsync(await context.GetCookieAuthenticationSchemeAsync(), user.CreatePrincipal(), properties);
        }

        internal static ISystemClock GetClock(this HttpContext context)
        {
            return context.RequestServices.GetRequiredService<ISystemClock>();
        }

        internal static async Task<string> GetCookieAuthenticationSchemeAsync(this HttpContext context)
        {
            IdentityServerOptions requiredService = context.RequestServices.GetRequiredService<IdentityServerOptions>();
            if (requiredService.Authentication.CookieAuthenticationScheme != null)
            {
                return requiredService.Authentication.CookieAuthenticationScheme;
            }

            return ((await context.RequestServices.GetRequiredService<IAuthenticationSchemeProvider>().GetDefaultAuthenticateSchemeAsync()) ?? throw new InvalidOperationException("No DefaultAuthenticateScheme found or no CookieAuthenticationScheme configured on IdentityServerOptions.")).Name;
        }
    }
}
