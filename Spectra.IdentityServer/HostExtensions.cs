using Serilog.Events;
using Serilog.Sinks.SystemConsole.Themes;
using Serilog;

namespace Spectra.IdentityServer
{
    public static class HostExtensions
    {
        public static WebApplicationBuilder InitApplication(this WebApplicationBuilder builder)
        {
            Log.Logger = new LoggerConfiguration()
               .MinimumLevel.Debug()
               .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
               .MinimumLevel.Override("Microsoft.Hosting.Lifetime", LogEventLevel.Information)
               .MinimumLevel.Override("System", LogEventLevel.Warning)
               .MinimumLevel.Override("Microsoft.AspNetCore.Authentication", LogEventLevel.Information)
               .Enrich.FromLogContext()
               .WriteTo.Console(outputTemplate: "[{Timestamp:HH:mm:ss} {Level}] {SourceContext}{NewLine}{Message:lj}{NewLine}{Exception}{NewLine}", theme: AnsiConsoleTheme.Code)
               .CreateLogger();

            builder.Services.InitServices(builder.Configuration);


            return builder;
        }
    }
}
