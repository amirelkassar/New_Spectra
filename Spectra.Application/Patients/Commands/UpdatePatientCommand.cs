using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Application.Validator;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Patients.Commands
{
    public class UpdatePatientCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public HumenGender Gender { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public ClientPatientRelations RelationToClient { get; set; }
    }

    public class UpdatePatientCommandHandler : IRequestHandler<UpdatePatientCommand, OperationResult<Unit>>
    {
        private readonly IPatientRepository _patientRepository;

        public UpdatePatientCommandHandler(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public async Task<OperationResult<Unit>> Handle(UpdatePatientCommand request, CancellationToken cancellationToken)
        {

            var patient = await _patientRepository.GetByIdAsync(request.Id);


            patient.Name = request.Name;
            patient.NationalId = request.NationalId;
            patient.Gender = request.Gender;
            patient.DateOfBirth = request.DateOfBirth;
            patient.RelationToClient = request.RelationToClient;

            await _patientRepository.UpdateAsync(patient);
            return OperationResult<Unit>.Success(Unit.Value);



        }
    }
    public class UpdatePatientCommandValidator : AbstractValidator<UpdatePatientCommand>
    {
        public UpdatePatientCommandValidator()
        {
            RuleFor(x => x.Id)
                .NotEmpty().WithMessage("Patient ID is required.");

            RuleFor(x => x.Name)
                .NotNull().WithMessage("Name is required.")
                .SetValidator(new NameValidator());

            RuleFor(x => x.NationalId)
                .NotEmpty().WithMessage("National ID is required.")
                .Matches(@"^\d{10,12}$").WithMessage("National ID must be between 10 and 12 digits.");

            RuleFor(x => x.Gender)
                .IsInEnum().WithMessage("Gender is required.");

            RuleFor(x => x.DateOfBirth)
                .LessThan(DateOnly.FromDateTime(DateTime.Now)).WithMessage("Date of birth must be in the past.");

            RuleFor(x => x.RelationToClient)
                .IsInEnum().WithMessage("Relation to client is required.");
        }
    }
}
