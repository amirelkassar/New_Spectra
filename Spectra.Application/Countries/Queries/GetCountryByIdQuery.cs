using MediatR;
using Spectra.Application.Countries.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Countries.Queries
{
	public class GetCountryByIdQuery : IRequest<CountryData>
	{
		public string Id { get; set; }
	}
}
