using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Serilog;
using Spectra.Application.Countries.SeedService;
using Spectra.Application.Hellper;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.Notifications.Hubs;
using Spectra.Application.Settings.AppSettings;
using Spectra.Domain.Shared.Constants;
using Spectra.Infrastructure.Data;
using Spectra.WebAPI.Middlewares;

namespace Spectra.Web.Extensions
{
    public static class ApplicationExtensions
    {
        public static async Task<WebApplication> SetupMiddlewares(this WebApplication application) 
        {
            await SeedDataAsync(application);
            CreateMainPathes(application);
            application.UseMiddleware<GlobalExceptionHandlerMiddleware>();

            application.UseSerilogRequestLogging();

            application.UseHttpsRedirection();

            application.UseCors("DefaultCors");

            application.UseRouting();

            application.UseAuthentication();
            application.UseAuthorization();

            SetupFileProviders(application);

            application.MapControllers();

            SetupSwagger(application);

            SetupHubs(application);

            return application;
        }

        private static async Task SeedDataAsync(WebApplication application)
        {
            using (var scope = application.Services.CreateScope())
            {
                var countrySeedService = scope.ServiceProvider.GetRequiredService<ICountrySeedService>();
                await countrySeedService.SeedCountriesAsync();
                await countrySeedService.SeedStatesAsync();
                await countrySeedService.SeedCitiesAsync();

                var settingsSeedService = scope.ServiceProvider.GetRequiredService<ApplicationSettingSeeder>();
                await settingsSeedService.Initialize();
                var dbContext = scope.ServiceProvider.GetRequiredService<IdentityContext>();

                await dbContext.Database.MigrateAsync();

                var identitySeederService = scope.ServiceProvider.GetRequiredService<IdentitySeeder>();
                await identitySeederService.SeedAsync();
            }
        }
        private static void CreateMainPathes(WebApplication application)
        {
            var methods = typeof(Pathes)
          .GetMethods()
          .Where(m => m.Name.Contains("Path", StringComparison.OrdinalIgnoreCase))
          .ToArray();
            foreach (var method in methods)
            {
                var path = Path.Combine(application.Environment.WebRootPath, method.Invoke(null, null)?.ToString());
                if (!string.IsNullOrWhiteSpace(path) && !Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }
            }
        }

        private static void SetupFileProviders(WebApplication application)
        {

            application.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(application.Environment.WebRootPath, Pathes.GetDrugsPath())),
                RequestPath = $"/{EndPointsRoutes.Drugs}",
                OnPrepareResponse = ctx =>
                {
                    var isAuth = ctx.Context?.User?.Identity?.IsAuthenticated;
                    Log.Logger.Information("user is {0}", isAuth);
                    if (isAuth.HasValue && !isAuth.Value)
                        throw new UnauthorizedAccessException();
                }
            });

            application.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(application.Environment.WebRootPath, Pathes.GetServicesPath())),
                RequestPath = $"/{EndPointsRoutes.Services}",
            });

            application.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(application.Environment.WebRootPath, Pathes.GetUsersPath())),
                RequestPath = $"/{EndPointsRoutes.Users}",
                OnPrepareResponse = ctx =>
                {
                    var isAuth = ctx.Context?.User?.Identity?.IsAuthenticated;
                    Log.Logger.Information("user is {0}", isAuth);
                    if (isAuth.HasValue && !isAuth.Value)
                        throw new UnauthorizedAccessException();
                    var user = ctx.Context.RequestServices.GetRequiredService<ICurrentUser>();
                }
            });
            application.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(application.Environment.WebRootPath, Pathes.GetPackagesPath())),
                RequestPath = $"/{EndPointsRoutes.Packages}",
            });
        }

        private static void SetupSwagger(WebApplication application)
        {
            application.UseSwagger();
            application.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "Spectra Web Apis");
            });
        }

        private static void SetupHubs(WebApplication application)
        {
            application.MapHub<NotificationHub>("/hubs/notification");
            application.MapHub<NotificationHub>("/hubs/chat");

        }
    }
}
