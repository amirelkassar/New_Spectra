using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.GeneralComplaintsM;
using Spectra.Domain.MasterData.GeneralComplaints;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.MasterData.GeneralComplaint
{
    public class GeneralComplaintRepository : IGeneralComplaintRepository
    {
        private readonly IMongoCollection<GeneralComplaints> _GeneralComplaints;

        public GeneralComplaintRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _GeneralComplaints = database.GetCollection<GeneralComplaints>("GeneralComplaints");
        }
        public async Task<GeneralComplaints> GetByIdAsync(string id)
        {
            return await _GeneralComplaints.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(GeneralComplaints GeneralComplaint)
        {
            await _GeneralComplaints.InsertOneAsync(GeneralComplaint);
        }

        public async Task UpdateAsync(GeneralComplaints GeneralComplaint)
        {
            await _GeneralComplaints.ReplaceOneAsync(c => c.Id == GeneralComplaint.Id, GeneralComplaint);
        }

        public async Task DeleteAsync(GeneralComplaints GeneralComplaint)
        {
            await _GeneralComplaints.DeleteOneAsync(c => c.Id == GeneralComplaint.Id);
        }

        public async Task<IEnumerable<GeneralComplaints>> GetAllAsync()
        {

            return await _GeneralComplaints.Find(p => true).ToListAsync();
        }
    }
}
