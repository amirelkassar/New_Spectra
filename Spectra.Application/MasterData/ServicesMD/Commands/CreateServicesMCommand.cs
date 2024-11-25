using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.ServicesMD.Commands
{
    public class CreateServicesMCommand : ICommand<OperationResult<string>>
    {
        public ServiceTypes AvailableSrvices { get; set; }
        public string Name { get; set; }
        public string DefinitionServices { get; set; }
        public double Price { get; set; }

        public string TermsAndConditions { get; set; }


        public List<ServiceSection>? Sections { get; set; }
        public List<IFormFile>? Photo { get; set; }

    }



    public class CreateDrugCommandHandler : IRequestHandler<CreateServicesMCommand, OperationResult<string>>
    {
        private readonly IServiceMDRepository _serviceMRepository;
        private readonly IDocumentHellper _addPhoto;



        public CreateDrugCommandHandler(IServiceMDRepository serviceMRepository, IDocumentHellper addPhoto)
        {
            _serviceMRepository = serviceMRepository;
            _addPhoto = addPhoto;
        }

        public async Task<OperationResult<string>> Handle(CreateServicesMCommand request, CancellationToken cancellationToken)
        {

            List<string>? photoPath = null;

            var uploadPhoto = await _addPhoto.CreateAttachments(request.Photo, "Upload/Image/Services");
            if (uploadPhoto != null)
            {
                photoPath = uploadPhoto;

            }

            var entity = PlatformService.Create(

             Ulid.NewUlid().ToString(),
             request.Name,
             request.AvailableSrvices,
             request.Price);
            await _serviceMRepository.AddAsync(entity);

            return OperationResult<string>.Success(entity.Id);



        }
    }
    public class CreateServicesMCommandValidator : AbstractValidator<CreateServicesMCommand>
    {
        public CreateServicesMCommandValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Service name is required.")
                .MaximumLength(100).WithMessage("Service name cannot exceed 100 characters.");

            RuleFor(x => x.DefinitionServices)
                .NotEmpty().WithMessage("Service definition is required.")
                .MaximumLength(500).WithMessage("Service definition cannot exceed 500 characters.");

            RuleFor(x => x.Price)
                .GreaterThan(0).WithMessage("Price must be greater than zero.");

            RuleFor(x => x.TermsAndConditions)
                .NotEmpty().WithMessage("Terms and conditions are required.");

            RuleFor(x => x.AvailableSrvices)
                .IsInEnum().WithMessage("Invalid value for available services.");

            RuleFor(x => x.Secations)
                .Must(sections => sections == null || sections.Count > 0)
                .WithMessage("If provided, sections must contain at least one item.");

            RuleFor(x => x.Photo)
                .Must(photos => photos == null || photos.All(file => file.Length > 0))
                .WithMessage("If provided, each photo must be a valid file.");
        }
    }
}