using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Spectra.Application.Interfaces;
using Spectra.Infrastructure.Handlers;

namespace Spectra.WebAPI
{
    public static class DependencyInjection
    {
        public static IServiceCollection ConfigureWebAPIs(this IServiceCollection services,
            IConfiguration configuration)
        {

            services.AddHttpContextAccessor();
            services.AddScoped<ICurrentUser, CurrentUserHandler>();
            return services;
        }
    }
}
