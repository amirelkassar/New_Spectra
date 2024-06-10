using MediatR;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Application.States.DTOs;
using Spectra.Application.States.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.States.Handlers
{
	public class GetAllStatesQueryHandler : IRequestHandler<GetAllStatesQuery, IEnumerable<StateData>>
	{
		private readonly IStateRepository _stateRepository;

		public GetAllStatesQueryHandler(IStateRepository stateRepository)
		{
			_stateRepository = stateRepository;
		}

		public async Task<IEnumerable<StateData>> Handle(GetAllStatesQuery request, CancellationToken cancellationToken)
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
