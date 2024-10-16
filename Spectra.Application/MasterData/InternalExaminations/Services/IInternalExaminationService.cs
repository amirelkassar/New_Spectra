using MediatR;
using Spectra.Application.MasterData.InternalExaminations.Commands;
using Spectra.Domain.MasterData.InternalExaminations;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.InternalExaminations.Services

{
    public interface IInternalExaminationService
    {
        Task<OperationResult<string>> CreateInternalExamination(CreateInternalExaminationCommand input);
        Task<OperationResult<Unit>> DeleteInternalExamination(string id);
        Task<OperationResult<IEnumerable<InternalExamination>>> GetAllInternalExamination();
        Task<OperationResult<InternalExamination>> GetInternalExaminationById(string id);
        Task<OperationResult<Unit>> UpdateInternalExamination(string id, UpdateInternalExaminationCommand input);
    }
}