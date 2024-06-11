using MediatR;
using Spectra.Application.Countries.Cities.DTOs;
using Spectra.Application.Interfaces.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Countries.Cities.Queries
{
	public class GetCitiesByStateIdQuery : IRequest<IEnumerable<CityData>>
	{
		public string StateId { get; set; }
	}

	public class GetCitiesByStateIdQueryHandler : IRequestHandler<GetCitiesByStateIdQuery, IEnumerable<CityData>>
	{
		private readonly ICountryRepository _countryRepository;

		public GetCitiesByStateIdQueryHandler(ICountryRepository countryRepository)
		{
			_countryRepository = countryRepository;
		}

		public async Task<IEnumerable<CityData>> Handle(GetCitiesByStateIdQuery request, CancellationToken cancellationToken)
		{
			var stateId = request.StateId;

			var state = await _countryRepository.GetStateByIdAsync(stateId);

			if (state == null)
			{
				return Enumerable.Empty<CityData>();
			}

			// Map cities to DTOs
			var cityDataList = state.Cities.Select(city => new CityData
			{
				Id = city.Id,
				Name = city.EnName,
			});

			return cityDataList;
		}
	}
}
