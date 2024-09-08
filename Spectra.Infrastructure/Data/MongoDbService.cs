using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Spectra.Application.Interfaces;

namespace Spectra.Infrastructure.Data
{
    public class MongoDbService : IMongoDbService
    {
        private readonly IConfiguration _configuration;
        private readonly IMongoDatabase? _database;

        public MongoDbService(IConfiguration configuration)
        {
            _configuration = configuration;

            var connectionString = configuration.GetConnectionString("MongoDb");
            var mongoURL = MongoUrl.Create(connectionString);
            var mongoClient = new MongoClient(mongoURL);
            _database = mongoClient.GetDatabase(mongoURL.DatabaseName);
        }

        public IMongoDatabase? DataBase => _database;
    }
}
