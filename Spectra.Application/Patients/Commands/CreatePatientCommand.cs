using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Patients.Commands
{
    public class CreatePatientCommand : ICommand<string>
    {
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public HumenGender Gender { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public ClientPatientRelations RelationToClient { get; set; }
    }

    public class CreatePatientCommandHandler : IRequestHandler<CreatePatientCommand, string>
    {
        private readonly IPatientRepository _patientRepository;

        public CreatePatientCommandHandler(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public async Task<string> Handle(CreatePatientCommand request, CancellationToken cancellationToken)
        {
            var patient = Patient.Create(
                  Ulid.NewUlid().ToString(),
            request.Name,
                request.NationalId,
                request.Gender,
                request.DateOfBirth,
                request.RelationToClient,
             
                Ulid.NewUlid().ToString());
            await _patientRepository.AddAsync(patient);
            return patient.Id;
        }
    }
}
