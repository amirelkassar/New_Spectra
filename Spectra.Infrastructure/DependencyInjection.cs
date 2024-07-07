using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Spectra.Application.Clients;
using Spectra.Application.Countries;
using Spectra.Application.Documents;
using Spectra.Application.Interfaces;
using Spectra.Application.Patients;
using Spectra.Domain.Shared.OptionDtos;
using Spectra.Infrastructure.Countries;
using Spectra.Infrastructure.Country;
using Spectra.Infrastructure.Data;
using Spectra.Infrastructure.Repositories;
using Spectra.Infrastructure.Services;

namespace Spectra.Infrastructure
{
    public static class DependencyInjection
    {

        public static IServiceCollection ConfigureInfrastructure(this IServiceCollection services,
            IConfiguration configuration)
        {
            services.ConfigureDataBase(configuration);
            services.ConfigureCountriesNow(configuration);

            services.AddScoped<ICountryRepository, CountryRepository>();
            services.AddScoped<IClientRepository, ClientRepository>();
            services.AddScoped<IPatientRepository, PatientRepository>();
            services.AddScoped<IDocumentRepository, DocumentRepository>();


            services.AddScoped<SeedService>();

            services.AddHttpClient();
            return services;
        }
        private static IServiceCollection ConfigureDataBase(this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddScoped<IMongoDbService, MongoDbService>();
            return services;
        }

        private static IServiceCollection ConfigureCountriesNow(this IServiceCollection services,
            IConfiguration configuration)
        {
            var countriesNow = configuration
                .GetSection("ThirdParty")
                .GetSection(nameof(CountriesNow));
            services.Configure<CountriesNow>(countriesNow);
            return services;
        }
    }
}
