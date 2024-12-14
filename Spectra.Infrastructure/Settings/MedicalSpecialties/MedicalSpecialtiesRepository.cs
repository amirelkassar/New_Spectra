using System.Linq.Expressions;
using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.Settings.MedicalSpecialties;
using Spectra.Domain.Settings.MedicalSpecialties;
using Spectra.Domain.Shared.Common.Exceptions;

namespace Spectra.Infrastructure.Settings.MedicalSpecialties
{
    public class MedicalSpecialtiesRepository : IMedicalSpecialtiesRepository
    {
        private readonly IMongoCollection<MedicalSpecialt> _MedicalSpecialts;

        public MedicalSpecialtiesRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _MedicalSpecialts = database.GetCollection<MedicalSpecialt>("MedicalSpecialts");
        }
        public async Task<MedicalSpecialt> GetByIdAsync(string id)
        {

            var entity = await _MedicalSpecialts.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("MedicalSpecialt", id);
            }
            return entity;
        }

        public async Task AddAsync(MedicalSpecialt medicalSpecialt)
        {
            await _MedicalSpecialts.InsertOneAsync(medicalSpecialt);
        }

        public async Task UpdateAsync(MedicalSpecialt medicalSpecialt)
        {
            await _MedicalSpecialts.ReplaceOneAsync(c => c.Id == medicalSpecialt.Id, medicalSpecialt);
        }

        public async Task DeleteAsync(MedicalSpecialt medicalSpecialt)
        {
            await _MedicalSpecialts.DeleteOneAsync(c => c.Id == medicalSpecialt.Id);
        }

        public async Task<IEnumerable<MedicalSpecialt>> GetAllAsync(Expression<Func<MedicalSpecialt, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _MedicalSpecialts.Find(filter, options).ToListAsync();
        }
    }
}
