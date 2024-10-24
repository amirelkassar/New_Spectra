﻿using MediatR;
using Spectra.Application.Patients.Commands;
using Spectra.Application.Patients.Queries;
using Spectra.Domain.Patients;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Spectra.Application.Patients.Services
{
	public class PatientService
	{
		private readonly IMediator _mediator;

		public PatientService(IMediator mediator)
		{
			_mediator = mediator;
		}

		public async Task<string> CreatePatient(CreatePatientCommand command)
		{
			return await _mediator.Send(command);
		}

		public async Task UpdatePatient(UpdatePatientCommand command)
		{
			await _mediator.Send(command);
		}

		public async Task DeletePatient(string id)
		{
			await _mediator.Send(new DeletePatientCommand { Id = id });
		}

		public async Task<Patient> GetPatientById(string id)
		{
			return await _mediator.Send(new GetPatientByIdQuery { Id = id });
		}

		public async Task<IEnumerable<Patient>> GetAllPatients()
		{
			return await _mediator.Send(new GetAllPatientsQuery());
		}
	}
}
