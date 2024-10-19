using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Spectra.Application.Clients;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Clients;

using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.Shared.Common.Exceptions;

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
            return entity;
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
        // Get All Clients with Pagination 
        public async Task<PaginatedResult<Client>> GetAllAsyncWithPaginated(
   Expression<Func<Client, bool>> filter = null,
   FindOptions options = null,
   int pageNumber = 1,
   int pageSize = 10)
        {
            // Use AsQueryable to get an IMongoQueryable<Doctor>
            var query = _clients.AsQueryable();

            // Apply the filter if provided
            if (filter != null)
            {
                query = (IMongoQueryable<Client>)query.Where(filter); ;
            }

            //Order by 'Created' field
            //query = query.OrderByDescending(x => x.Created.Date);

            // Get total count of the filtered query
            var totalCount = await query.CountAsync();  // Use CountAsync() from MongoDB.Driver.Linq

            // Paginate the results
            var clients = query
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToList();
            // Return paginated result
            return new PaginatedResult<Client>
            {
                Items = clients,
                TotalCount = totalCount,
                PageNumber = pageNumber,
                PageSize = pageSize
            };
        }
    }
}
