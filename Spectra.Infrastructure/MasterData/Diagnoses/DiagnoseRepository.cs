using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.DiagnoseCommend;
using Spectra.Domain.MasterData.Diagnoses;

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

        public async Task AddAsync(Diagnose diagnose)
        {

          
            await _Diagnose.InsertOneAsync(diagnose);
        }

        public async Task UpdateAsync(Diagnose diagnose)
        {
            await _Diagnose.ReplaceOneAsync(c => c.Id == diagnose.Id, diagnose);
        }

        public async Task DeleteAsync(Diagnose diagnose)
        {
            await _Diagnose.DeleteOneAsync(c => c.Id == diagnose.Id);
        }

        public async Task<IEnumerable<Diagnose>> GetAllAsync()
        {

            return await _Diagnose.Find(p => true).ToListAsync();
        }

     
    }
}
