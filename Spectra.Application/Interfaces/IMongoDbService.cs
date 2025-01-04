using MongoDB.Driver;

namespace Spectra.Application.Interfaces
{
    public interface IMongoDbService
    {
        IMongoDatabase? DataBase { get; }
    }
}
