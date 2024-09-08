using Spectra.Domain.MasterData.DoctorsSpecialization;



namespace Spectra.Application.MasterData.SpecializationCommend
{
    public interface ISpecializationsRepository
    {
        Task AddAsync(Specializations Specializations);
        Task DeleteAsync(Specializations Specializations);
        Task<IEnumerable<Specializations>> GetAllAsync();
        Task<Specializations> GetByIdAsync(string id);
        Task UpdateAsync(Specializations Specializations);
    }
}