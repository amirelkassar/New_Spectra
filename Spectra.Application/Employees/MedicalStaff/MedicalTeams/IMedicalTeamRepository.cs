using MongoDB.Driver;
using Spectra.Domain.MedicalTeam;
using System.Linq.Expressions;

namespace Spectra.Application.Employees.MedicalTeams
{
    public interface IMedicalTeamRepository
    {
        Task AddAsync(MedicalTeam medicalTeam);
        Task DeleteAsync(MedicalTeam medicalTeam);
        Task<IEnumerable<MedicalTeam>> GetAllAsync(Expression<Func<MedicalTeam, bool>> filter, FindOptions options = null);
        Task<MedicalTeam> GetByIdAsync(string id);
        Task UpdateAsync(MedicalTeam medicalTeam);
        Task<UpdateResult> UpdateManyAsync(FilterDefinition<MedicalTeam> filter, UpdateDefinition<MedicalTeam> update);
    }
}