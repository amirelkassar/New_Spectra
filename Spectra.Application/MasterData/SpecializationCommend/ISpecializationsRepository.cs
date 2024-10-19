<<<<<<< HEAD
﻿using Spectra.Domain.MasterData.DoctorsSpecialization;


=======
﻿using MongoDB.Driver;
using System.Linq.Expressions;
>>>>>>> Admin-BackEnd

namespace Spectra.Application.MasterData.SpecializationCommend
{
    public interface ISpecializationsRepository
    {
<<<<<<< HEAD
        Task AddAsync(Specialization Specializations);
        Task DeleteAsync(Specialization Specializations);
        Task<IEnumerable<Specialization>> GetAllAsync();
        Task<Specialization> GetByIdAsync(string id);
        Task UpdateAsync(Specialization Specializations);
        Task<Specialization> GetByNameAsync(string name);

        Task<IEnumerable<string>> GetAllNamesAsync();

=======
        Task AddAsync(Domain.MasterData.DoctorsSpecialization.Specialization Specializations);
        Task DeleteAsync(Domain.MasterData.DoctorsSpecialization.Specialization Specializations);
        Task<IEnumerable<Domain.MasterData.DoctorsSpecialization.Specialization>> GetAllAsync(Expression<Func<Domain.MasterData.DoctorsSpecialization.Specialization, bool>> filter = null, FindOptions options = null);
        Task<Domain.MasterData.DoctorsSpecialization.Specialization> GetByIdAsync(string id);
        Task<Domain.MasterData.DoctorsSpecialization.Specialization> GetByNameAsync(string name);
        Task UpdateAsync(Domain.MasterData.DoctorsSpecialization.Specialization Specializations);
>>>>>>> Admin-BackEnd
    }
}