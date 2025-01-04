using Spectra.Application.MasterData.Sections.Commands;
using Spectra.Application.MasterData.Sections.Queries;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Service
{
    public interface ISectionsService
    {
        Task<OperationResult> CreateSection(CreateSectionsCommand input);
        Task<OperationResult> DeleteSection(DeleteSectionsCommand input);
        Task<OperationResult> GetAllSection(GetAllSectionsQuery input);
        Task<OperationResult> GetSectionById(string id);
        Task<OperationResult> UpdateSection(UpdateSectionsCommand input);
    }
}