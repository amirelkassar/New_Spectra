using Spectra.Application.MasterData.ServicesMD.Commands;
using Spectra.Application.MasterData.ServicesMD.Queries;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.ServicesMD.Services
{
    public interface IServiceMDService
    {
        Task<OperationResult> CreateServicesM(CreateServicesMCommand input);
        Task<OperationResult> DeleteMedicalTestsAndXray(string id);
        Task<OperationResult> GetAllForListing(GetAllServiceForListingQuery input);
        Task<OperationResult> GetAllServices(GetAllServicesMDQuery input);
        Task<OperationResult> GetServicesMById(string id);
        Task<OperationResult> Updateservices(UpdateServicesMCommand input);
    }
}