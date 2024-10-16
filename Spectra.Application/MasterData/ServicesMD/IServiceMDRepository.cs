using MongoDB.Driver;
using Spectra.Domain.MasterData.ServicesMD;
using System.Linq.Expressions;

namespace Spectra.Application.MasterData.ServicesMD
{
    public interface IServiceMDRepository
    {
        Task AddAsync(MasterDataServices masterDataServices);
        Task DeleteAsync(MasterDataServices masterDataServices);
        Task<IEnumerable<MasterDataServices>> GetAllAsync(Expression<Func<MasterDataServices, bool>> filter = null, FindOptions options = null);
        Task<IEnumerable<MasterDataServices>> GetAllNameAndTermsAndConditions();
        Task<MasterDataServices> GetByIdAsync(string id);
        Task UpdateAsync(MasterDataServices masterDataServices);
    }
}