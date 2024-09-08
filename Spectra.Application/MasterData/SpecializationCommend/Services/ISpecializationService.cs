using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.SpecializationCommend.Commands;

namespace Spectra.Application.MasterData.SpecializationCommend.Services
{
    public interface ISpecializationService
    {
        Task<string> CreateSpecialization(CreateSpecializationCommand input);
        Task DeleteSpecialization(string id);
        Task<IEnumerable<Domain.MasterData.DoctorsSpecialization.Specializations>> GetAllSpecializations();
        Task<Domain.MasterData.DoctorsSpecialization.Specializations> GetSpecializationById(string id);
        Task UpdateSpecialization(string id, UpdateSpecializationCommand input);
        Task CreateFromExcel(IFormFile input);
    }
}