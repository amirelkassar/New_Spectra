using Spectra.Domain.MasterData.MedicalTestsAndXrays;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData
{
    public interface IMedicalTestsAndXrayRepository
    {
        Task AddAsync(MedicalTestsAndXrays medicalTestsAndXrays);
        Task DeleteAsync(MedicalTestsAndXrays medicalTestsAndXrays);
        Task<IEnumerable<MedicalTestsAndXrays>> GetAllAsync();
        Task<MedicalTestsAndXrays> GetByIdAsync(string id);
        Task UpdateAsync(MedicalTestsAndXrays medicalTestsAndXrays);
    }
}