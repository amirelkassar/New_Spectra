using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.Drug;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Application.Patients;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Enums;
using Spectra.Infrastructure.MasterData.ServicesMD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.ServicesMD.Commands
{
    public class UpdateServicesMCommand : ICommand<Unit>
    {
        public string Id { get; set; }
        public AvailableSrvice AvailableSrvices { get; set; }
        public string ServicesName { get; set; }
        public string DefinitionServices { get; set; }
        public decimal ServicePrice { get; set; }
        public string TermsAndConditions { get; set; }
        public string? ServiceAddress { get; set; }
        public string? Content { get; set; }

        public List<Secation>? Secations { get; set; }
        public IFormFile? Photo { get; set; }



        public class UpdateServicesMCommandHandler : IRequestHandler<UpdateServicesMCommand, Unit>
        {

            private readonly IServiceMDRepository _serviceMRepository;
            private readonly IHellper _addPhoto;



            public UpdateServicesMCommandHandler(IServiceMDRepository serviceMRepository, IHellper addPhoto)
            {
                _serviceMRepository = serviceMRepository;
                _addPhoto = addPhoto;
            }

            public async Task<Unit> Handle(UpdateServicesMCommand request, CancellationToken cancellationToken)
            {

                var entity = await _serviceMRepository.GetByIdAsync(request.Id);
                if (entity == null)
                {
                    throw new Exception("drug not found");
                }

                entity.ServicesName = request.ServicesName;
                entity.DefinitionServices = request.DefinitionServices;
                entity.AvailableSrvices = request.AvailableSrvices;
                entity.ServicePrice = request.ServicePrice;
                entity.TermsAndConditions = request.TermsAndConditions;
                entity.ServiceAddress = request.ServiceAddress;
                entity.Content = request.Content;
                entity.Secations = request.Secations;

                if (request.Photo != null)
                {

                    entity.AttachmentPath = await _addPhoto.UpdatePhoto(entity.AttachmentPath, request.Photo);

                }

                await _serviceMRepository.UpdateAsync(entity);
                return Unit.Value;
            }

        }
    }
}
