using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Interfaces
{
	public interface IApplicationDbContext
	{
		Task<TEntity> GetById<TEntity>(string id) where TEntity : class;
		Task<TEntity> Add<TEntity>(TEntity entity) where TEntity : class;
		Task<TEntity> Update<TEntity>(TEntity entity) where TEntity : class;
		Task Delete<TEntity>(TEntity entity) where TEntity : class;
	}
}
