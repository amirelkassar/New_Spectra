using Spectra.Domain.MasterData.ServicesMD;

namespace Spectra.Infrastructure.MasterData.ServicesMD
{
    public interface IServiceMDRepository
    {
        Task AddAsync(MasterDataServices masterDataServices);
        Task DeleteAsync(MasterDataServices masterDataServices);
        Task<IEnumerable<MasterDataServices>> GetAllAsync();
        Task<MasterDataServices> GetByIdAsync(string id);
        Task UpdateAsync(MasterDataServices masterDataServices);
    }
}