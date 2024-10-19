using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Application.Validator;
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Patients.Commands
{
    public class CreatePatientCommand : ICommand<OperationResult<string>>
    {
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public HumenGender Gender { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public ClientPatientRelations RelationToClient { get; set; }
        public string ClientId { get; private set; }
        public double ChildHeight { get; set; }
        public double ChildWeightt { get; set; }
        public string DateOfOnSetOfSymptoms { get; set; }
        public TypeOfDisease InheritedOrAcquired { get; set; }
    }

    public class CreatePatientCommandHandler : IRequestHandler<CreatePatientCommand, OperationResult<string>>
    {
        private readonly IPatientRepository _patientRepository;

        public CreatePatientCommandHandler(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public async Task<OperationResult<string>> Handle(CreatePatientCommand request, CancellationToken cancellationToken)
        {

            var patient = Patient.Create(
                  Ulid.NewUlid().ToString(),
                  request.Name,
                request.NationalId,
                request.Gender,
                request.DateOfBirth,
                request.RelationToClient,
                request.ChildHeight,
                request.ChildWeightt,
                request.DateOfOnSetOfSymptoms,
                request.InheritedOrAcquired, request.ClientId

                );
            await _patientRepository.AddAsync(patient);
            return OperationResult<string>.Success(patient.Id);

        }
    }

    public class CreatePatientCommandValidator : AbstractValidator<CreatePatientCommand>
    {
        public CreatePatientCommandValidator()
        {
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
