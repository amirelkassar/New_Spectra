using FluentValidation;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.DiagnoseCommend.Validator
{
    public class UpdateDiagnoseCommandValidator : AbstractValidator<UpdateDiagnoseCommand>
    {
        public UpdateDiagnoseCommandValidator()
        {
          

            RuleFor(x => x.DiagnosisName)
                .NotEmpty().WithMessage("Diagnosis name is required.")
                .MaximumLength(100).WithMessage("Diagnosis name must not exceed 100 characters.");

            RuleFor(x => x.DiagnosisDescription)
                .NotEmpty().WithMessage("Diagnosis description is required.")
                .MaximumLength(500).WithMessage("Diagnosis description must not exceed 500 characters.");
        }
    }
}
