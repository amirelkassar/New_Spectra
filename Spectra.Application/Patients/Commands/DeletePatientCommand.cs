using MediatR;
using Spectra.Application.Messaging;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Spectra.Application.Patients.Commands
{
    public class DeletePatientCommand : ICommand<Unit>
	{
		public string Id { get; set; }
	}

	public class DeletePatientCommandHandler : IRequestHandler<DeletePatientCommand, Unit>
	{
		private readonly IPatientRepository _patientRepository;

		public DeletePatientCommandHandler(IPatientRepository patientRepository)
		{
			_patientRepository = patientRepository;
		}

		public async Task<Unit> Handle(DeletePatientCommand request, CancellationToken cancellationToken)
		{
			var patient = await _patientRepository.GetByIdAsync(request.Id);
			if (patient == null)
			{
				throw new Exception("Patient not found");
			}

			await _patientRepository.DeleteAsync(request.Id);
			return Unit.Value;
		}
	}
}
