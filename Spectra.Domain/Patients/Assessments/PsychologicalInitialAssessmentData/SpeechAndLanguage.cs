using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.PsychologicalInitialAssessmentData
{
    public class SpeechAndLanguage
    {
        public QuantityLevel Quantity { get; set; }
        public RateLevel Rate { get; set; }
        public VolumeLevel Volume { get; set; }
        public FluencyLevel Fluency { get; set; }
        public GrammaticalLevel Grammatical { get; set; }
        public ContentLevel Content { get; set; }
    }
}
