using MediatR;
using Spectra.Application.States.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.States.Queries
{
	public class GetStatesByCountryIdQuery : IRequest<IEnumerable<StateData>>
	{
		public string CountryId { get; set; }
	}
}
