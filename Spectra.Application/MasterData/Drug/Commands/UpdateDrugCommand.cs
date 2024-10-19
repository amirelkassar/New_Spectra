using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.Drug.Validator;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Commands
{
    public class UpdateDrugCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string ActiveIngredient { get; set; }
        public string ScientificName { get; set; }
        public List<IFormFile>? Attachment { get; set; }
        public string RecommendedDosage { get; set; }
        public string Doncentration { get; set; }
        public string DrugInteractionsWithOtherdrugs { get; set; }
        public string Contraindications { get; set; }
        public string Code { get; set; }
        public string Nots { get; set; }
        public string Type { get; set; }
    }

    public class UpdateDrugCommandHandler : IRequestHandler<UpdateDrugCommand, OperationResult<Unit>>
    {

        private readonly IDrugRepository _drugRepository;
        private readonly IHellper _addPhoto;

        public UpdateDrugCommandHandler(IDrugRepository drugRepository, IHellper addPhoto)
        {
            _drugRepository = drugRepository;
            _addPhoto = addPhoto;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateDrugCommand request, CancellationToken cancellationToken)
        {
            var drug = await _drugRepository.GetByIdAsync(request.Id);
            if (drug == null)
            {
                throw new NotFoundException("Drug", request.Id);
            }

            drug.Name = request.Name;
            drug.ActiveIngredient = request.ActiveIngredient;
            drug.ScientificName = request.ScientificName;
            drug.RecommendedDosage = request.RecommendedDosage;
            drug.Doncentration = request.Doncentration;
            drug.InteractionsWithOtherdrugs = request.DrugInteractionsWithOtherdrugs;
            drug.Contraindications = request.Contraindications;
            drug.Type = request.Type;
            drug.Nots = request.Nots;

            if (request.Attachment != null)
            {
                drug.AttachmentPath = await _addPhoto.UpdateAttachment(drug.AttachmentPath, request.Attachment, "Upload/Image/Drugs");
                // Assuming you want to store paths as a comma-separated string
            }
            drug.Code = request.Code;

            await _drugRepository.UpdateAsync(drug);
            return OperationResult<Unit>.Success(Unit.Value);

        }
    }
    public class UpdateDrugCommandValidator : AbstractValidator<UpdateDrugCommand>
    {
        public UpdateDrugCommandValidator()
        {
            RuleFor(x => x.Id)
                .NotEmpty().WithMessage("Id is required.");

            RuleFor(x => x.Name)
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

            RuleFor(x => x.Doncentration)
                .NotEmpty().WithMessage("Drug concentration is required.")
                .MaximumLength(100).WithMessage("Drug concentration must not exceed 100 characters.");

            RuleFor(x => x.DrugInteractionsWithOtherdrugs)
                .NotEmpty().WithMessage("Drug interactions with other drugs are required.")
                .MaximumLength(500).WithMessage("Drug interactions must not exceed 500 characters.");

            RuleFor(x => x.Contraindications)
                .NotEmpty().WithMessage("Contraindications are required.")
                .MaximumLength(500).WithMessage("Contraindications must not exceed 500 characters.");

            RuleFor(x => x.Attachment)
            .Must(files => files == null || files.All(FileValidationHelper.BeAValidImage))
            .WithMessage("Invalid image file(s). At least one file must be a valid image.");
        }

    }

}

