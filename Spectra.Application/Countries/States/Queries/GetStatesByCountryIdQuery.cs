using MediatR;
using Spectra.Application.Countries.States.DTOs;
using Spectra.Domain.Entities.Countries;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Spectra.Application.Countries.States.Queries
{
    public class GetStatesByCountryIdQuery : IRequest<IEnumerable<StateData>>
	{
		public string CountryId { get; set; }

		public class GetStatesByCountryIdQueryHandler : IRequestHandler<GetStatesByCountryIdQuery, IEnumerable<StateData>>
		{
			private readonly ICountryRepository _countryRepository;

			public GetStatesByCountryIdQueryHandler(ICountryRepository countryRepository)
			{
				_countryRepository = countryRepository;
			}

			public async Task<IEnumerable<StateData>> Handle(GetStatesByCountryIdQuery request, CancellationToken cancellationToken)
			{
				var country = await _countryRepository.GetByIdAsync(request.CountryId);
				if (country == null || country.States == null)
				{
					return Enumerable.Empty<StateData>();
				}

				return country.States.Select(s => new StateData
				{
					Name = s.EnName,
					state_code = s.Id
				});
			}
		}
	}
}
