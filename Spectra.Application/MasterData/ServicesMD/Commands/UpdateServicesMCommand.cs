using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.Drug;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Application.Patients;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.ServicesMD.Commands
{
    public class UpdateServicesMCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public AvailableSrvice AvailableSrvices { get; set; }
        public string ServicesName { get; set; }
        public string DefinitionServices { get; set; }
        public double Price { get; set; }
        public string TermsAndConditions { get; set; }
        public string? Address { get; set; }
        public string? Content { get; set; }

        public List<Secation>? Secations { get; set; }
        public List<IFormFile>? Photo { get; set; }



        public class UpdateServicesMCommandHandler : IRequestHandler<UpdateServicesMCommand, OperationResult<Unit>>
        {

            private readonly IServiceMDRepository _serviceMRepository;
            private readonly IHellper _addPhoto;



            public UpdateServicesMCommandHandler(IServiceMDRepository serviceMRepository, IHellper addPhoto)
            {
                _serviceMRepository = serviceMRepository;
                _addPhoto = addPhoto;
            }

            public async Task<OperationResult<Unit>> Handle(UpdateServicesMCommand request, CancellationToken cancellationToken)
            {
               
                var entity = await _serviceMRepository.GetByIdAsync(request.Id);
          

                entity.Name = request.ServicesName;
                entity.DefinitionServices = request.DefinitionServices;
                entity.AvailableSrvices = request.AvailableSrvices;
                entity.Price = request.Price;
                entity.TermsAndConditions = request.TermsAndConditions;
                entity.Address = request.Address;
                entity.Content = request.Content;
                entity.Secations = request.Secations;

                if (request.Photo != null)
                {

                    entity.AttachmentPath = await _addPhoto.UpdateAttachment(entity.AttachmentPath, request.Photo, "Upload/Image/Services");

                }

                await _serviceMRepository.UpdateAsync(entity);
                return OperationResult<Unit>.Success(Unit.Value);
            

    }

        }
    }
}
