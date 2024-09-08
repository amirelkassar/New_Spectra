using Spectra.Domain.MasterData.GeneralComplaints;

namespace Spectra.Application.MasterData.GeneralComplaintsM
{
    public interface IGeneralComplaintRepository
    {
        Task AddAsync(GeneralComplaints GeneralComplaint);
        Task DeleteAsync(GeneralComplaints GeneralComplaint);
        Task<IEnumerable<GeneralComplaints>> GetAllAsync();
        Task<GeneralComplaints> GetByIdAsync(string id);
        Task UpdateAsync(GeneralComplaints GeneralComplaint);
    }
}