<<<<<<< HEAD
﻿using Spectra.Domain.MasterData.ServicesMD;

namespace Spectra.Infrastructure.MasterData.ServicesMD
=======
﻿using MongoDB.Driver;
using Spectra.Domain.MasterData.ServicesMD;
using System.Linq.Expressions;

namespace Spectra.Application.MasterData.ServicesMD
>>>>>>> Admin-BackEnd
{
    public interface IServiceMDRepository
    {
        Task AddAsync(MasterDataServices masterDataServices);
        Task DeleteAsync(MasterDataServices masterDataServices);
<<<<<<< HEAD
        Task<IEnumerable<MasterDataServices>> GetAllAsync();
        Task<MasterDataServices> GetByIdAsync(string id);
        Task UpdateAsync(MasterDataServices masterDataServices);
        Task<IEnumerable<MasterDataServices>> GetAllNameAndTermsAndConditions();
=======
        Task<IEnumerable<MasterDataServices>> GetAllAsync(Expression<Func<MasterDataServices, bool>> filter = null, FindOptions options = null);
        Task<IEnumerable<MasterDataServices>> GetAllNameAndTermsAndConditions();
        Task<MasterDataServices> GetByIdAsync(string id);
        Task UpdateAsync(MasterDataServices masterDataServices);
>>>>>>> Admin-BackEnd
    }
}