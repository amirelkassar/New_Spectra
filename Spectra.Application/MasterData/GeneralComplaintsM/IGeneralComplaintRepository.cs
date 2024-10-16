using Spectra.Domain.MasterData.GeneralComplaints;

namespace Spectra.Application.MasterData.GeneralComplaintsM
{
    public interface IGeneralComplaintRepository
    {
        Task AddAsync(GeneralComplaint GeneralComplaint);
        Task DeleteAsync(GeneralComplaint GeneralComplaint);
        Task<IEnumerable<GeneralComplaint>> GetAllAsync();
        Task<GeneralComplaint> GetByIdAsync(string id);
        Task UpdateAsync(GeneralComplaint GeneralComplaint);
    }
}