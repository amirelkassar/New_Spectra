using Spectra.Domain.MasterData.Diagnoses;

namespace Spectra.Application.MasterData.DiagnoseCommend
{
    public interface IDiagnoseRepository
    {
        Task AddAsync(Diagnose Diagnose);

        Task DeleteAsync(Diagnose Diagnose);
        Task<IEnumerable<Diagnose>> GetAllAsync();
        Task<Diagnose> GetByIdAsync(string id);
        Task UpdateAsync(Diagnose Diagnose);
    }
}