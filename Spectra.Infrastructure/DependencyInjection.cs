using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Serilog;
using Spectra.Application.ChatHub;
using Spectra.Application.ChatHub.Services;
using Spectra.Application.Clients;
using Spectra.Application.Clients.Services;
using Spectra.Application.Contracts.Repository;
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
using Spectra.Application.MasterData.InternalExaminations;
using Spectra.Application.MasterData.InternalExaminations.Services;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Services;
using Spectra.Application.MasterData.ServicesMD.Services;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.MasterData.SpecializationCommend.Services;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Application.MedicalStaff.Doctors;
using Spectra.Application.MedicalStaff.Doctors.Services;
using Spectra.Application.MedicalStaff.Specialists;
using Spectra.Application.MedicalStaff.Specialists.Services;
using Spectra.Application.Patients;
using Spectra.Application.ScheduleAppointments.Appointments;
using Spectra.Application.ScheduleAppointments.Appointments.Services;
using Spectra.Application.ScheduleAppointments.DoctorSchedules;
using Spectra.Domain.AppRole;
using Spectra.Domain.AppUser;
using Spectra.Domain.Shared.OptionDtos;
using Spectra.Infrastructure.Admin;
using Spectra.Infrastructure.ChatHub;
using Spectra.Infrastructure.Clients;
using Spectra.Infrastructure.Contracts;
using Spectra.Infrastructure.Contracts.SubContracts;
using Spectra.Infrastructure.Countries;
using Spectra.Infrastructure.Countries.Cities;
using Spectra.Infrastructure.Countries.States;
using Spectra.Infrastructure.Data;
using Spectra.Infrastructure.Doctors;
using Spectra.Infrastructure.DoctorSchedules.DoctorSchedules;
using Spectra.Infrastructure.Documents;
using Spectra.Infrastructure.MasterData.Diagnoses;
using Spectra.Infrastructure.MasterData.Drug;
using Spectra.Infrastructure.MasterData.ExcelFile;
using Spectra.Infrastructure.MasterData.GeneralComplaint;
using Spectra.Infrastructure.MasterData.InternalExaminations;
using Spectra.Infrastructure.MasterData.MedicalTestsAndXray;

using Spectra.Application.MasterData.ServicesMD;
using Spectra.Infrastructure.MasterData.ServicesM;
using Spectra.Infrastructure.MasterData.ServicesMD;
using Spectra.Infrastructure.MasterData.Specialization;
using Spectra.Infrastructure.Patients;
using Spectra.Infrastructure.ScheduleAppointments.Appointments;
using Spectra.Infrastructure.ScheduleDoctorSchedule.DoctorSchedules;
using Spectra.Infrastructure.Services.AuthorizerService;
using Spectra.Infrastructure.Specialists;
using System.Reflection;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;

using Microsoft.EntityFrameworkCore;
using Spectra.Application.Identities;
using Spectra.Infrastructure.Services.IdentityServices;

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
            services.ConfigureAuth(configuration);
            services.ConfigureDataAccess(configuration);
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
            services.AddScoped<IDoctorScheduleService, DoctorScheduleService>();
            services.AddScoped<IAppointmentService, AppointmentService>();
            services.AddScoped<IInternalExaminationService, InternalExaminationService>();
            services.AddScoped<IAdminService, AdminService>();



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
            services.AddScoped<ISubContractRepository, SubContractRepository>();
            services.AddScoped<IAppointmentRepository, AppointmentRepository>();
            services.AddScoped<IDoctorScheduleRepository, DoctorScheduleRepository>();
            services.AddScoped<IInternalExaminationRepository, InternalExaminationRepository>();
            services.AddSignalR();

            return services;
        }
        private static IServiceCollection ConfigureAuth(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
               .AddJwtBearer(opts =>
               {

                   opts.TokenValidationParameters = new TokenValidationParameters
                   {
                       ValidIssuer = configuration["Jwt:Issuer"],
                       ValidAudience = configuration["Jwt:Audience"],
                       IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"] ?? "")),
                       ValidateIssuer = true,
                       ValidateAudience = true,
                       ValidateLifetime = false,
                       ValidateIssuerSigningKey = true
                   };

                   opts.Events = new JwtBearerEvents
                   {
                       OnMessageReceived = async ctx =>
                       {
                           // Check if the token is in the query string
                           var token = ctx.Request.Query["token"].FirstOrDefault();
                           if (!string.IsNullOrEmpty(token))
                               ctx.Token = token;

                           await Task.CompletedTask;
                       },
                       OnAuthenticationFailed = async ctx =>
                       {
                           Log.Error("Authentication failed: {Exception}", ctx.Exception.ToString());
                           await Task.CompletedTask;
                       },

                   };
               });

            services.AddIdentityCore<AppUser>(config =>
            {
                config.Password.RequireNonAlphanumeric = false;
                config.Password.RequiredLength = 8;
                config.Password.RequireLowercase = true;
                config.Password.RequireUppercase = true;
                config.Password.RequireDigit = true;
            })
               .AddRoles<AppRole>()
               .AddEntityFrameworkStores<IdentityContext>()
               .AddDefaultTokenProviders();

            services.AddTransient<IAuthenticationService, AuthenticationService>();
            services.AddTransient<IIdentityService, IdentityService>();
            return services;
        }
        private static IServiceCollection ConfigureDataAccess(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("IdentityConnection");

            services.AddDbContext<IdentityContext>((sp, options) =>
            {
                options.EnableDetailedErrors();
                options.EnableSensitiveDataLogging();
                options.EnableServiceProviderCaching();
                options.UseNpgsql(connectionString, opt => opt.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName));
            });

            return services;
        }

        private static IServiceCollection ConfigureSeedServices(this IServiceCollection services)
        {
            services.AddScoped<ICountrySeedService, CountrySeedService>();
            return services;
        }
    }
}
