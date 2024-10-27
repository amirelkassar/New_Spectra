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
using Spectra.Domain.Shared.Wrappers;
using Spectra.Application.MasterData.HellperFunc;

namespace Spectra.Application.MasterData.Drug.Commands
{
    public class DeleteDrugCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }
    public class DeleteDrugCommandHandler : IRequestHandler<DeleteDrugCommand, OperationResult<Unit>>
    {
        private readonly IDrugRepository _drugRepository;
        private readonly IHellper _addPhoto;

        public DeleteDrugCommandHandler(IDrugRepository drugRepository, IHellper addPhoto)
        {
            _drugRepository = drugRepository;
            _addPhoto = addPhoto;
        }



        public async Task<OperationResult<Unit>> Handle(DeleteDrugCommand request, CancellationToken cancellationToken)
        {
          
            var drugs = await _drugRepository.GetByIdAsync(request.Id);
       

            await _addPhoto.DeleteAttachments(drugs.AttachmentPath);

            await _drugRepository.DeleteAsync(drugs);
            return OperationResult<Unit>.Success(Unit.Value);
      

   
        }
    }

}
