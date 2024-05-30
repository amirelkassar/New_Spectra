using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Serilog;
using Spectra.Application.Common;
using Spectra.Infrastructure.Data;
using Spectra.Infrastructure.PipelineBehaviors;
using Spectra.Web;
using Spectra.WebAPI.Middlewares;
using System.Reflection;


var builder = WebApplication.CreateBuilder(args);

//Serilog
builder.Host.UseSerilog((context, loggerConfig)
	=> loggerConfig.ReadFrom.Configuration(context.Configuration));

builder.Services.ConfigureWebHost(builder.Configuration);
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseMiddleware<GlobalExceptionHandlerMiddleware>();

app.UseSerilogRequestLogging();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
