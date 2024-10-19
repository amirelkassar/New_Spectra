using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.Drug.Validator;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Commands
{
    public class CreateDrugCommand : ICommand<OperationResult<string>>
    {
        public string Name { get; set; }
        public string ActiveIngredient { get; set; }
        public string ScientificName { get; set; }
        public List<IFormFile>? Photo { get; set; }
        public string RecommendedDosage { get; set; }
        public string Doncentration { get; set; }
        public string DrugInteractionsWithOtherdrugs { get; set; }
        public string Contraindications { get; set; }
        public string? Code { get; set; }
        public string Nots { get; set; }
        public string Type { get; set; }
    }



    public class CreateDrugCommandHandler : IRequestHandler<CreateDrugCommand, OperationResult<string>>
    {
        private readonly IDrugRepository _drugRepository;
        private readonly IHellper _addPhoto;

        public CreateDrugCommandHandler(IDrugRepository drugRepository, IHellper addPhoto)
        {
            _drugRepository = drugRepository;
            _addPhoto = addPhoto;
        }

        public async Task<OperationResult<string>> Handle(CreateDrugCommand request, CancellationToken cancellationToken)
        {

            var names = await _drugRepository.GetAllAsync(b => b.Name == request.Name);
            if (names.Any())
            {
                throw new DbErrorException(" this's Name is a ready exists");
            }
            List<string>? photoPath = null;
            var uploadPhoto = await _addPhoto.CreateAttachments(request.Photo, "Upload/Image/Drugs");
            if (uploadPhoto != null)
            {
                photoPath = uploadPhoto;

            }

            var drug = DrugMD.Create(
                Ulid.NewUlid().ToString(),
                request.Name,
                request.ActiveIngredient,
                request.ScientificName,
                request.RecommendedDosage,
                request.Doncentration,
                request.DrugInteractionsWithOtherdrugs,
                request.Contraindications,
                photoPath,
                request.Code,
                request.Nots,
                request.Type
            );
            await _drugRepository.AddAsync(drug);

            return OperationResult<string>.Success(drug.Id);


        }
    }
    public class CreateDrugCommandValidator : AbstractValidator<CreateDrugCommand>
    {
        public CreateDrugCommandValidator()
        {
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
            RuleFor(x => x.Code)

              .MaximumLength(100).WithMessage("Drug concentration must not exceed 100 characters.");

            RuleFor(x => x.DrugInteractionsWithOtherdrugs)
                .NotEmpty().WithMessage("Drug interactions with other drugs are required.")
                .MaximumLength(500).WithMessage("Drug interactions must not exceed 500 characters.");

            RuleFor(x => x.Contraindications)
                .NotEmpty().WithMessage("Contraindications are required.")
                .MaximumLength(500).WithMessage("Contraindications must not exceed 500 characters.");
            RuleFor(x => x.Photo)
                       .Must(files => files == null || files.All(FileValidationHelper.BeAValidImage))
                       .WithMessage("Invalid image file(s). At least one file must be a valid image.");
        }

    }

}