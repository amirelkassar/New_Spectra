using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Services
{
    public interface IMedicalTestsAndXrayService
    {
        Task<string> CreateMedicalTestsAndXray(CreateMedicalTestsAndXraysCommand input);
        Task DeleteMedicalTestsAndXray(string id);
        Task<IEnumerable<MedicalTestsAndXrays>> GetAllMedicalTestsAndXray();
        Task<MedicalTestsAndXrays> GetMedicalTestsAndXrayById(string id);
        Task UpdateMedicalTestsAndXray(string id, UpdateMedicalTestsAndXraysCommand input);
    }
}