using MediatR;
using Spectra.Application.Countries.DTOs;
using Spectra.Application.Countries.Queries;
using Spectra.Application.Interfaces.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Countries.Handlers
{
	public class GetAllCountriesQueryHandler : IRequestHandler<GetAllCountriesQuery, IEnumerable<CountryData>>
	{
		private readonly ICountryRepository _countryRepository;

		public GetAllCountriesQueryHandler(ICountryRepository countryRepository)
		{
			_countryRepository = countryRepository;
		}

		public async Task<IEnumerable<CountryData>> Handle(GetAllCountriesQuery request, CancellationToken cancellationToken)
		{
			var countries = await _countryRepository.GetAllAsync();
			return countries.Select(c => new CountryData
			{
				Name = c.EnName,
				Flag = c.Flag,
				Iso2 = c.Id,
			});
		}
	}
}
