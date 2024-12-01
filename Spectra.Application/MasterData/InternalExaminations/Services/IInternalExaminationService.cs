using Spectra.Application.MasterData.InternalExaminations.Commands;
using Spectra.Application.MasterData.InternalExaminations.Queries;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.InternalExaminations.Services
{
    public interface IInternalExaminationService
    {
        Task<OperationResult> CreateInternalExamination(CreateInternalExaminationCommand input);
        Task<OperationResult> DeleteInternalExamination(string id);
        Task<OperationResult> GetAllInternalExamination(GetAllInternalExaminationQuery input);
        Task<OperationResult> GetInternalExaminationById(string id);
        Task<OperationResult> UpdateInternalExamination(UpdateInternalExaminationCommand input);
    }
}