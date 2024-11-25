using MongoDB.Driver;
using Spectra.Domain.MasterData.ServicesMD;
using System.Linq.Expressions;

namespace Spectra.Application.MasterData.ServicesMD
{
    public interface IServiceMDRepository
    {
        Task AddAsync(PlatformService masterDataServices);
        Task DeleteAsync(PlatformService masterDataServices);
        Task<IEnumerable<PlatformService>> GetAllAsync(Expression<Func<PlatformService, bool>> filter = null, FindOptions options = null);
        Task<PlatformService> GetByIdAsync(string id);
        Task UpdateAsync(PlatformService masterDataServices);
    }
}