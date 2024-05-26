using Microsoft.EntityFrameworkCore;
using Spectra.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Data
{
	public class ApplicationDbContext : DbContext , IApplicationDbContext
	{
		public ApplicationDbContext(DbContextOptions options) : base(options)
		{

		}

		public async Task<TEntity> GetById<TEntity>(string id) where TEntity : class
		{
			return await Set<TEntity>().FindAsync(id);
		}

		public async Task<TEntity> Add<TEntity>(TEntity entity) where TEntity : class
		{
			await Set<TEntity>().AddAsync(entity);
			await SaveChangesAsync();
			return entity;
		}

		public async Task<TEntity> Update<TEntity>(TEntity entity) where TEntity : class
		{
			Set<TEntity>().Update(entity);
			await SaveChangesAsync();
			return entity;
		}

		public async Task Delete<TEntity>(TEntity entity) where TEntity : class
		{
			Set<TEntity>().Remove(entity);
			await SaveChangesAsync();
		}

	}
}
