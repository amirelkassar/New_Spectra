using MongoDB.Driver;
using System.Linq.Expressions;

namespace Spectra.Application.MasterData.GeneralComplaintsM
{
    public interface IGeneralComplaintRepository
    {
        Task AddAsync(Domain.MasterData.GeneralComplaints.GeneralComplaint GeneralComplaint);
        Task DeleteAsync(Domain.MasterData.GeneralComplaints.GeneralComplaint GeneralComplaint);
        Task<IEnumerable<Domain.MasterData.GeneralComplaints.GeneralComplaint>> GetAllAsync(Expression<Func<Domain.MasterData.GeneralComplaints.GeneralComplaint, bool>> filter = null, FindOptions options = null);
        Task<Domain.MasterData.GeneralComplaints.GeneralComplaint> GetByIdAsync(string id);
        Task UpdateAsync(Domain.MasterData.GeneralComplaints.GeneralComplaint GeneralComplaint);
    }
}