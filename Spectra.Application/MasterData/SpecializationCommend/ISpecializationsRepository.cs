using Spectra.Domain.MasterData.DoctorsSpecialization;



namespace Spectra.Application.MasterData.SpecializationCommend
{
    public interface ISpecializationsRepository
    {
        Task AddAsync(Specialization Specializations);
        Task DeleteAsync(Specialization Specializations);
        Task<IEnumerable<Specialization>> GetAllAsync();
        Task<Specialization> GetByIdAsync(string id);
        Task UpdateAsync(Specialization Specializations);
        Task<Specialization> GetByNameAsync(string name);

        Task<IEnumerable<string>> GetAllNamesAsync();

    }
}