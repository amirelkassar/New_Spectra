using FluentValidation;
using Spectra.Application.MasterData.SpecializationCommend.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.SpecializationCommend.Validator
{
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
                .ScalePrecision(2, 18).WithMessage("Consultation Cost must have up to 2 decimal places and no more than 18 total digits.");
        }
    }
}
