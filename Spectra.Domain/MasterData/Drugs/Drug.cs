using System;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.MasterData.Drug
{
    public class Drug : BaseAuditableEntity<string>
    {
        public string Name { get; set; }
        public string? ActiveIngredient { get; set; }
        public string ScientificName { get; set; }
        public string? Code { get; set; }
        public string RecommendedDosage { get; set; }
        public string Doncentration { get; set; }
        public string InteractionsWithOtherdrugs { get; set; }
        public string Contraindications { get; set; }
        public string Nots { get; set; }
        public string Type { get; set; }
        public string ImagePath { get; set; }

        protected Drug() { }
        private Drug(
            string id,
            string name,
            string activeIngredient) : base(id)
        {
            Id = id;
            Name = name;
            ActiveIngredient = activeIngredient;

            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(activeIngredient, nameof(activeIngredient));
        }
        public static Drug Create(string id,
          string name,
          string activeIngredient)
        {
            return new Drug(id, name, activeIngredient);
        }


    }
}
