using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.SpecializationCommend;

using Spectra.Domain.MasterData.DoctorsSpecialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.MasterData.Specialization
{
    public class SpecializationsRepository : ISpecializationsRepository
    {
        private readonly IMongoCollection<Domain.MasterData.DoctorsSpecialization.Specialization> _specializations;

        public SpecializationsRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _specializations = database.GetCollection<Domain.MasterData.DoctorsSpecialization.Specialization>("Specializations");
        }
        public async Task<Domain.MasterData.DoctorsSpecialization.Specialization> GetByIdAsync(string id)
        {
            return await _specializations.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(Domain.MasterData.DoctorsSpecialization.Specialization Specializations)
        {
            await _specializations.InsertOneAsync(Specializations);
        }

        public async Task UpdateAsync(Domain.MasterData.DoctorsSpecialization.Specialization Specializations)
        {
            await _specializations.ReplaceOneAsync(c => c.Id == Specializations.Id, Specializations);
        }

        public async Task DeleteAsync(Domain.MasterData.DoctorsSpecialization.Specialization Specializations)
        {
            await _specializations.DeleteOneAsync(c => c.Id == Specializations.Id);
        }

        public async Task<IEnumerable<Domain.MasterData.DoctorsSpecialization.Specialization>> GetAllAsync()
        {
            return await _specializations.Find(p => true).ToListAsync();
           
        }
        public async Task<Domain.MasterData.DoctorsSpecialization.Specialization> GetByNameAsync(string name)
        {
            return await _specializations.Find(c => c.Name == name).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<string>> GetAllNamesAsync()
        {
            var projection = Builders<Domain.MasterData.DoctorsSpecialization.Specialization>.Projection.Expression(s => s.Name);

            return await _specializations.Find(_ => true).Project(projection).ToListAsync();


        }
    }
}
