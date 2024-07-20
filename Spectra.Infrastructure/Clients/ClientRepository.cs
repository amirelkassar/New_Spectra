using MongoDB.Driver;
using Spectra.Application.Clients;
using Spectra.Application.Interfaces;
using Spectra.Domain.Clients;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

        public async Task<IEnumerable<Client>> GetAllAsync()
        {
            return await _clients.Find(_ => true).ToListAsync();
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
    }
}
