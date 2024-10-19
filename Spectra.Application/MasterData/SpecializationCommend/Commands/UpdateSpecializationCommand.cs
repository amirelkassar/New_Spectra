using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.SpecializationCommend.Commands
{


    public class UpdateSpecializationCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string SpecializationName { get; set; }
        public string Description { get; set; }
        public double ConsultationCost { get; set; }
    }

    public class UpdateSpecializationCommandHandler : IRequestHandler<UpdateSpecializationCommand, OperationResult<Unit>>
    {
        private readonly ISpecializationsRepository _specializationRepository;
        private readonly IValidator<UpdateSpecializationCommand> updateValidator;
        public UpdateSpecializationCommandHandler(ISpecializationsRepository specializationRepository, IValidator<UpdateSpecializationCommand> updateValidator)
        {
            _specializationRepository = specializationRepository;
            updateValidator = updateValidator;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateSpecializationCommand request, CancellationToken cancellationToken)
        {

            var Specializations = await _specializationRepository.GetByIdAsync(request.Id);

            var validationResult = await updateValidator.ValidateAsync(request, cancellationToken);
            if (!validationResult.IsValid)
            {
                throw new FluentValidation.ValidationException(validationResult.Errors);
            }
            Specializations.Name = request.SpecializationName;
            Specializations.Description = request.Description;
            Specializations.ConsultationCost = request.ConsultationCost;


            await _specializationRepository.UpdateAsync(Specializations);
            return OperationResult<Unit>.Success(Unit.Value);
        }

    }

    public class UpdateSpecializationCommandValidator : AbstractValidator<UpdateSpecializationCommand>
    {
        public UpdateSpecializationCommandValidator()
        {
            RuleFor(x => x.Id)
                .NotEmpty().WithMessage("Id is required.");

            RuleFor(x => x.SpecializationName)
                .NotEmpty().WithMessage("Specialization Name is required.")
                .MaximumLength(100).WithMessage("Specialization Name must not exceed 100 characters.");

            RuleFor(x => x.Description)
                .MaximumLength(500).WithMessage("Description must not exceed 500 characters.");

            RuleFor(x => x.ConsultationCost)
     .GreaterThan(0).WithMessage("Consultation Cost must be greater than 0.")
     .Must(HaveValidDecimalPlaces).WithMessage("Consultation Cost must have up to 2 decimal places.");


        }
        private bool HaveValidDecimalPlaces(double cost)
        {
            return Math.Round(cost, 2) == cost;
        }
    }
}

