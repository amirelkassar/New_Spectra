using MediatR;
using Spectra.Application.Clients.Commands;
using Spectra.Application.Clients;
using Spectra.Application.Messaging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Spectra.Application.MasterData.Drug;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Infrastructure.MasterData.ServicesMD;

namespace Spectra.Application.MasterData.ServicesMD.Commands
{
    public class DeleteServicesMCommand : ICommand<Unit>
    {
        public string Id { get; set; }
    }
    public class DeleteDrugCommandHandler : IRequestHandler<DeleteServicesMCommand, Unit>
    {
        private readonly IServiceMDRepository _serviceMRepository;
        private readonly IHellper _addPhoto;



        public DeleteDrugCommandHandler(IServiceMDRepository serviceMRepository, IHellper addPhoto)
        {
            _serviceMRepository = serviceMRepository;
            _addPhoto = addPhoto;
        }



        public async Task<Unit> Handle(DeleteServicesMCommand request, CancellationToken cancellationToken)
        {
            var entity = await _serviceMRepository.GetByIdAsync(request.Id);
            if (entity == null)
            {
                throw new ("service not found");
            }


          await  _addPhoto.DeletePhoto(entity.AttachmentPath);

             await _serviceMRepository.DeleteAsync(entity);
            return Unit.Value;
        }
    }

}
