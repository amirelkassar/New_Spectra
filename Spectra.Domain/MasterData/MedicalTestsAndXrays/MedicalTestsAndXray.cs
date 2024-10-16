
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.MasterData.MedicalTestsAndXrays
{
    public class MedicalTestsAndXray : BaseAuditableEntity<string>
    {
        public string ScientificName { get; set; }

        public string ScientificNote { get; set; }
        public ExaminationType ExaminationTypes { get; set; }



        protected MedicalTestsAndXray() { }
        private MedicalTestsAndXray(
               string id,
           string scientificName,
           string scientificNote,
           ExaminationType examinationType
               ) : base(id)
        {
            Id = id;
            ScientificName = scientificName;
            ScientificNote = scientificNote;
            ExaminationTypes = examinationType;
        }
        public static MedicalTestsAndXray Create(string id, string scientificName,
           string notes, ExaminationType examinationType
       )
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(scientificName, nameof(scientificName));
            ArgumentNullException.ThrowIfNull(notes, nameof(notes));
            ArgumentNullException.ThrowIfNull(examinationType, nameof(examinationType));

            return new MedicalTestsAndXray(id, scientificName, notes, examinationType);

        }

    }
}
