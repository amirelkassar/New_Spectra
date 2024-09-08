using MediatR;
using Spectra.Application.Countries.States.DTOs;

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
                return Enumerable.Empty<StateData>();
            }
        }
    }
}
