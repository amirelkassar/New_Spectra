using MediatR;
using Spectra.Application.Interfaces.IRepository;
using Spectra.Domain.Patients;
using System.Threading;
using System.Threading.Tasks;

namespace Spectra.Application.Patients.Queries
{
	public class GetPatientByIdQuery : IRequest<Patient>
	{
		public string Id { get; set; }
	}

	public class GetPatientByIdQueryHandler : IRequestHandler<GetPatientByIdQuery, Patient>
	{
		private readonly IPatientRepository _patientRepository;

		public GetPatientByIdQueryHandler(IPatientRepository patientRepository)
		{
			_patientRepository = patientRepository;
		}

		public async Task<Patient> Handle(GetPatientByIdQuery request, CancellationToken cancellationToken)
		{
			var patient = await _patientRepository.GetByIdAsync(request.Id);
			if (patient == null)
			{
				throw new Exception("Patient not found");
			}
			return patient;
		}
	}
}
