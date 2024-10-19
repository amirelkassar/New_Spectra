
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;

namespace Spectra.Domain.MasterData.MedicalTestsAndXrays
{
    public class MedicalTestsAndXray : BaseAuditableEntity<string>
    {
<<<<<<< HEAD
        public string ScientificName { get; set; }

=======
        public string ScientificNameByEng { get; set; }
        public string ScientificNameByEngByArab { get; set; }

        public string Code { get; set; }
>>>>>>> Admin-BackEnd
        public string ScientificNote { get; set; }
        public ExaminationType ExaminationTypes { get; set; }



        protected MedicalTestsAndXray() { }
        private MedicalTestsAndXray(
               string id,
<<<<<<< HEAD
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
=======
           string scientificNameByEng,
           string scientificNameByEngByArab,
           string scientificNote,
           ExaminationType examinationType,
           string code
               ) : base(id)
        {
            Id = id;
            ScientificNameByEng = scientificNameByEng;
            ScientificNameByEngByArab = scientificNameByEngByArab;
            Code= code;
            ScientificNote = scientificNote;
            ExaminationTypes = examinationType;
        }
        public static MedicalTestsAndXray Create(string id, string scientificNameByEng,
           string notes, ExaminationType examinationType, string scientificNameByEngByArab, string code
>>>>>>> Admin-BackEnd
       )
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));
<<<<<<< HEAD
            ArgumentNullException.ThrowIfNull(scientificName, nameof(scientificName));
            ArgumentNullException.ThrowIfNull(notes, nameof(notes));
            ArgumentNullException.ThrowIfNull(examinationType, nameof(examinationType));

            return new MedicalTestsAndXray(id, scientificName, notes, examinationType);
=======
            ArgumentNullException.ThrowIfNull(scientificNameByEng, nameof(scientificNameByEng));
            ArgumentNullException.ThrowIfNull(scientificNameByEngByArab, nameof(scientificNameByEngByArab));
            ArgumentNullException.ThrowIfNull(notes, nameof(notes));
            ArgumentNullException.ThrowIfNull(examinationType, nameof(examinationType));
            ArgumentNullException.ThrowIfNull(code, nameof(code));

            return new MedicalTestsAndXray(id, scientificNameByEng, scientificNameByEngByArab, notes, examinationType, code);
>>>>>>> Admin-BackEnd

        }

    }
}
