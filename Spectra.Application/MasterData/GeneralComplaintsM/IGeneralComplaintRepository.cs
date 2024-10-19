<<<<<<< HEAD
﻿using Spectra.Domain.MasterData.GeneralComplaints;
=======
﻿using MongoDB.Driver;
using System.Linq.Expressions;
>>>>>>> Admin-BackEnd

namespace Spectra.Application.MasterData.GeneralComplaintsM
{
    public interface IGeneralComplaintRepository
    {
<<<<<<< HEAD
        Task AddAsync(GeneralComplaint GeneralComplaint);
        Task DeleteAsync(GeneralComplaint GeneralComplaint);
        Task<IEnumerable<GeneralComplaint>> GetAllAsync();
        Task<GeneralComplaint> GetByIdAsync(string id);
        Task UpdateAsync(GeneralComplaint GeneralComplaint);
=======
        Task AddAsync(Domain.MasterData.GeneralComplaints.GeneralComplaint GeneralComplaint);
        Task DeleteAsync(Domain.MasterData.GeneralComplaints.GeneralComplaint GeneralComplaint);
        Task<IEnumerable<Domain.MasterData.GeneralComplaints.GeneralComplaint>> GetAllAsync(Expression<Func<Domain.MasterData.GeneralComplaints.GeneralComplaint, bool>> filter = null, FindOptions options = null);
        Task<Domain.MasterData.GeneralComplaints.GeneralComplaint> GetByIdAsync(string id);
        Task UpdateAsync(Domain.MasterData.GeneralComplaints.GeneralComplaint GeneralComplaint);
>>>>>>> Admin-BackEnd
    }
}