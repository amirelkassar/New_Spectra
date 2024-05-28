using Serilog.Events;
using Serilog.Sinks.SystemConsole.Themes;
using Serilog;
using Spectra.IdentityServer;

var builder = WebApplication.CreateBuilder(args);
var app = builder.InitApplication()
    .Build();
Log.Information("Application has built!");
Log.Information("Application started...");

try
{
    if (app.Environment.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }

    app.UseIdentityServer();
    await app.RunAsync();


}
catch (Exception ex)
{
    Log.Fatal(ex, "Host terminated unexpectedly.");

}
finally
{
    Log.CloseAndFlush();
}