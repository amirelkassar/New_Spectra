using MediatR;
using Spectra.Application.MasterData;
using Spectra.Application.MasterData.Sections.Commands;
using Spectra.Application.MasterData.Sections.Dto;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Service
{
    public interface ISectionsServices
    {
        Task<OperationResult<string>> CreateSection(CreateSectionsCommand input);
        Task<OperationResult<Unit>> DeleteSection(string id);
        Task<OperationResult<IEnumerable<SectionDto>>> GetAllSection();
        Task<OperationResult<IEnumerable<GetAllDoctorsDto>>> GetAllDoctors();

        Task<OperationResult<List<BassMasterDataDto>>> GetAllSectionNames();
        Task<OperationResult<Section>> GetSectionById(string id);
        Task<OperationResult<Unit>> UpdateSection(string id, UpdateSectionsCommand input);
    }
}