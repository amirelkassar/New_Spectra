using MongoDB.Driver;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using System.Linq.Expressions;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData
{
    public interface IMedicalTestsAndXrayRepository
    {
        Task AddAsync(MedicalTestsAndXray medicalTestsAndXrays);
        Task DeleteAsync(MedicalTestsAndXray medicalTestsAndXrays);
        //Task<IEnumerable<MedicalTestsAndXray>> GetAllAsync();
        Task<IEnumerable<MedicalTestsAndXray>> GetAllAsync(Expression<Func<MedicalTestsAndXray, bool>> filter = null, FindOptions options = null);
        Task<MedicalTestsAndXray> GetByIdAsync(string id);
        Task UpdateAsync(MedicalTestsAndXray medicalTestsAndXrays);
    }
}