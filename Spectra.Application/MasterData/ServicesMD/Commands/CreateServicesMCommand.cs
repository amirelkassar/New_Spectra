using DocumentFormat.OpenXml.Bibliography;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Enums;
using Spectra.Infrastructure.MasterData.ServicesMD;

namespace Spectra.Application.MasterData.ServicesMD.Commands
{
    public class CreateServicesMCommand : ICommand<string>
    {
        public AvailableSrvice AvailableSrvices { get; set; }
        public string ServicesName { get; set; }
        public string DefinitionServices { get; set; }
        public decimal ServicePrice { get; set; }

        public string TermsAndConditions { get; set; }
        public string? ServiceAddress { get; set; }

        public string? Content { get; set; }

        public List<Secation>? Secations { get; set; }
        public IFormFile? Photo { get; set; }

    }



    public class CreateDrugCommandHandler : IRequestHandler<CreateServicesMCommand, string>
    {
        private readonly IServiceMDRepository _serviceMRepository;
        private readonly IHellper _addPhoto;



        public CreateDrugCommandHandler(IServiceMDRepository serviceMRepository, IHellper addPhoto)
        {
            _serviceMRepository = serviceMRepository;
            _addPhoto = addPhoto;
        }

        public async Task<string> Handle(CreateServicesMCommand request, CancellationToken cancellationToken)
        {
            string? photoPath = null;

            var uploadPhoto =await _addPhoto.CreatePhoto(request.Photo);
            if (uploadPhoto != null)
            {
              photoPath = uploadPhoto;

            }
          
               var entity = MasterDataServices.Create(

                Ulid.NewUlid().ToString(),
                request.ServicesName,
                request.DefinitionServices,
                request.AvailableSrvices,
                request.ServicePrice,
                request.TermsAndConditions,
                request.ServiceAddress,
                request.Content,
                request.Secations,
                photoPath
                );
            await _serviceMRepository.AddAsync(entity);
            return entity.Id;
        }
    }
}