using System.Linq.Expressions;
using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.Settings.AppSettings;
using Spectra.Domain.Settings.AppSettings;
using Spectra.Domain.Shared.Common.Exceptions;

namespace Spectra.Infrastructure.Settings.AppSettings
{
    internal class SettingRepository : ISettingRepository
    {
        private readonly IMongoCollection<ApplicationSetting> _applicationSettings;
        public SettingRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _applicationSettings = database.GetCollection<ApplicationSetting>("ApplicationSettings");
        }
        public async Task AddAsync(ApplicationSetting input)
        {
            await _applicationSettings.InsertOneAsync(input);
        }

        public async Task UpdateAsync(ApplicationSetting input)
        {
            await _applicationSettings.ReplaceOneAsync(s => s.Id == input.Id, input);
        }

        public async Task DeleteAsync(ApplicationSetting input)
        {
            await _applicationSettings.DeleteOneAsync(s => s.Id == input.Id);
        }
        public async Task DeleteRangeAsync(params ApplicationSetting[] input)
        {
            _applicationSettings.DeleteMany(s => input.Select(i => i.Id).Any(id => s.Id == id));
            await Task.CompletedTask;
        }

        public async Task<IEnumerable<ApplicationSetting>> GetAllAsync(Expression<Func<ApplicationSetting, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _applicationSettings.Find(filter, options).ToListAsync();
        }

        public async Task<ApplicationSetting> GetByIdAsync(string id)
        {
            var entity = await _applicationSettings.Find(c => c.Id == id).FirstOrDefaultAsync();
            return entity == null ? throw new NotFoundException("ApplicationSettings", id) : entity;
        }

        public async Task<ApplicationSetting> GetByNameAsync(string name)
        {
            var entity = await _applicationSettings.Find(c => c.LogicalName == name).FirstOrDefaultAsync();
            return entity == null ? throw new NotFoundException("ApplicationSettings", name) : entity;
        }

        public async Task<bool> AnyAsync(Expression<Func<ApplicationSetting, bool>> filter = null)
        {
            filter ??= _ => true;
            return await _applicationSettings.Find(filter).AnyAsync();
        }
    }
}
