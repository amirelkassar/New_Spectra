using System.Linq.Expressions;
using MongoDB.Driver;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData
{
    public interface IMedicalTestsAndXrayRepository
    {
        Task AddAsync(MedicalTestAndXray medicalTestsAndXrays);
        Task DeleteAsync(MedicalTestAndXray medicalTestsAndXrays);
        //Task<IEnumerable<MedicalTestsAndXray>> GetAllAsync();
        Task<IEnumerable<MedicalTestAndXray>> GetAllAsync(Expression<Func<MedicalTestAndXray, bool>> filter = null, FindOptions options = null);
        Task<MedicalTestAndXray> GetByIdAsync(string id);
        Task UpdateAsync(MedicalTestAndXray medicalTestsAndXrays);
    }
}