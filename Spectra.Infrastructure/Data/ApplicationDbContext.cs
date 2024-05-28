using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Spectra.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Data
{
	public class ApplicationDbContext : IdentityDbContext, IApplicationDbContext
	{
		public ApplicationDbContext(DbContextOptions options) : base(options)
		{

		}

	
	}
}
