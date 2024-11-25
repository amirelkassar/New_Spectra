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
    public class UpdateServicesMCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? Description { get; set; }
        public double Price { get; set; }
        public double? Discount { get; set; }
        public string? TermsAndConditions { get; set; }
        public ICollection<ServiceSection>? Secations { get; set; }
        public ICollection<ServiceReport>? Reports { get; set; }
        public ICollection<ServiceSpecification>? Specifications { get; set; }
        public ICollection<ServiceContent>? Contents { get; set; }
        public IFormFile? HeroImage { get; set; }

        public class UpdateServicesMCommandHandler : IRequestHandler<UpdateServicesMCommand, OperationResult<Unit>>
        {

            private readonly IServiceMDRepository _serviceMRepository;
            private readonly IDocumentHellper _addPhoto;
            public UpdateServicesMCommandHandler(IServiceMDRepository serviceMRepository, IDocumentHellper addPhoto)
            {
                _serviceMRepository = serviceMRepository;
                _addPhoto = addPhoto;
            }

            public async Task<OperationResult<Unit>> Handle(UpdateServicesMCommand request, CancellationToken cancellationToken)
            {
                var entity = await _serviceMRepository.GetByIdAsync(request.Id);

                var names = await _serviceMRepository.GetAllAsync(b => b.EnName == request.EnName && b.Id != request.Id);
                if (names.Any())
                {
                    throw new AlreadyExistException(request.EnName, nameof(request.EnName));
                }
                entity.EnName = request.EnName;
                entity.ArName = request.ArName;
                entity.Description = request.Description;
                entity.Price = request.Price;
                entity.Discount = request.Discount;
                entity.TermsAndConditions = request.TermsAndConditions;
                entity.Secations = request.Secations;
                entity.Reports = request.Reports;
                entity.Specifications = request.Specifications;
                entity.Contents = request.Contents;
                string newImgaePath;

                if (request.HeroImage != null && request.HeroImage.Length > 0)
                {
                    newImgaePath = await _addPhoto.CreateAttachment(request.HeroImage,Pathes.GetServicesPath());
                    if (newImgaePath is not null)
                    {
                        await _addPhoto.DeleteAttachment(entity.HeroImagePath);
                        entity.HeroImagePath = newImgaePath;
                    }
                }
                await _serviceMRepository.UpdateAsync(entity);
                return OperationResult<Unit>.Success(Unit.Value);
            }

        }
    }
}
