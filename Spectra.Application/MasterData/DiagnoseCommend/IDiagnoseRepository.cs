using System.Linq.Expressions;
using MongoDB.Driver;
using Spectra.Domain.MasterData.Diagnoses;

namespace Spectra.Application.MasterData.DiagnoseCommend
{
    public interface IDiagnoseRepository
    {
        Task AddAsync(Diagnose Diagnose);

        Task DeleteAsync(Diagnose Diagnose);
        Task<IEnumerable<Diagnose>> GetAllAsync(Expression<Func<Diagnose, bool>> filter = null, FindOptions options = null);
        Task<Diagnose> GetByIdAsync(string id);
        Task UpdateAsync(Diagnose Diagnose);
    }
}