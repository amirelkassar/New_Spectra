using MediatR;
using Spectra.Application.Countries.Cities.DTOs;
using Spectra.Application.Countries.Cities.Queries;
using Spectra.Application.Countries.DTOs;
using Spectra.Application.Countries.Queries;
using Spectra.Application.Countries.States.DTOs;
using Spectra.Application.Countries.States.Queries;

namespace Spectra.Application.Countries.Services
{
    public class CountryService : ICountryService
    {
        private readonly IMediator _mediator;

        public CountryService(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<IEnumerable<CountryData>> GetAllCountriesAsync()
        {
            var query = new GetAllCountriesQuery();
            var countries = await _mediator.Send(query);
            return countries;
        }

        public async Task<IEnumerable<StateData>> GetStatesByCountryIdAsync(string countryId)
        {
            var query = new GetStatesByCountryIdQuery { CountryId = countryId };
            var states = await _mediator.Send(query);
            return states;
        }

        public async Task<IEnumerable<CityData>> GetCitiesByStateIdAsync(string stateId)
        {
            var query = new GetCitiesByStateIdQuery { StateId = stateId };
            var cities = await _mediator.Send(query);
            return cities;
        }
    }
}
