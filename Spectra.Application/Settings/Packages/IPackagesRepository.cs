using MongoDB.Driver;
using Spectra.Domain.Settings.Packages;
using System.Linq.Expressions;

namespace Spectra.Application.Settings.Packages
{
    public interface IPackagesRepository
    {
        Task AddAsync(Package package);
        Task DeleteAsync(Package package);
        Task<IEnumerable<Package>> GetAllAsync(Expression<Func<Package, bool>> filter = null, FindOptions options = null);
        Task<Package> GetByIdAsync(string id);
        Task UpdateAsync(Package package);
    }
}