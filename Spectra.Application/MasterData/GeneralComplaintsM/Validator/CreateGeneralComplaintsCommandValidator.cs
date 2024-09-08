using FluentValidation;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.GeneralComplaintsM.Validator
{
    public class CreateGeneralComplaintsCommandValidator : AbstractValidator<CreateGeneralComplaintsCommand>
    {
        public CreateGeneralComplaintsCommandValidator()
        {
            RuleFor(x => x.ComplaintName)
                .NotEmpty().WithMessage("Complaint name is required.")
                .MaximumLength(100).WithMessage("Complaint name must be less than 100 characters.");

            RuleFor(x => x.DescriptionOfTheComplaint)
                .NotEmpty().WithMessage("Description of the complaint is required.")
                .MaximumLength(500).WithMessage("Description of the complaint must be less than 500 characters.");
        }
    }
}
