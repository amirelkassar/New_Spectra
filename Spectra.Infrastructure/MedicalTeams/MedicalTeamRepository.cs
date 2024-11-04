using MongoDB.Driver;
using Spectra.Application.Employees.MedicalTeams;
using Spectra.Application.Interfaces;

using Spectra.Domain.MedicalTeam;
using Spectra.Domain.Shared.Common.Exceptions;

using System.Linq.Expressions;


namespace Spectra.Infrastructure.MedicalTeams
{
    public class MedicalTeamRepository : IMedicalTeamRepository

    {
        private readonly IMongoCollection<MedicalTeam> _medicalTeam;

        public MedicalTeamRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _medicalTeam = database.GetCollection<MedicalTeam>("MedicalTeam");
        }

        public async Task<MedicalTeam> GetByIdAsync(string id)
        {
            var entity = await _medicalTeam.Find(c => c.Id == id).FirstOrDefaultAsync();

            if (entity == null)
            {
                throw new NotFoundException("MedicalTeam", id);
            }
            return entity;
        }

        public async Task AddAsync(MedicalTeam medicalTeam)
        {
            await _medicalTeam.InsertOneAsync(medicalTeam);
        }

        public async Task UpdateAsync(MedicalTeam medicalTeam)
        {
            await _medicalTeam.ReplaceOneAsync(c => c.Id == medicalTeam.Id, medicalTeam);
        }

        public async Task DeleteAsync(MedicalTeam medicalTeam)
        {
            await _medicalTeam.DeleteOneAsync(c => c.Id == medicalTeam.Id);
        }

        public async Task<UpdateResult> UpdateManyAsync(FilterDefinition<MedicalTeam> filter, UpdateDefinition<MedicalTeam> update)
        {
            return await _medicalTeam.UpdateManyAsync(filter, update);
        }
        public async Task<IEnumerable<MedicalTeam>> GetAllAsync(Expression<Func<MedicalTeam, bool>> filter, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _medicalTeam.Find(filter, options).ToListAsync();
        }

    }
}

