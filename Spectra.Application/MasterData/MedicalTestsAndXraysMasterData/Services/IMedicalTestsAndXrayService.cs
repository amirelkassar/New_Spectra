using MediatR;
using Microsoft.AspNetCore.Http;
<<<<<<< HEAD
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
=======
using Spectra.Application.MasterData;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
>>>>>>> Admin-BackEnd
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Services
{
    public interface IMedicalTestsAndXrayService
<<<<<<< HEAD
        {
        Task<OperationResult<string>> CreateMedicalTestsAndXray(CreateMedicalTestsAndXraysCommand input);
        Task<OperationResult<Unit>> DeleteMedicalTestsAndXray(string id);
        Task<OperationResult<IEnumerable<MedicalTestsAndXray>>> GetAllMedicalTestsAndXray();
        Task<OperationResult<MedicalTestsAndXray>> GetMedicalTestsAndXrayById(string id);
        Task<OperationResult<Unit>> UpdateMedicalTestsAndXray(string id, UpdateMedicalTestsAndXraysCommand input);
        Task CreateFromExcel(IFormFile input);
        Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllMedicalTestsAndXrayNames();

=======
    {
        Task CreateFromExcel(IFormFile input);
        Task<OperationResult<string>> CreateMedicalTestsAndXray(CreateMedicalTestsAndXraysCommand input);
        Task<OperationResult<Unit>> DeleteMedicalTestsAndXray(string id);
        Task<OperationResult<IEnumerable<Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray>>> GetAllMedicalTestsAndXray();
        Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllMedicalTestsAndXrayNames();
        Task<OperationResult<Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray>> GetMedicalTestsAndXrayById(string id);
        Task<OperationResult<Unit>> UpdateMedicalTestsAndXray(string id, UpdateMedicalTestsAndXraysCommand input);
>>>>>>> Admin-BackEnd
    }
}