using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.MasterData.MedicalTestsAndXray
{
    public class MedicalTestsAndXrayRepository : IMedicalTestsAndXrayRepository
    {

        private readonly IMongoCollection<MedicalTestsAndXrays> _medicalTestsAndXrays;

        public MedicalTestsAndXrayRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _medicalTestsAndXrays = database.GetCollection<MedicalTestsAndXrays>("MedicalTestsAndXrays");
        }
        public async Task<MedicalTestsAndXrays> GetByIdAsync(string id)
        {
            return await _medicalTestsAndXrays.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(MedicalTestsAndXrays medicalTestsAndXrays)
        {
            await _medicalTestsAndXrays.InsertOneAsync(medicalTestsAndXrays);
        }

        public async Task UpdateAsync(MedicalTestsAndXrays medicalTestsAndXrays)
        {
            await _medicalTestsAndXrays.ReplaceOneAsync(c => c.Id == medicalTestsAndXrays.Id, medicalTestsAndXrays);
        }

        public async Task DeleteAsync(MedicalTestsAndXrays medicalTestsAndXrays)
        {
            await _medicalTestsAndXrays.DeleteOneAsync(c => c.Id == medicalTestsAndXrays.Id);
        }

        public async Task<IEnumerable<MedicalTestsAndXrays>> GetAllAsync()
        {

            return await _medicalTestsAndXrays.Find(p => true).ToListAsync();
        }
    }
}

