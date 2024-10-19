using Spectra.Domain.Shared.Common;
using System;
<<<<<<< HEAD
=======
using System.Collections.Generic;
>>>>>>> Admin-BackEnd

namespace Spectra.Domain.MasterData.Drug
{
    public class DrugMD : BaseAuditableEntity<string>
    {
        public string Name { get; set; }
        public string ActiveIngredient { get; set; }
        public string ScientificName { get; set; }
        public string? Code { get; set; }
        public string RecommendedDosage { get; set; }
        public string Doncentration { get; set; }
        public string InteractionsWithOtherdrugs { get; set; }
        public string Contraindications { get; set; }
<<<<<<< HEAD
        public string? AttachmentPath { get; set; }
=======
        public string Nots { get; set; }
        public string Type { get; set; }
        public List<string>? AttachmentPath { get; set; }
>>>>>>> Admin-BackEnd

        protected DrugMD() { }
        private DrugMD(
            string id,
            string name, string activeIngredient, string scientificName,
          string recommendedDosage, string doncentration,
<<<<<<< HEAD
          string drugInteractionsWithOtherdrugs, string contraindications, string? attachmentPath, string code
=======
          string drugInteractionsWithOtherdrugs, string contraindications, List<string>? attachmentPath, string? code, string nots, string type
>>>>>>> Admin-BackEnd
            ) : base(id)
        {
            Id = id;
            Name = name;
            ActiveIngredient = activeIngredient;
            ScientificName = scientificName;
            RecommendedDosage = recommendedDosage;
            Doncentration = doncentration;
            InteractionsWithOtherdrugs = drugInteractionsWithOtherdrugs;
            Contraindications = contraindications;
            AttachmentPath = attachmentPath;
            Code = code;
<<<<<<< HEAD
=======
            Nots = nots;
            Type = type;
>>>>>>> Admin-BackEnd
        }
        public static DrugMD Create(string id,
          string name, string activeIngredient, string scientificName,
          string recommendedDosage, string doncentration,
<<<<<<< HEAD
          string drugInteractionsWithOtherdrugs, string contraindications, string? attachmentPath, string code)
=======
          string drugInteractionsWithOtherdrugs,
          string contraindications,
         List<string>? attachmentPath, string? code,
            string nots, string type
            )
>>>>>>> Admin-BackEnd
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(activeIngredient, nameof(activeIngredient));
            ArgumentNullException.ThrowIfNull(recommendedDosage, nameof(recommendedDosage));
            ArgumentNullException.ThrowIfNull(doncentration, nameof(doncentration));
            ArgumentNullException.ThrowIfNull(drugInteractionsWithOtherdrugs, nameof(drugInteractionsWithOtherdrugs));
            ArgumentNullException.ThrowIfNull(contraindications, nameof(contraindications));
<<<<<<< HEAD

            return new DrugMD(id, name, activeIngredient, scientificName, recommendedDosage, doncentration, drugInteractionsWithOtherdrugs, contraindications, attachmentPath, code);
=======
            ArgumentNullException.ThrowIfNull(nots, nameof(nots));
            ArgumentNullException.ThrowIfNull(type, nameof(type));


            return new DrugMD(id, name, activeIngredient, scientificName, recommendedDosage, doncentration,
                drugInteractionsWithOtherdrugs, contraindications, attachmentPath,code , nots, type);
>>>>>>> Admin-BackEnd


        }


    }
}
