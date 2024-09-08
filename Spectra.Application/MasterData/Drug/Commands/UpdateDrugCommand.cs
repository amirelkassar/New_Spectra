using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.Drug;
using Spectra.Application.Messaging;
using Spectra.Application.Patients;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.Drug.Commands
{
    public class UpdateDrugCommand : ICommand<Unit>
    {
        public string Id { get; set; }
        public string DrugsName { get; set; }
        public string ActiveIngredient { get; set; }
        public string ScientificName { get; set; }
        public IFormFile? Attachment { get; set; }
        public string RecommendedDosage { get; set; }
        public string DrugDoncentration { get; set; }
        public string DrugInteractionsWithOtherdrugs { get; set; }
        public string Contraindications { get; set; }
    }

    public class UpdateDrugCommandHandler : IRequestHandler<UpdateDrugCommand, Unit>
    {

        private readonly IDrugRepository _drugRepository;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public UpdateDrugCommandHandler(IDrugRepository drugRepository, IWebHostEnvironment webHostEnvironment)
        {
            _drugRepository = drugRepository;
            _webHostEnvironment = webHostEnvironment;
        }

        public async Task<Unit> Handle(UpdateDrugCommand request, CancellationToken cancellationToken)
        {

            var drug = await _drugRepository.GetByIdAsync(request.Id);
            if (drug == null)
            {
                throw new Exception("drug not found");
            }


            drug.DrugsName = request.DrugsName;
            drug.ActiveIngredient = request.ActiveIngredient;
            drug.ScientificName = request.ScientificName;
            drug.RecommendedDosage = request.RecommendedDosage;
            drug.DrugDoncentration = request.DrugDoncentration;
            drug.DrugInteractionsWithOtherdrugs = request.DrugInteractionsWithOtherdrugs;
            drug.Contraindications = request.Contraindications;

            if (request.Attachment != null)
            {
                // Delete the existing photo if any
                if (!string.IsNullOrEmpty(drug.AttachmentPath))
                {
                    var existingFilePath = Path.Combine(_webHostEnvironment.WebRootPath, drug.AttachmentPath);
                    if (File.Exists(existingFilePath))
                    {
                        File.Delete(existingFilePath);
                    }
                }

                // Save the new attachment
                var newFileName = Guid.NewGuid() + Path.GetExtension(request.Attachment.FileName);
                if (string.IsNullOrEmpty(_webHostEnvironment.WebRootPath))
                {
                    _webHostEnvironment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
                }

                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "uploads");

                // Ensure the directory exists
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                var filePath = Path.Combine(uploadsFolder, newFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await request.Attachment.CopyToAsync(stream);
                }

                // Update the drug with the new attachment path
                drug.AttachmentPath = Path.Combine("uploads", newFileName);
            }


            await _drugRepository.UpdateAsync(drug);
            return Unit.Value;
        }

    }
}
