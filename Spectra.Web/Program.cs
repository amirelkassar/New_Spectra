using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Serilog;
using Spectra.Infrastructure.Data;
using Spectra.Infrastructure.Entities;
using System.Reflection;


var builder = WebApplication.CreateBuilder(args);

//Register the Mediator
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));

// Register Logging Behavior
builder.Services.AddTransient(typeof(IPipelineBehavior<,>), typeof(LoggingBehavior<,>));

builder.Host.UseSerilog((context, loggerConfig)
	=> loggerConfig.ReadFrom.Configuration(context.Configuration));

// Read MongoDB settings from configuration
var ConnectionString = builder.Configuration.GetConnectionString("MongoDb");
var databaseName = builder.Configuration["DatabaseName"];

builder.Services.AddDbContext<ApplicationDbContext>(options =>
	options.UseMongoDB(ConnectionString, databaseName)
);


// Configure ASP.NET Core Identity to use MongoDB
builder.Services.AddIdentity<ApplicationUser, ApplicationRole>()
	.AddMongoDbStores<ApplicationUser, ApplicationRole, Guid>(
		ConnectionString, databaseName
	)
	.AddDefaultTokenProviders();
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseSerilogRequestLogging();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
