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
	public class GetCountryByIdQueryHandler : IRequestHandler<GetCountryByIdQuery, CountryData>
	{
		private readonly ICountryRepository _countryRepository;

		public GetCountryByIdQueryHandler(ICountryRepository countryRepository)
		{
			_countryRepository = countryRepository;
		}

		public async Task<CountryData> Handle(GetCountryByIdQuery request, CancellationToken cancellationToken)
		{
			var country = await _countryRepository.GetByIdAsync(request.Id);
			if (country == null) return null;

			return new CountryData
			{
				Name = country.EnName,
				Flag = country.Flag,
				Iso2 = country.Id,
			};
		}
	}

}
