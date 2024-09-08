using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Domain.MasterData.GeneralComplaints;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Services
{
    public interface IGeneralComplaintService
    {
        Task<string> CreateGeneralComplaints(CreateGeneralComplaintsCommand input);
        Task DeleteGeneralComplaints(string id);
        Task<IEnumerable<GeneralComplaints>> GetAllGeneralComplaintss();
        Task<GeneralComplaints> GetGeneralComplaintsById(string id);
        Task UpdateGeneralComplaints(string id, UpdateGeneralComplaintsCommand input);
    }
}