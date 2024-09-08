using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.Drug;
using Spectra.Domain.MasterData.Drug;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.MasterData.Drug
{
    public class DrugRepository : IDrugRepository
    {
        private readonly IMongoCollection<Drugs> _Drug;

        public DrugRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _Drug = database.GetCollection<Drugs>("Drugs");
        }
        public async Task<Drugs> GetByIdAsync(string id)
        {
            return await _Drug.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(Drugs Drug)
        {
            await _Drug.InsertOneAsync(Drug);
        }

        public async Task UpdateAsync(Drugs Drug)
        {
            await _Drug.ReplaceOneAsync(c => c.Id == Drug.Id, Drug);
        }

        public async Task DeleteAsync(Drugs Drug)
        {
            await _Drug.DeleteOneAsync(c => c.Id == Drug.Id);
        }

        public async Task<IEnumerable<Drugs>> GetAllAsync()
        {

            return await _Drug.Find(p => true).ToListAsync();
        }
    }
}
