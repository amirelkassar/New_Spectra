using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.Drug.Validator;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Commands
{
    public class CreateDrugCommand : ICommand<OperationResult<string>>
    {
        public string Name { get; set; }
        public string ActiveIngredient { get; set; }
        public string? ScientificName { get; set; }
        public IFormFile? Photo { get; set; }
        public string? RecommendedDosage { get; set; }
        public string? Doncentration { get; set; }
        public string? InteractionsWithOtherdrugs { get; set; }
        public string? Contraindications { get; set; }
        public string? Code { get; set; }
        public string? Nots { get; set; }
        public string? Type { get; set; }
    }



    public class CreateDrugCommandHandler : IRequestHandler<CreateDrugCommand, OperationResult<string>>
    {
        private readonly IDrugRepository _drugRepository;
        private readonly IDocumentHellper _addPhoto;

        public CreateDrugCommandHandler(IDrugRepository drugRepository, IDocumentHellper addPhoto)
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
            string? photoPath = await _addPhoto.CreateAttachment(request.Photo, Pathes.GetDrugsPath());

            var drug = Domain.MasterData.Drug.Drug.Create(
                Ulid.NewUlid().ToString(),
                request.Name,
                request.ActiveIngredient);
            drug.ScientificName = request.ScientificName;
            drug.RecommendedDosage = request.RecommendedDosage;
            drug.Doncentration = request.Doncentration;
            drug.InteractionsWithOtherdrugs = request.InteractionsWithOtherdrugs;
            drug.Contraindications = request.Contraindications;
            drug.Code = request.Code;
            drug.Type = request.Type;
            drug.Nots = request.Nots;

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
        }

    }

}