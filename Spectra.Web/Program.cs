using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Serilog;
using Spectra.Application.Countries.SeedService;
using Spectra.Application.Hellper;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.Settings.AppSettings;
using Spectra.Domain.Shared.Constants;
using Spectra.Infrastructure.ChatHub;
using Spectra.Infrastructure.Data;
using Spectra.Web;
using Spectra.WebAPI.Middlewares;


var builder = WebApplication.CreateBuilder(args);

try
{
    builder.Host.UseSerilog((context, loggerConfig)
    => loggerConfig.ReadFrom.Configuration(context.Configuration));

    builder.Services.ConfigureWebHost(builder.Configuration);

    var app = builder.Build();
    Log.Information("All Services Initalized!");

    Log.Information("Starting the application");

    // Seed data before handling requests
    using (var scope = app.Services.CreateScope())
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

    var methods = typeof(Pathes)
              .GetMethods()
              .Where(m => m.Name.Contains("Path", StringComparison.OrdinalIgnoreCase))
              .ToArray();
    foreach (var method in methods)
    {
        var path = Path.Combine(app.Environment.WebRootPath, method.Invoke(null, null)?.ToString());
        if (!string.IsNullOrWhiteSpace(path) && !Directory.Exists(path))
        {
            Directory.CreateDirectory(path);
        }
    }

    app.UseMiddleware<GlobalExceptionHandlerMiddleware>();

    app.UseSerilogRequestLogging();

    app.UseHttpsRedirection();

    app.UseCors("DefaultCors");

    app.UseRouting();

    app.UseAuthentication();
    app.UseAuthorization();

    app.UseStaticFiles(new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(Path.Combine(app.Environment.WebRootPath, Pathes.GetDrugsPath())),
        RequestPath = $"/{EndPointsRoutes.Drugs}",
        OnPrepareResponse = ctx =>
        {
            var isAuth = ctx.Context?.User?.Identity?.IsAuthenticated;
            Log.Logger.Information("user is {0}", isAuth);
            if (isAuth.HasValue && !isAuth.Value)
                throw new UnauthorizedAccessException();
        }
    });

    app.UseStaticFiles(new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(Path.Combine(app.Environment.WebRootPath, Pathes.GetServicesPath())),
        RequestPath = $"/{EndPointsRoutes.Services}",
        OnPrepareResponse = ctx =>
        {
            var isAuth = ctx.Context?.User?.Identity?.IsAuthenticated;
            Log.Logger.Information("user is {0}", isAuth);
            if (isAuth.HasValue && !isAuth.Value)
                throw new UnauthorizedAccessException();
        }
    });

    app.UseStaticFiles(new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(Path.Combine(app.Environment.WebRootPath, Pathes.GetUsersPath())),
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
    app.MapControllers();

    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "Spectra Web Apis");
    });

    app.MapHub<ChatHub>("/chathub");


    app.Run();

}
catch (Exception ex)
{
    Log.Fatal("Couldn't start the application", ex);
    throw;
}