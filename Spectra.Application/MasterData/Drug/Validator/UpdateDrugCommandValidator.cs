using FluentValidation;
using Spectra.Application.MasterData.Drug.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.Drug.Validator
{

    public class UpdateDrugCommandValidator : AbstractValidator<UpdateDrugCommand>
    {
        public UpdateDrugCommandValidator()
        {
            RuleFor(x => x.Id)
                .NotEmpty().WithMessage("Id is required.");

            RuleFor(x => x.DrugsName)
                .NotEmpty().WithMessage("Drug name is required.")
                .MaximumLength(100).WithMessage("Drug name must not exceed 100 characters.");

            RuleFor(x => x.ActiveIngredient)
                .NotEmpty().WithMessage("Active ingredient is required.")
                .MaximumLength(100).WithMessage("Active ingredient must not exceed 100 characters.");

            RuleFor(x => x.ScientificName)
                .NotEmpty().WithMessage("Scientific name is required.")
                .MaximumLength(100).WithMessage("Scientific name must not exceed 100 characters.");

            RuleFor(x => x.RecommendedDosage)
                .NotEmpty().WithMessage("Recommended dosage is required.")
                .MaximumLength(200).WithMessage("Recommended dosage must not exceed 200 characters.");

            RuleFor(x => x.DrugDoncentration)
                .NotEmpty().WithMessage("Drug concentration is required.")
                .MaximumLength(100).WithMessage("Drug concentration must not exceed 100 characters.");

            RuleFor(x => x.DrugInteractionsWithOtherdrugs)
                .NotEmpty().WithMessage("Drug interactions with other drugs are required.")
                .MaximumLength(500).WithMessage("Drug interactions must not exceed 500 characters.");

            RuleFor(x => x.Contraindications)
                .NotEmpty().WithMessage("Contraindications are required.")
                .MaximumLength(500).WithMessage("Contraindications must not exceed 500 characters.");

            RuleFor(x => x.Attachment)
                .Must(FileValidationHelper.BeAValidImage).WithMessage("Invalid image file.");
        }

    }
}
