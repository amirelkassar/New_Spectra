
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
        public string ScientificNameByEng { get; set; }
        public string ScientificNameByEngByArab { get; set; }

        public string Code { get; set; }
        public string ScientificNote { get; set; }
        public ExaminationType ExaminationTypes { get; set; }



        protected MedicalTestsAndXray() { }
        private MedicalTestsAndXray(
               string id,
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
       )
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(scientificNameByEng, nameof(scientificNameByEng));
            ArgumentNullException.ThrowIfNull(scientificNameByEngByArab, nameof(scientificNameByEngByArab));
            ArgumentNullException.ThrowIfNull(notes, nameof(notes));
            ArgumentNullException.ThrowIfNull(examinationType, nameof(examinationType));
            ArgumentNullException.ThrowIfNull(code, nameof(code));

            return new MedicalTestsAndXray(id, scientificNameByEng, scientificNameByEngByArab, notes, examinationType, code);

        }

    }
}
