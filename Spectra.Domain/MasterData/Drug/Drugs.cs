using Microsoft.AspNetCore.Http;
using Microsoft.VisualBasic;
using Spectra.Domain.Clients;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Spectra.Domain.MasterData.Drug
{
    public class Drugs : BaseAuditableEntity<string>
    {
        public string DrugsName { get; set; }


        public string ActiveIngredient { get; set; }
        public string ScientificName { get; set; }


        public string RecommendedDosage { get; set; }
        public string DrugDoncentration { get; set; }
        public string DrugInteractionsWithOtherdrugs { get; set; }
        public string Contraindications { get; set; }
        public string? AttachmentPath { get; set; }

        protected Drugs() { }
        private Drugs(
            string id,
            string drugsName, string activeIngredient, string scientificName,
          string recommendedDosage, string drugDoncentration,
          string drugInteractionsWithOtherdrugs, string contraindications, string? attachmentPath
            ) : base(id)
        {
            Id = id;
            DrugsName = drugsName;
            ActiveIngredient = activeIngredient;
            ScientificName = scientificName;
            RecommendedDosage = recommendedDosage;
            DrugDoncentration = drugDoncentration;
            DrugInteractionsWithOtherdrugs = drugInteractionsWithOtherdrugs;
            Contraindications = contraindications;
            AttachmentPath = attachmentPath;
        }
        public static Drugs Create(string id,
          string drugsName, string activeIngredient, string scientificName,
          string recommendedDosage, string drugDoncentration,
          string drugInteractionsWithOtherdrugs, string contraindications, string? attachmentPath)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(drugsName, nameof(drugsName));
            ArgumentNullException.ThrowIfNull(activeIngredient, nameof(activeIngredient));
            ArgumentNullException.ThrowIfNull(recommendedDosage, nameof(recommendedDosage));
            ArgumentNullException.ThrowIfNull(drugDoncentration, nameof(drugDoncentration));
            ArgumentNullException.ThrowIfNull(drugInteractionsWithOtherdrugs, nameof(drugInteractionsWithOtherdrugs));
            ArgumentNullException.ThrowIfNull(contraindications, nameof(contraindications));

            return new Drugs(id, drugsName, activeIngredient, scientificName, recommendedDosage, drugDoncentration, drugInteractionsWithOtherdrugs, contraindications, attachmentPath);


        }


    }
}
