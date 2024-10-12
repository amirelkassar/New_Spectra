using MediatR;
using Spectra.Application.Countries.DTOs;
using Spectra.Application.Messaging;

namespace Spectra.Application.Countries.Queries
{
    public class GetAllCountriesQuery : IQuery<IEnumerable<CountryData>>
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

}
