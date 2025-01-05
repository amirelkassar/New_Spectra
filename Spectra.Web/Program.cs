using Serilog;
using Spectra.Web;
using Spectra.Web.Extensions;


var builder = WebApplication.CreateBuilder(args);

try
{
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