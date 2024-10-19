<<<<<<< HEAD
﻿using Spectra.Domain.MasterData.InternalExaminations;
=======
﻿using MongoDB.Driver;
using Spectra.Domain.MasterData.InternalExaminations;
using System.Linq.Expressions;
>>>>>>> Admin-BackEnd

namespace Spectra.Application.MasterData.InternalExaminations
{
    public interface IInternalExaminationRepository
    {
        Task AddAsync(InternalExamination internalExamination);
        Task DeleteAsync(InternalExamination internalExamination);
<<<<<<< HEAD
        Task<IEnumerable<InternalExamination>> GetAllAsync();
=======

        Task<IEnumerable<InternalExamination>> GetAllAsync(Expression<Func<InternalExamination, bool>> filter = null, FindOptions options = null);
>>>>>>> Admin-BackEnd
        Task<InternalExamination> GetByIdAsync(string id);
        Task UpdateAsync(InternalExamination internalExamination);
    }
}