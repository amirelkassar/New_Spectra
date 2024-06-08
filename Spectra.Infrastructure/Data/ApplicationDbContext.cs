using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MongoDbGenericRepository;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppRole;
using Spectra.Domain.AppUser;
using Spectra.Domain.Clients;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Data
{
	public class ApplicationDbContext : DbContext, IApplicationDbContext
	{
		public ApplicationDbContext(DbContextOptions options) : base(options)
		{

		}

		public DbSet<Client> Clients { get ; set ; }

	
	}
}
