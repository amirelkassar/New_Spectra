using Microsoft.EntityFrameworkCore;
using Serilog;
using Spectra.Application.Countries.SeedService;
using Spectra.Application.Identities;
using Spectra.Application.Settings.AppSettings;
using Spectra.Infrastructure.ChatHub;
using Spectra.Infrastructure.Data;
using Spectra.Web;
using Spectra.WebAPI.Middlewares;


var builder = WebApplication.CreateBuilder(args);

//Serilog
builder.Host.UseSerilog((context, loggerConfig)
    => loggerConfig.ReadFrom.Configuration(context.Configuration));

builder.Services.ConfigureWebHost(builder.Configuration);

var app = builder.Build();
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

    if (await dbContext.Database.EnsureCreatedAsync())
    {
        await dbContext.Database.MigrateAsync();
    }
    var identitySeederService = scope.ServiceProvider.GetRequiredService<IdentitySeeder>();
    await identitySeederService.SeedAsync();
}

// Configure the HTTP request pipeline.

app.UseMiddleware<GlobalExceptionHandlerMiddleware>();

app.UseSerilogRequestLogging();

app.UseHttpsRedirection();

app.UseCors("DefaultCors");

app.UseRouting();

app.UseStaticFiles();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "Spectra Web Apis");
});

app.MapHub<ChatHub>("/chathub");


app.Run();
