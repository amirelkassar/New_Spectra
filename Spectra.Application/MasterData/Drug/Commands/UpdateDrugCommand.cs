using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Commands
{
    public class UpdateDrugCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
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

    public class UpdateDrugCommandHandler : IRequestHandler<UpdateDrugCommand, OperationResult<Unit>>
    {

        private readonly IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> _drugRepository;
        private readonly IDocumentHellper _addPhoto;

        public UpdateDrugCommandHandler(IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> drugRepository, IDocumentHellper addPhoto)
        {
            _drugRepository = drugRepository;
            _addPhoto = addPhoto;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateDrugCommand request, CancellationToken cancellationToken)
        {
            var drug = await _drugRepository.GetByIdAsync(request.Id);

            var check = await _drugRepository.Exists(b => b.Name == request.Name && b.Id != request.Id);
            if (check)
            {
                throw new DbErrorException(" this's Name is a ready exists");
            }

            drug.Name = request.Name;
            drug.ActiveIngredient = request.ActiveIngredient;
            drug.ScientificName = request.ScientificName;
            drug.RecommendedDosage = request.RecommendedDosage;
            drug.Doncentration = request.Doncentration;
            drug.InteractionsWithOtherdrugs = request.InteractionsWithOtherdrugs;
            drug.Contraindications = request.Contraindications;
            drug.Type = request.Type;
            drug.Nots = request.Nots;

            if (request.Photo != null)
            {
                drug.ImagePath = await _addPhoto.UpdateAttachment(drug.ImagePath, request.Photo, Pathes.GetDrugsPath());
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
        }

    }

}

