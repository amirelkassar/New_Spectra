using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Application.MasterData.ServicesMD.Commands
{
    public class CreateServicesMCommand : ICommand<OperationResult>
    {
        public ServiceTypes ServiceType { get; set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public double Price { get; set; }
        public double? Discount { get; set; }
        public string? EnDescription { get; set; }
        public string? ArDescription { get; set; }
        public string? ArTermsAndConditions { get; set; }
        public string? EnTermsAndConditions { get; set; }
        public ICollection<ServiceReport>? Reports { get; set; }
        public ICollection<ServiceSpecification>? Specifications { get; set; }
        public ICollection<ServiceContent>? Contents { get; set; }
        public IFormFile? HeroImage { get; set; }
    }



    public class CreateDrugCommandHandler : IRequestHandler<CreateServicesMCommand, OperationResult>
    {
        private readonly IServiceMDRepository _serviceMRepository;
        private readonly IDocumentHellper _addPhoto;

        public CreateDrugCommandHandler(IServiceMDRepository serviceMRepository, IDocumentHellper addPhoto)
        {
            _serviceMRepository = serviceMRepository;
            _addPhoto = addPhoto;
        }

        public async Task<OperationResult> Handle(CreateServicesMCommand request, CancellationToken cancellationToken)
        {
            var services = await _serviceMRepository.GetAllAsync(s => s.EnName.ToLower() == request.EnName.ToLower() || s.ArName.ToLower() == request.ArName.ToLower());
            if (services.Any())
            {
                throw new AlreadyExistException(request.EnName, nameof(request.EnName));
            }

            var entity = PlatformService.Create(
             Ulid.NewUlid().ToString(),
             request.EnName,
             request.ArName,
             request.ServiceType,
             request.Price);

            entity.EnDescription = request.EnDescription;
            entity.ArDescription = request.ArDescription;
            entity.ArTermsAndConditions = request.ArTermsAndConditions;
            entity.EnTermsAndConditions = request.EnTermsAndConditions;
            entity.Discount = request.Discount;
            entity.Reports = request.Reports;
            entity.Specifications = request.Specifications;
            entity.Contents = request.Contents;

            if (request.HeroImage is not null && request.HeroImage.Length > 0)
            {
                entity.HeroImagePath = await _addPhoto.CreateAttachment(request.HeroImage, Pathes.GetServicesPath());
            }

            await _serviceMRepository.AddAsync(entity);

            return OperationResult<string>.Success(entity.Id);
        }
    }
    public class CreateServicesMCommandValidator : AbstractValidator<CreateServicesMCommand>
    {
        public CreateServicesMCommandValidator()
        {
            RuleFor(x => x.ServiceType)
                .NotEmpty()
                .NotNull()
                .IsInEnum();

            RuleFor(x => x.EnName)
                .NotEmpty()
                .NotNull();

            RuleFor(x => x.ArName)
                .NotEmpty()
                .NotNull();

            RuleFor(x => x.Price)
                .NotEmpty()
                .NotNull();
        }
    }
}