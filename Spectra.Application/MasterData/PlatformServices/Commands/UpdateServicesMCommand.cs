using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.ServicesMD.Commands
{
    public class UpdateServicesMCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public string EnName { get; set; }
        public string ArName { get; set; }
        public string? EnDescription { get; set; }
        public string? ArDescription { get; set; }
        public double? Price { get; set; }
        public double? Discount { get; set; }
        public string? ArTermsAndConditions { get; set; }
        public string? EnTermsAndConditions { get; set; }
        public bool? EnableForFreeLancer { get; set; }
        public bool? EnableForSpectraTeam { get; set; }
        public ICollection<ServiceReport>? Reports { get; set; }
        public ICollection<string>? Specifications { get; set; }
        public ICollection<ServiceContent>? Contents { get; set; }
        public IFormFile? HeroImage { get; set; }

        public class UpdateServicesMCommandHandler(IServiceMDRepository serviceMRepository,
            IDocumentHellper addPhoto,
            IBaseMongoDbRepository<Specialization> specializationRepository) : IRequestHandler<UpdateServicesMCommand, OperationResult<Unit>>
        {

            private readonly IServiceMDRepository _serviceMRepository = serviceMRepository;
            private readonly IDocumentHellper _addPhoto = addPhoto;
            private readonly IBaseMongoDbRepository<Specialization> _specializationRepository = specializationRepository;

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
                entity.EnDescription = request.EnDescription;
                entity.ArDescription = request.ArDescription;
                entity.ArTermsAndConditions = request.ArTermsAndConditions;
                entity.EnTermsAndConditions = request.EnTermsAndConditions;
                entity.Price = request.Price;
                entity.Discount = request.Discount;
                entity.Reports = request.Reports;
                entity.Contents = request.Contents;
                string newImgaePath;

                if (request.Specifications is not null && request.Specifications.Count > 0)
                {
                    var specializations = await _specializationRepository.GetAllAsync(s => request.Specifications.Any(rs => rs == s.Id));
                    entity.Specifications = specializations.data.Select(s => new ServiceSpecification { Id = s.Id, ArName = s.ArName, EnName = s.EnName }).ToArray();
                }

                if (request.HeroImage != null && request.HeroImage.Length > 0)
                {
                    newImgaePath = await _addPhoto.CreateAttachment(request.HeroImage, Pathes.GetServicesPath());
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
