using Spectra.Domain.Clients;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Clients
{
    public interface IClientRepository
    {
        Task<Client> GetByIdAsync(string id);
        Task<IEnumerable<Client>> GetAllAsync();
        Task AddAsync(Client client);
        Task UpdateAsync(Client client);
        Task DeleteAsync(Client client);
    }
}
