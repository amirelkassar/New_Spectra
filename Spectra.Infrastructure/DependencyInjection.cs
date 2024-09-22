using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Spectra.Application.ChatHub;
using Spectra.Application.ChatHub.Services;
using Spectra.Application.Clients;
using Spectra.Application.Clients.Services;
using Spectra.Application.Contracts;
using Spectra.Application.Contracts.Services;
using Spectra.Application.Countries;
using Spectra.Application.Countries.Cities;
using Spectra.Application.Countries.SeedService;
using Spectra.Application.Countries.States;
using Spectra.Application.Documents;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.DiagnoseCommend;
using Spectra.Application.MasterData.DiagnoseCommend.Services;
using Spectra.Application.MasterData.Drug;
using Spectra.Application.MasterData.Drug.Services;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Application.MasterData.GeneralComplaintsM.Services;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Services;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.MasterData.SpecializationCommend.Services;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Application.MedicalStaff.Doctors.Services;
using Spectra.Application.MedicalStaff.Specialists;
using Spectra.Application.MedicalStaff.Specialists.Services;
using Spectra.Application.Patients;
using Spectra.Domain.Shared.OptionDtos;
using Spectra.Infrastructure.ChatHub;
using Spectra.Infrastructure.Clients;
using Spectra.Infrastructure.Contracts;
using Spectra.Infrastructure.Countries;
using Spectra.Infrastructure.Countries.Cities;
using Spectra.Infrastructure.Countries.States;
using Spectra.Infrastructure.Data;
using Spectra.Infrastructure.Doctors;
using Spectra.Infrastructure.Documents;
using Spectra.Infrastructure.MasterData.Diagnoses;
using Spectra.Infrastructure.MasterData.Drug;
using Spectra.Infrastructure.MasterData.ExcelFile;
using Spectra.Infrastructure.MasterData.GeneralComplaint;
using Spectra.Infrastructure.MasterData.MedicalTestsAndXray;
using Spectra.Infrastructure.MasterData.Services;
using Spectra.Infrastructure.MasterData.ServicesM;
using Spectra.Infrastructure.MasterData.ServicesMD;
using Spectra.Infrastructure.MasterData.Specialization;
using Spectra.Infrastructure.Patients;
using Spectra.Infrastructure.Services.AuthorizerService;
using Spectra.Infrastructure.Specialists;

namespace Spectra.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection ConfigureInfrastructure(this IServiceCollection services,
            IConfiguration configuration)
        {
            services.ConfigureDataBase(configuration);

            services.ConfigureCountriesNow(configuration);

            services.ConfigureRepositories();

            services.ConfigureSeedServices();

            services.ConfigureApplicationServices();
            
            services.AddHttpClient();

            services.AddScoped(typeof(IAuthorizer<>), typeof(Authorize<>));
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

        private static IServiceCollection ConfigureApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IClientService, ClientService>();
            services.AddScoped<IPatientService, PatientService>();
            services.AddScoped<IDrugService, DrugService>();
            services.AddScoped<ISpecializationService, SpecializationService>();
            services.AddScoped<IDiagnosesService, DiagnosesService>();
            services.AddScoped<IMedicalTestsAndXrayService, MedicalTestsAndXrayService>();
            services.AddScoped<IGeneralComplaintService, GeneralComplaintService>();
            services.AddScoped<IExcelProcessingService, ExcelProcessingService>();
            services.AddScoped<IServiceMDService, ServiceMDService>();
            services.AddScoped<IDoctorService, DoctorService>();
            services.AddScoped<ISpecialistService, SpecialistService>();
            services.AddScoped<IContractService, ContractService>();
            services.AddScoped<IChatService, ChatService>();
            services.AddScoped<IHellper, Hellper>();
       
                    
            return services;
        }
        

        private static IServiceCollection ConfigureRepositories(this IServiceCollection services)
        {
            services.AddScoped<ICountryRepository, CountryRepository>();
            services.AddScoped<IClientRepository, ClientRepository>();
            services.AddScoped<IPatientRepository, PatientRepository>();
            services.AddScoped<IDocumentRepository, DocumentRepository>();
            services.AddScoped<IStateRepository, StateRepository>();
            services.AddScoped<ICityRepository, CityRepository>();
            services.AddScoped<IDrugRepository, DrugRepository>();
            services.AddScoped<ISpecializationsRepository, SpecializationsRepository>();
            services.AddScoped<IDiagnoseRepository, DiagnoseRepository>();
            services.AddScoped<IMedicalTestsAndXrayRepository, MedicalTestsAndXrayRepository>();
            services.AddScoped<IGeneralComplaintRepository, GeneralComplaintRepository>();
            services.AddScoped<IServiceMDRepository, ServiceMDRepository>();
            services.AddScoped<IDoctorRepository, DoctorRepository>();
            services.AddScoped<ISpecialistRepository, SpecialistRepository>();
            services.AddScoped<IContractRepository, ContractRepository>();
            services.AddScoped<IChatRepository, ChatRepository>();
          
            services.AddSignalR();
            return services;
        }

        private static IServiceCollection ConfigureSeedServices(this IServiceCollection services)
        {
            services.AddScoped<ICountrySeedService, CountrySeedService>();
            return services;
        }
    }
}
