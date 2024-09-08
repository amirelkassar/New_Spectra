using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.DiagnoseCommend;
using Spectra.Domain.MasterData.Diagnoses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.MasterData.Diagnoses
{
    public class DiagnoseRepository : IDiagnoseRepository
    {
        private readonly IMongoCollection<Diagnose> _Diagnose;

        public DiagnoseRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _Diagnose = database.GetCollection<Diagnose>("Diagnose");
        }
        public async Task<Diagnose> GetByIdAsync(string id)
        {
            return await _Diagnose.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(Diagnose Diagnose)
        {
            await _Diagnose.InsertOneAsync(Diagnose);
        }

        public async Task UpdateAsync(Diagnose Diagnose)
        {
            await _Diagnose.ReplaceOneAsync(c => c.Id == Diagnose.Id, Diagnose);
        }

        public async Task DeleteAsync(Diagnose Diagnose)
        {
            await _Diagnose.DeleteOneAsync(c => c.Id == Diagnose.Id);
        }

        public async Task<IEnumerable<Diagnose>> GetAllAsync()
        {

            return await _Diagnose.Find(p => true).ToListAsync();
        }
    }
}
