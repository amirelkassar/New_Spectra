using Serilog;
using Spectra.Web;
using Spectra.Web.Extensions;


var builder = WebApplication.CreateBuilder(args);

try
{
    Console.WriteLine($"Loading Appliation Settings for env : {builder.Environment.EnvironmentName} ...");
    builder.Configuration
    .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables();
    Console.WriteLine("Settings Loaded!");


    builder.Host.UseSerilog((context, loggerConfig)
    => loggerConfig.ReadFrom.Configuration(context.Configuration));

    builder.Services.ConfigureWebHost(builder.Configuration,builder.Environment);

    var app = builder.Build();
    Log.Information("All Services Initalized!");

    Log.Information("Starting the application");

    await app.SetupMiddlewares();

    await app.RunAsync();

}
catch (Exception ex)
{
    Log.Fatal("Couldn't start the application", ex);
    throw;
}