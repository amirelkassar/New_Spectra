using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Services
{
    public interface IGeneralComplaintService
    {
        Task CreateFromExcel(IFormFile input);
        Task<OperationResult<string>> CreateGeneralComplaints(CreateGeneralComplaintsCommand input);
        Task<OperationResult<Unit>> DeleteGeneralComplaints(string id);
        Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllGeneralComplaintNames();
        Task<OperationResult<IEnumerable<Domain.MasterData.GeneralComplaints.GeneralComplaint>>> GetAllGeneralComplaintss();
        Task<OperationResult<Domain.MasterData.GeneralComplaints.GeneralComplaint>> GetGeneralComplaintsById(string id);
        Task<OperationResult<Unit>> UpdateGeneralComplaints(string id, UpdateGeneralComplaintsCommand input);
    }
}