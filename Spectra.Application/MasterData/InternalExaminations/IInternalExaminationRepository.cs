using MongoDB.Driver;
using Spectra.Domain.MasterData.InternalExaminations;
using System.Linq.Expressions;

namespace Spectra.Application.MasterData.InternalExaminations
{
    public interface IInternalExaminationRepository
    {
        Task AddAsync(InternalExamination internalExamination);
        Task DeleteAsync(InternalExamination internalExamination);

        Task<IEnumerable<InternalExamination>> GetAllAsync(Expression<Func<InternalExamination, bool>> filter = null, FindOptions options = null);
        Task<InternalExamination> GetByIdAsync(string id);
        Task UpdateAsync(InternalExamination internalExamination);
    }
}