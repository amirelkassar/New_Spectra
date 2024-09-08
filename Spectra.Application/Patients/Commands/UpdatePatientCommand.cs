using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Patients.Commands
{
    public class UpdatePatientCommand : ICommand<Unit>
    {
        public string Id { get; set; }
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public HumenGender Gender { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public ClientPatientRelations RelationToClient { get; set; }
    }

    public class UpdatePatientCommandHandler : IRequestHandler<UpdatePatientCommand, Unit>
    {
        private readonly IPatientRepository _patientRepository;

        public UpdatePatientCommandHandler(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public async Task<Unit> Handle(UpdatePatientCommand request, CancellationToken cancellationToken)
        {
            var patient = await _patientRepository.GetByIdAsync(request.Id);
            if (patient == null)
            {
                throw new Exception("Patient not found");
            }

            patient.Name = request.Name;
            patient.NationalId = request.NationalId;
            patient.Gender = request.Gender;
            patient.DateOfBirth = request.DateOfBirth;
            patient.RelationToClient = request.RelationToClient;

            await _patientRepository.UpdateAsync(patient);
            return Unit.Value;
        }
    }
}
