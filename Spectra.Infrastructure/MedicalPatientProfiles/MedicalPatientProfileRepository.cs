using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.MedicalPatientProfiles;
using Spectra.Domain.Shared.Common.Exceptions;

namespace Spectra.Infrastructure.MedicalPatientProfiles
{
    public class MedicalPatientProfileRepository : IMedicalPatientProfileRepository
    {
        private readonly IMongoCollection<MedicalPatientProfile> _medicalPatientProfile;

        public MedicalPatientProfileRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;

            _medicalPatientProfile = database.GetCollection<MedicalPatientProfile>("MedicalPatientProfiles");

        }
        public async Task<PaginatedResult<MedicalPatientProfile>> GetAllAsyncA(
     Expression<Func<MedicalPatientProfile, bool>> filter = null,
     FindOptions options = null,
     int pageNumber = 1,
     int pageSize = 10)
        {
            // Use AsQueryable to get an IMongoQueryable<MedicalPatientProfile>
            var filterDefinition = filter ?? (x => true);

            // Use MongoDB's sorting and pagination
            var query = await _medicalPatientProfile
                .Find(filterDefinition, options)
                //.SortByDescending(x => x.) // Sort by Daysdate in descending order
                .Skip((pageNumber - 1) * pageSize) // Skip to the correct page
                .Limit(pageSize).ToListAsync();                  // Limit results to pageSize


            var totalCount = await _medicalPatientProfile.CountDocumentsAsync(filterDefinition);

            return new PaginatedResult<MedicalPatientProfile>(query, totalCount, pageSize);
        }
        public async Task<MedicalPatientProfile> GetByIdAsync(string id)
        {

            var entity = await _medicalPatientProfile.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("MedicalPatientProfile", id);
            }
            return entity;
        }

        public async Task AddAsync(MedicalPatientProfile medicalPatientProfile)
        {
            await _medicalPatientProfile.InsertOneAsync(medicalPatientProfile);
        }

        public async Task UpdateAsync(MedicalPatientProfile medicalPatientProfile)
        {
            await _medicalPatientProfile.ReplaceOneAsync(c => c.Id == medicalPatientProfile.Id, medicalPatientProfile);
        }

        public async Task DeleteAsync(MedicalPatientProfile medicalPatientProfile)
        {
            await _medicalPatientProfile.DeleteOneAsync(c => c.Id == medicalPatientProfile.Id);
        }
        public async Task<UpdateResult> UpdateManyAsync(FilterDefinition<MedicalPatientProfile> filter, UpdateDefinition<MedicalPatientProfile> update)
        {
            return await _medicalPatientProfile.UpdateManyAsync(filter, update);
        }
        public async Task<IEnumerable<MedicalPatientProfile>> GetAllAsync(Expression<Func<MedicalPatientProfile, bool>> filter, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _medicalPatientProfile.Find(filter, options).ToListAsync();
        }

    }
}
