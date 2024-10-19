using MediatR;
using Microsoft.AspNetCore.Http;
<<<<<<< HEAD
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Domain.MasterData.GeneralComplaints;
=======
using Spectra.Application.MasterData;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
>>>>>>> Admin-BackEnd
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Services
{
    public interface IGeneralComplaintService
    {
<<<<<<< HEAD
        Task<OperationResult<string>> CreateGeneralComplaints(CreateGeneralComplaintsCommand input);
        Task<OperationResult<Unit>> DeleteGeneralComplaints(string id);
        Task<OperationResult<IEnumerable<GeneralComplaint>>> GetAllGeneralComplaintss();
        Task<OperationResult<GeneralComplaint>> GetGeneralComplaintsById(string id);
        Task<OperationResult<Unit>> UpdateGeneralComplaints(string id, UpdateGeneralComplaintsCommand input);
        Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllGeneralComplaintNames();
        Task CreateFromExcel(IFormFile input);
=======
        Task CreateFromExcel(IFormFile input);
        Task<OperationResult<string>> CreateGeneralComplaints(CreateGeneralComplaintsCommand input);
        Task<OperationResult<Unit>> DeleteGeneralComplaints(string id);
        Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllGeneralComplaintNames();
        Task<OperationResult<IEnumerable<Domain.MasterData.GeneralComplaints.GeneralComplaint>>> GetAllGeneralComplaintss();
        Task<OperationResult<Domain.MasterData.GeneralComplaints.GeneralComplaint>> GetGeneralComplaintsById(string id);
        Task<OperationResult<Unit>> UpdateGeneralComplaints(string id, UpdateGeneralComplaintsCommand input);
>>>>>>> Admin-BackEnd
    }
}