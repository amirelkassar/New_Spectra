using MediatR;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Domain.Patients;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Spectra.Application.Patients.Queries
{
	public class GetAllPatientsQuery : IRequest<IEnumerable<Patient>>
	{
	}

	public class GetAllPatientsQueryHandler : IRequestHandler<GetAllPatientsQuery, IEnumerable<Patient>>
	{
		private readonly IPatientRepository _patientRepository;

		public GetAllPatientsQueryHandler(IPatientRepository patientRepository)
		{
			_patientRepository = patientRepository;
		}

		public async Task<IEnumerable<Patient>> Handle(GetAllPatientsQuery request, CancellationToken cancellationToken)
		{
			return await _patientRepository.GetAllAsync();
		}
	}
}
