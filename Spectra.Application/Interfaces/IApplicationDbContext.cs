﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Interfaces
{
	public interface IApplicationDbContext
	{
		Task<int> SaveChangesAsync();
	}
}
