using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.DiagnoseCommend;
using Spectra.Domain.MasterData.Diagnoses;
using System.Linq.Expressions;


namespace Spectra.Infrastructure.MasterData.Diagnoses
{
    public class DiagnoseRepository : IDiagnoseRepository
    {
        private readonly IMongoCollection<Diagnose> _diagnose;

        public DiagnoseRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _diagnose = database.GetCollection<Diagnose>("Diagnose");

        }
        public async Task<Diagnose> GetByIdAsync(string id)
        {
            return await _diagnose.Find(c => c.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddAsync(Diagnose diagnose)
        {


            await _diagnose.InsertOneAsync(diagnose);
        }

        public async Task UpdateAsync(Diagnose diagnose)
        {
            await _diagnose.ReplaceOneAsync(c => c.Id == diagnose.Id, diagnose);
        }

        public async Task DeleteAsync(Diagnose diagnose)
        {
            await _diagnose.DeleteOneAsync(c => c.Id == diagnose.Id);
        }

        public async Task<IEnumerable<Diagnose>> GetAllAsync(Expression<Func<Diagnose, bool>> filter = null, FindOptions options = null)
        {



            filter ??= _ => true;
            return await _diagnose.Find(filter, options).ToListAsync();

        }


    }
}
