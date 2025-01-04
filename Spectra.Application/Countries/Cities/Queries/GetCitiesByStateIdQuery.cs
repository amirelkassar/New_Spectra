using MediatR;
using Spectra.Application.Countries.Cities.DTOs;

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

            return Enumerable.Empty<CityData>();
        }
    }
}
