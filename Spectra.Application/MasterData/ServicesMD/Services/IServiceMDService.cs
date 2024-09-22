using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Application.MasterData.ServicesMD.Commands;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.MasterData.Services
{
    public interface IServiceMDService
    {

        Task<OperationResult<string>> CreateServicesM(CreateServicesMCommand input);
        Task<OperationResult<Unit>> DeleteMedicalTestsAndXray(string id);
        Task<OperationResult<IEnumerable<MasterDataServices>>> GetAllServicesM();
        Task<OperationResult<MasterDataServices>> GetServicesMById(string id);
        Task<OperationResult<Unit>> Updateservices(string id, UpdateServicesMCommand input);
        Task<OperationResult<IEnumerable<ServicesDto>>> GetAllNameAndTermsAndConditions();
        //Task CreateFromExcel(IFormFile input);
    }
}