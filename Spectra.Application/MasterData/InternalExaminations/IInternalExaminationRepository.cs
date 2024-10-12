using Spectra.Domain.MasterData.InternalExaminations;

namespace Spectra.Application.MasterData.InternalExaminations
{
    public interface IInternalExaminationRepository
    {
        Task AddAsync(InternalExamination internalExamination);
        Task DeleteAsync(InternalExamination internalExamination);
        Task<IEnumerable<InternalExamination>> GetAllAsync();
        Task<InternalExamination> GetByIdAsync(string id);
        Task UpdateAsync(InternalExamination internalExamination);
    }
}