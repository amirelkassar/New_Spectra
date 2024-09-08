using Spectra.Application.MasterData.ServicesMD.Commands;
using Spectra.Domain.MasterData.ServicesMD;

namespace Spectra.Infrastructure.MasterData.Services
{
    public interface IServiceMDService
    {
        Task<string> CreateServicesM(CreateServicesMCommand input);
        Task DeleteMedicalTestsAndXray(string id);
        Task<IEnumerable<MasterDataServices>> GetAllServicesM();
        Task<MasterDataServices> GetServicesMById(string id);
        Task Updateservices(string id, UpdateServicesMCommand input);
    }
}