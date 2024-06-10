using MediatR;
using Spectra.Application.Countries.States.DTOs;
using Spectra.Application.Interfaces.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Countries.States.Queries
{
    public class GetStatesByCountryIdQuery : IRequest<IEnumerable<StateData>>
    {
        public string CountryId { get; set; }

        public class GetStatesByCountryIdQueryHandler : IRequestHandler<GetStatesByCountryIdQuery, IEnumerable<StateData>>
        {
            private readonly IStateRepository _stateRepository;

            public GetStatesByCountryIdQueryHandler(IStateRepository stateRepository)
            {
                _stateRepository = stateRepository;
            }

            public async Task<IEnumerable<StateData>> Handle(GetStatesByCountryIdQuery request, CancellationToken cancellationToken)
            {
                var states = await _stateRepository.GetByCountryIdAsync(request.CountryId);
                return states.Select(s => new StateData
                {
                    Name = s.EnName,
                    state_code = s.Id
                });
            }
        }
    }
}
