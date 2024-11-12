using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.Settings.Packages;
using Spectra.Domain.Settings.Packages;
using Spectra.Domain.Shared.Common.Exceptions;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.Settings.Packages
{
    public class PackagesRepository : IPackagesRepository
    {
        private readonly IMongoCollection<Package> _Packages;

        public PackagesRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _Packages = database.GetCollection<Package>("Packages");
        }
        public async Task<Package> GetByIdAsync(string id)
        {

            var entity = await _Packages.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("Package", id);
            }
            return entity;
        }

        public async Task AddAsync(Package package)
        {
            await _Packages.InsertOneAsync(package);
        }

        public async Task UpdateAsync(Package package)
        {
            await _Packages.ReplaceOneAsync(c => c.Id == package.Id, package);
        }

        public async Task DeleteAsync(Package package)
        {
            await _Packages.DeleteOneAsync(c => c.Id == package.Id);
        }

        public async Task<IEnumerable<Package>> GetAllAsync(Expression<Func<Package, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _Packages.Find(filter, options).ToListAsync();
        }
    }
}
