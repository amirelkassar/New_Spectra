using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.ServicesMD.Commands
{
    public class UpdateServicesMCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public ServiceTypes AvailableSrvices { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string TermsAndConditions { get; set; }
        //public string? Address { get; set; }
        //public string? Content { get; set; }

        public List<ServiceSection>? Secations { get; set; }
        public List<IFormFile>? Photo { get; set; }



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

                var names = await _serviceMRepository.GetAllAsync(b => b.Name == request.Name && b.Id != request.Id);
                if (names.Any())
                {
                    throw new DbErrorException(" this's Name is a ready exists");
                }
                entity.Name = request.Name;
                entity.Description = request.Description;
                entity.Price = request.Price;
                entity.TermsAndConditions = request.TermsAndConditions;
                entity.Secations.Clear();
                entity.Secations.AddRange(request.Secations);

                if (request.Photo != null)
                {
                    entity.AttachmentPath.Clear();
                    entity.AttachmentPath.AddRange(await _addPhoto.UpdateAttachments(entity.AttachmentPath, request.Photo, "Upload/Image/Services"));
                }

                await _serviceMRepository.UpdateAsync(entity);
                return OperationResult<Unit>.Success(Unit.Value);


            }

        }
    }
}
