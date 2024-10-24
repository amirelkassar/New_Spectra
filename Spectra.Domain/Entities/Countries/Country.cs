﻿using Spectra.Domain.Entities.States;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Entities.Countries
{
    public class Country
    {
		public string Id { get; set; }
		public string EnName { get; set; }
		public string ArName { get; set; }
		public string Flag { get; set; }
		public List<State> States { get; set; } = new List<State>();
	}
}
