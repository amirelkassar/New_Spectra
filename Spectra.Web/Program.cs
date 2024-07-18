using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Serilog;
using Spectra.Application.Common;
using Spectra.Application.Countries.SeedService;
using Spectra.Infrastructure;
using Spectra.Infrastructure.Data;
using Spectra.Infrastructure.PipelineBehaviors;
using Spectra.Web;
using Spectra.Web.Models;
using Spectra.WebAPI;
using Spectra.WebAPI.Middlewares;
using System.Reflection;
using System.Text.Json.Serialization;


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
if (app.Environment.IsDevelopment())
{
    var swaggerClientId = app.Configuration["IdentityServerSetting:Clients:0:ClientId"];
    var swaggerClientSecret = app.Configuration["IdentityServerSetting:Clients:0:Secret"];
    var swaggerClientName = app.Configuration["IdentityServerSetting:Clients:0:ClientName"];

    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "Spectra Web Apis");

        options.OAuthClientId(swaggerClientId);
        options.OAuthClientSecret(swaggerClientSecret);
        options.OAuthAppName(swaggerClientName);
        options.OAuthUsePkce();
    });
}
app.UseMiddleware<GlobalExceptionHandlerMiddleware>();

app.UseSerilogRequestLogging();

app.UseHttpsRedirection();

app.UseAuthentication();


app.UseAuthorization();

app.MapControllers()
    .RequireAuthorization();

app.Run();
