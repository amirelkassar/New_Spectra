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

namespace Spectra.Application.MasterData.Drug.Commands
{
    public class DeleteDrugCommand : ICommand<Unit>
    {
        public string Id { get; set; }
    }
    public class DeleteDrugCommandHandler : IRequestHandler<DeleteDrugCommand, Unit>
    {
        private readonly IDrugRepository _drugRepository;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public DeleteDrugCommandHandler(IDrugRepository drugRepository, IWebHostEnvironment webHostEnvironment)
        {
            _drugRepository = drugRepository;
            _webHostEnvironment = webHostEnvironment;
        }



        public async Task<Unit> Handle(DeleteDrugCommand request, CancellationToken cancellationToken)
        {
            var drugs = await _drugRepository.GetByIdAsync(request.Id);
            if (drugs == null)
            {
                throw new Exception("drug not found");
            }
            if (!string.IsNullOrEmpty(drugs.AttachmentPath))
            {
                var filePath = Path.Combine(_webHostEnvironment.WebRootPath, drugs.AttachmentPath);
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }
            }

            await _drugRepository.DeleteAsync(drugs);
            return Unit.Value;
        }
    }

}
