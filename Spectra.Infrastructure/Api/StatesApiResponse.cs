using Spectra.Application.Countries.DTOs;
using Spectra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Api
{
    public class StatesApiResponse
	{
		public bool Error { get; set; }
		public string Msg { get; set; }
		public List<CountryStatesData> Data { get; set; }
	}
}
