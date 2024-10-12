using Spectra.Domain.MasterData.MedicalTestsAndXrays;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData
{
    public interface IMedicalTestsAndXrayRepository
    {
        Task AddAsync(MedicalTestsAndXray medicalTestsAndXrays);
        Task DeleteAsync(MedicalTestsAndXray medicalTestsAndXrays);
        Task<IEnumerable<MedicalTestsAndXray>> GetAllAsync();
        Task<MedicalTestsAndXray> GetByIdAsync(string id);
        Task UpdateAsync(MedicalTestsAndXray medicalTestsAndXrays);
    }
}