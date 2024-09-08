using FluentValidation;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Validator
{
    public class CreateMedicalTestsAndXraysCommandValidator : AbstractValidator<CreateMedicalTestsAndXraysCommand>
    {
        public CreateMedicalTestsAndXraysCommandValidator()
        {
            RuleFor(x => x.ScientificName)
                .NotEmpty().WithMessage("Scientific Name is required.")
                .MaximumLength(100).WithMessage("Scientific Name must not exceed 100 characters.");

            RuleFor(x => x.Notes)
                .MaximumLength(500).WithMessage("Notes must not exceed 500 characters.");

            RuleFor(x => x.ExaminationTypes)
                .IsInEnum().WithMessage("Invalid Examination Type.");
        }
    }
}
