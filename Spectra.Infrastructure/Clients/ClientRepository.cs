using MongoDB.Driver;
using Spectra.Application.Clients;
using Spectra.Application.Interfaces;
using Spectra.Domain.Clients;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.Clients
{
    public class ClientRepository : IClientRepository
    {
        private readonly IMongoCollection<Client> _clients;

        public ClientRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _clients = database.GetCollection<Client>("Clients");
        }
        public async Task<Client> GetByIdAsync(string id)
        {
            return await _clients.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(Client client)
        {
            await _clients.InsertOneAsync(client);
        }

        public async Task UpdateAsync(Client client)
        {
            await _clients.ReplaceOneAsync(c => c.Id == client.Id, client);
        }

        public async Task DeleteAsync(Client client)
        {
            await _clients.DeleteOneAsync(c => c.Id == client.Id);
        }

        public async Task<IEnumerable<Client>> GetAllAsync(Expression<Func<Client, bool>> filter, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _clients.Find(filter, options).ToListAsync();
        }
    }
}
