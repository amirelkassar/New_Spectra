using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Serilog;
using Spectra.Application.ChatHub;
using Spectra.Application.ChatHub.Services;
using Spectra.Application.Clients;
using Spectra.Application.Clients.Services;
using Spectra.Application.Commons.Dtos;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Contracts.Services;
using Spectra.Application.Countries;
using Spectra.Application.Countries.Cities;
using Spectra.Application.Countries.SeedService;
using Spectra.Application.Countries.States;
using Spectra.Application.Documents;
using Spectra.Application.Employees.ManagementStaff;
using Spectra.Application.Employees.ManagementStaff.Service;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services;
using Spectra.Application.Employees.MedicalTeams;
using Spectra.Application.Employees.MedicalTeams.Services;
using Spectra.Application.Identities;
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
using Spectra.Application.MasterData.Sections;
using Spectra.Application.MasterData.Sections.Service;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Application.MasterData.ServicesMD.Services;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.MasterData.SpecializationCommend.Services;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Application.Patients;
using Spectra.Application.ScheduleAppointments.Appointments;
using Spectra.Application.ScheduleAppointments.Appointments.Services;
using Spectra.Application.ScheduleAppointments.DoctorSchedules;
using Spectra.Application.Settings.AppSettings;
using Spectra.Application.Settings.Articles;
using Spectra.Application.Settings.MedicalSpecialties;
using Spectra.Application.Settings.MedicalSpecialties.Services;
using Spectra.Application.Settings.Packages;
using Spectra.Application.Settings.ShowMedicalProvider;
using Spectra.Application.Settings.SuccessStorIes;
using Spectra.Domain.AppRole;
using Spectra.Domain.AppUser;
using Spectra.Domain.Shared.Helpers;
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
using Spectra.Infrastructure.DoctorSchedules.DoctorSchedules;
using Spectra.Infrastructure.Documents;
using Spectra.Infrastructure.EmailSenders;
using Spectra.Infrastructure.Employees.ManagementStaff;
using Spectra.Infrastructure.Employees.MedicalStaff;
using Spectra.Infrastructure.Employees.MedicalStaff.MedicalProviders;
using Spectra.Infrastructure.MasterData.Diagnoses;
using Spectra.Infrastructure.MasterData.Drug;
using Spectra.Infrastructure.MasterData.ExcelFile;
using Spectra.Infrastructure.MasterData.GeneralComplaint;
using Spectra.Infrastructure.MasterData.InternalExaminations;
using Spectra.Infrastructure.MasterData.MedicalTestsAndXray;
using Spectra.Infrastructure.MasterData.sections;
using Spectra.Infrastructure.MasterData.Sections;
using Spectra.Infrastructure.MasterData.ServicesM;
using Spectra.Infrastructure.MasterData.ServicesMD;
using Spectra.Infrastructure.MasterData.Specialization;
using Spectra.Infrastructure.MedicalPatientProfiles;
using Spectra.Infrastructure.MedicalTeams;
using Spectra.Infrastructure.Patients;
using Spectra.Infrastructure.ScheduleAppointments.Appointments;
using Spectra.Infrastructure.ScheduleDoctorSchedule.DoctorSchedules;
using Spectra.Infrastructure.Services.IdentityServices;
using Spectra.Infrastructure.Settings.AppSettings;
using Spectra.Infrastructure.Settings.Articles;
using Spectra.Infrastructure.Settings.MedicalSpecialties;
using Spectra.Infrastructure.Settings.Packages;
using Spectra.Infrastructure.Settings.showSpecialltionies;
using Spectra.Infrastructure.Settings.SuccessStorIes;
using System.Reflection;
using System.Text;

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
            services.AddSerilog();

            services.AddDataProtection();
            services.ConfigureEmailServices(configuration);
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

        private static IServiceCollection ConfigureEmailServices(this IServiceCollection services, IConfiguration configuration)
        {
            var emailSettings = new EmailSettingDto();
            configuration.GetSection("EmailSettings").Bind(emailSettings);
            services.AddScoped<IEmailSender, FluentEmailSender>();
            services.AddFluentEmail(emailSettings.FromEmail, emailSettings.FromName)
                .AddSmtpSender(emailSettings.Host, emailSettings.Port, emailSettings.Username, emailSettings.Password)
               .AddRazorRenderer();
            return services;
        }

        private static IServiceCollection ConfigureApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<ISettingService, SettingService>();
            services.AddScoped<IClientService, ClientService>();
            services.AddScoped<IPatientService, PatientService>();
            services.AddScoped<IDrugService, DrugService>();
            services.AddScoped<ISpecializationService, SpecializationService>();
            services.AddScoped<IDiagnosesService, DiagnosesService>();
            services.AddScoped<IMedicalTestsAndXrayService, MedicalTestsAndXrayService>();
            services.AddScoped<IGeneralComplaintService, GeneralComplaintService>();
            services.AddScoped<IExcelProcessingService, ExcelProcessingService>();
            services.AddScoped<IServiceMDService, ServiceMDService>();
            services.AddScoped<IMedicalProviderService, MedicalProviderService>();
            services.AddScoped<IContractService, ContractService>();
            services.AddScoped<IChatService, ChatService>();
            services.AddScoped<IDoctorScheduleService, DoctorScheduleService>();
            services.AddScoped<IAppointmentService, AppointmentService>();
            services.AddScoped<IInternalExaminationService, InternalExaminationService>();
            services.AddScoped<IManagementStaffService, ManagementStaffService>();
            services.AddScoped<ISectionsServices, SectionsServices>();
            services.AddScoped<IAdminService, AdminService>();
            services.AddScoped<IMedicalTeamService, MedicalTeamService>();
            services.AddScoped<IMedicalSpecialtiesService, MedicalSpecialtiesService>();
            services.AddScoped<IPermissionManager,PermissionManager>();
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
            //MastarData Start
            services.AddScoped<IDrugRepository, DrugRepository>();
            services.AddScoped<ISpecializationsRepository, SpecializationsRepository>();
            services.AddScoped<IDiagnoseRepository, DiagnoseRepository>();
            services.AddScoped<IMedicalTestsAndXrayRepository, MedicalTestsAndXrayRepository>();
            services.AddScoped<IGeneralComplaintRepository, GeneralComplaintRepository>();
            services.AddScoped<IServiceMDRepository, ServiceMDRepository>();
            services.AddScoped<ISectionsRepository, SectionsRepository>();
            //End
            services.AddScoped<IMedicalProviderRepository, MedicalProviderRepository>();
            services.AddScoped<IContractRepository, ContractRepository>();
            services.AddScoped<IChatRepository, ChatRepository>();
            services.AddScoped<ISubContractRepository, SubContractRepository>();
            services.AddScoped<IAppointmentRepository, AppointmentRepository>();
            services.AddScoped<IDoctorScheduleRepository, DoctorScheduleRepository>();
            services.AddScoped<IInternalExaminationRepository, InternalExaminationRepository>();
            services.AddScoped<IManagementStaffRepository, ManagementStaffRepository>();
            services.AddScoped<IMedicalPatientProfileRepository, MedicalPatientProfileRepository>();
            services.AddScoped<IMedicalTeamRepository, MedicalTeamRepository>();
            //AdminSettings Start
            services.AddScoped<IArticlesRepository, ArticlesRepository>();
            services.AddScoped<IMedicalSpecialtiesRepository, MedicalSpecialtiesRepository>();
            services.AddScoped<ISuccessStorIesRepository, SuccessStorIesRepository>();
            services.AddScoped<IPackagesRepository, PackagesRepository>();

            services.AddScoped<ISettingRepository, SettingRepository>();
            services.AddScoped<IShowSpecialltionRepository, ShowSpecialltionRepository>();

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

            services.AddDbContext<IdentityContext>(config =>
            {
                config.UseNpgsql(configuration.GetConnectionString("IdentityConnection"), ctx =>
                {
                    ctx.MigrationsAssembly(typeof(IdentityContext).Assembly.FullName);
                });
            });
            services.ConfigurePermissions();
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
        private static IServiceCollection ConfigurePermissions(this IServiceCollection services)
        {
            var permissionContributors = typeof(IPermissionContributor)
                .Assembly
                .GetTypes()
                .Where(type => typeof(IPermissionContributor).IsAssignableFrom(type) && type.IsClass);

            var permissions = permissionContributors.Select(t => t.GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy)
                   .Where(field => field.IsLiteral && !field.IsInitOnly))
                .SelectMany(f => f.Select(p => p.GetRawConstantValue() as string))
                .ToArray();

            if (permissions.Length > 0)
            {
                foreach (var permission in permissions)
                {
                    services.AddAuthorization(config =>
                    {
                        config.AddPolicy(permission, permConfig => permConfig.RequireClaim(permission));
                    });
                }
            }
            return services;
        }
        private static IServiceCollection ConfigureSeedServices(this IServiceCollection services)
        {
            services.AddScoped<ICountrySeedService, CountrySeedService>();
            return services;
        }
    }
}
