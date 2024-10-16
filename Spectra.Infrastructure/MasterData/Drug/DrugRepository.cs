using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.Drug;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Common.Exceptions;
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
        private readonly IMongoCollection<DrugMD> _Drug;

        public DrugRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _Drug = database.GetCollection<DrugMD>("Drugs");
        }
        public async Task<DrugMD> GetByIdAsync(string id)
        {
            var entity = await _Drug.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("Drug", id);
            }

            return entity;
        }

        public async Task AddAsync(DrugMD Drug)
        {
            await _Drug.InsertOneAsync(Drug);
        }

        public async Task UpdateAsync(DrugMD Drug)
        {
            await _Drug.ReplaceOneAsync(c => c.Id == Drug.Id, Drug);
        }

        public async Task DeleteAsync(DrugMD Drug)
        {
            await _Drug.DeleteOneAsync(c => c.Id == Drug.Id);
        }

        public async Task<IEnumerable<DrugMD>> GetAllAsync()
        {

            return await _Drug.Find(p => true).ToListAsync();
        }
    }
}
