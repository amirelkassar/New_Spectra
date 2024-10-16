using MongoDB.Driver;
using Spectra.Domain.Clients;
using System.Linq.Expressions;

namespace Spectra.Application.Clients
{
    public interface IClientRepository
    {
        Task<Client> GetByIdAsync(string id);
        Task<IEnumerable<Client>> GetAllAsync(Expression<Func<Client, bool>> filter= null, FindOptions options = null);
        Task AddAsync(Client client);
        Task UpdateAsync(Client client);
        Task DeleteAsync(Client client);
    }
}
