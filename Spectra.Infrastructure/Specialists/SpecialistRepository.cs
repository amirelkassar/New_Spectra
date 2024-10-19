using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MedicalStaff.Specialists;
using Spectra.Domain.MedicalStaff.Specialists;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.Specialists
{
    public class SpecialistRepository : ISpecialistRepository
    {
        private readonly IMongoCollection<Specialist> _specialists;

        public SpecialistRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _specialists = database.GetCollection<Specialist>("specialists");

        }
        public async Task<Specialist> GetByIdAsync(string id)
        {
            return await _specialists.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(Specialist specialist)
        {
            await _specialists.InsertOneAsync(specialist);
        }

        public async Task UpdateAsync(Specialist specialist)
        {
            await _specialists.ReplaceOneAsync(c => c.Id == specialist.Id, specialist);
        }

        public async Task DeleteAsync(Specialist specialist)
        {
            await _specialists.DeleteOneAsync(c => c.Id == specialist.Id);
        }

        public async Task<IEnumerable<Specialist>> GetAllAsync(Expression<Func<Specialist, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _specialists.Find(filter, options).ToListAsync();
        }
    }
}
