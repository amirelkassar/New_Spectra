using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Domain.MasterData.GeneralComplaints;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Services
{
    public interface IGeneralComplaintService
    {
        Task<OperationResult<string>> CreateGeneralComplaints(CreateGeneralComplaintsCommand input);
        Task<OperationResult<Unit>> DeleteGeneralComplaints(string id);
        Task<OperationResult<IEnumerable<GeneralComplaint>>> GetAllGeneralComplaintss();
        Task<OperationResult<GeneralComplaint>> GetGeneralComplaintsById(string id);
        Task<OperationResult<Unit>> UpdateGeneralComplaints(string id, UpdateGeneralComplaintsCommand input);
        Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllGeneralComplaintNames();
        Task CreateFromExcel(IFormFile input);
    }
}