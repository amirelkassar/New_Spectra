using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Patients.Commands;

using Spectra.Application.Patients.Queries;

using Spectra.Application.Interfaces;
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;


namespace Spectra.Infrastructure.Patients
{
    public class PatientService : IPatientService
    {
        private readonly IMediator _mediator;


        public PatientService(IMediator mediator, ICurrentUser currentUser)
        {
            _mediator = mediator;


        }

        public async Task<string> CreatePatient(CreatePatientCommand input)
        {

            var command = new CreatePatientCommand
            {

                Name = input.Name,
                Gender = input.Gender,
                NationalId = input.NationalId,
                RelationToClient = input.RelationToClient
                ,
                DateOfBirth = input.DateOfBirth

            };

            return await _mediator.Send(command);
        }

        public async Task UpdatePatient(string id, Name name, HumenGender gender, ClientPatientRelations relationToClient, DateOnly dateOfBirth, string nationalId)
        {

            var command = new UpdatePatientCommand
            {
                Id = id,
                Name = name,
                Gender = gender,
                NationalId = nationalId,
                RelationToClient = relationToClient
                ,
                DateOfBirth = dateOfBirth
            };

            await _mediator.Send(command);
        }

        public async Task DeletePatient(string id)
        {
            var command = new DeletePatientCommand { Id = id };
            await _mediator.Send(command);
        }

        public async Task<Patient> GetPatientById(string id)
        {
            var query = new GetPatientByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<IEnumerable<Patient>> GetAllPatients()
        {
            var query = new GetAllPatientsQuery();
            return await _mediator.Send(query);
        }

      
    }
}
