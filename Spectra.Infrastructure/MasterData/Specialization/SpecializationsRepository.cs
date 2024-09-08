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
        private readonly IMongoCollection<Specializations> _specializations;

        public SpecializationsRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _specializations = database.GetCollection<Specializations>("Specializations");
        }
        public async Task<Specializations> GetByIdAsync(string id)
        {
            return await _specializations.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(Specializations Specializations)
        {
            await _specializations.InsertOneAsync(Specializations);
        }

        public async Task UpdateAsync(Specializations Specializations)
        {
            await _specializations.ReplaceOneAsync(c => c.Id == Specializations.Id, Specializations);
        }

        public async Task DeleteAsync(Specializations Specializations)
        {
            await _specializations.DeleteOneAsync(c => c.Id == Specializations.Id);
        }

        public async Task<IEnumerable<Specializations>> GetAllAsync()
        {

            return await _specializations.Find(p => true).ToListAsync();
        }
    }
}
