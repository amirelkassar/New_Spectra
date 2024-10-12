using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Spectra.Domain
{
    public static class DependencyInjection
    {
        public static IServiceCollection ConfigureDomain(this IServiceCollection services,
            IConfiguration configuration)
        {


            return services;
        }
    }
}
