using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Application.MasterData.GeneralComplaintsM.Queries;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Services
{
    public interface IGeneralComplaintService
    {
        Task CreateFromExcel(IFormFile input);
        Task<OperationResult> CreateGeneralComplaints(CreateGeneralComplaintsCommand input);
        Task<OperationResult> DeleteGeneralComplaints(string id);
        Task<OperationResult> GetAllGeneralComplaintss(GetAllGeneralComplaintsQuery input);
        Task<OperationResult> GetGeneralComplaintsById(string id);
        Task<OperationResult> UpdateGeneralComplaints(UpdateGeneralComplaintsCommand input);
    }
}