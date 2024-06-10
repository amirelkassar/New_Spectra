using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Serilog;
using Spectra.Application.Common;
using Spectra.Infrastructure;
using Spectra.Infrastructure.Data;
using Spectra.Infrastructure.PipelineBehaviors;
using Spectra.Infrastructure.Services;
using Spectra.Web;
using Spectra.WebAPI;
using Spectra.WebAPI.Middlewares;
using System.Reflection;


var builder = WebApplication.CreateBuilder(args);

//Serilog
builder.Host.UseSerilog((context, loggerConfig)
	=> loggerConfig.ReadFrom.Configuration(context.Configuration));

builder.Services.ConfigureWebHost(builder.Configuration);
builder.Services.ConfigureWebAPIs(builder.Configuration);

builder.Services.ConfigureInfrastructure(builder.Configuration);



var app = builder.Build();
// Seed data before handling requests
using (var scope = app.Services.CreateScope())
{
	var seedService = scope.ServiceProvider.GetRequiredService<SeedService>();
	await seedService.SeedDataAsync();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseMiddleware<GlobalExceptionHandlerMiddleware>();

app.UseSerilogRequestLogging();

app.UseHttpsRedirection();

app.UseAuthentication();


app.UseAuthorization();

app.MapControllers().RequireAuthorization("ApiScope");

app.Run();
