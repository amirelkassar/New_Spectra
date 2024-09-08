using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.MasterData.Drug;

namespace Spectra.Application.MasterData.Drug.Commands
{
    public class CreateDrugCommand : ICommand<string>
    {
        public string DrugsName { get; set; }
        public string ActiveIngredient { get; set; }
        public string ScientificName { get; set; }
        public IFormFile? Photo { get; set; }
        public string RecommendedDosage { get; set; }
        public string DrugDoncentration { get; set; }
        public string DrugInteractionsWithOtherdrugs { get; set; }
        public string Contraindications { get; set; }

    }



    public class CreateDrugCommandHandler : IRequestHandler<CreateDrugCommand, string>
    {
        private readonly IDrugRepository _drugRepository;
     
        private readonly IHellper _addPhoto;


        public CreateDrugCommandHandler(IDrugRepository drugRepository, IHellper addPhoto)
        {
            _drugRepository = drugRepository;
            _addPhoto=addPhoto;
        }

        public async Task<string> Handle(CreateDrugCommand request, CancellationToken cancellationToken)
        {
            string? photoPath = null;
            var uploadPhoto = await _addPhoto.CreatePhoto(request.Photo);
            if (uploadPhoto != null)
            {
                photoPath = uploadPhoto;
            }

            var drug = Drugs.Create(

                Ulid.NewUlid().ToString(),
                request.DrugsName,
                request.ActiveIngredient,
                request.ScientificName,
                request.RecommendedDosage,
                request.DrugDoncentration,
                request.DrugInteractionsWithOtherdrugs,
                request.Contraindications,
                     photoPath
                );
            await _drugRepository.AddAsync(drug);
            return drug.Id;
        }
    }
}