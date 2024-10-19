using Serilog;
using Spectra.Application.Countries.SeedService;
using Spectra.Infrastructure.ChatHub;
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
    var seedService = scope.ServiceProvider.GetRequiredService<ICountrySeedService>();
    await seedService.SeedCountriesAsync();
    await seedService.SeedStatesAsync();
    await seedService.SeedCitiesAsync();

}

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "Spectra Web Apis");
});
app.UseMiddleware<GlobalExceptionHandlerMiddleware>();

app.UseSerilogRequestLogging();

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAuthentication();


app.UseAuthorization();
app.MapControllers().RequireAuthorization();  // Map API controllers
app.MapHub<ChatHub>("/chathub");



app.Run();
