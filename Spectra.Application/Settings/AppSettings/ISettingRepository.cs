using System.Linq.Expressions;
using MongoDB.Driver;
using Spectra.Domain.Settings.AppSettings;

namespace Spectra.Application.Settings.AppSettings
{
    public interface ISettingRepository
    {
        Task AddAsync(ApplicationSetting input);
        Task DeleteAsync(ApplicationSetting input);
        Task DeleteRangeAsync(params ApplicationSetting[] input);
        Task<IEnumerable<ApplicationSetting>> GetAllAsync(Expression<Func<ApplicationSetting, bool>> filter = null, FindOptions options = null);
        Task<ApplicationSetting> GetByIdAsync(string id);
        Task<ApplicationSetting> GetByNameAsync(string name);
        Task<bool> AnyAsync(Expression<Func<ApplicationSetting, bool>> filter = null);
        Task UpdateAsync(ApplicationSetting input);
    }
}
