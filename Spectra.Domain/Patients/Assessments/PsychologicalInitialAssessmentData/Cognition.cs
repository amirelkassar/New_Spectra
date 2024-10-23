using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.PsychologicalInitialAssessmentData
{
    public class Cognition
    {
        public CognitiveFunctionLevel SustainsAttention { get; set; }
        public CognitiveFunctionLevel ShiftingAttention { get; set; }
        public CognitiveFunctionLevel SelectiveAttention { get; set; }
        public CognitiveFunctionLevel AlternatingAttention { get; set; }
        public CognitiveFunctionLevel ShortTermMemory { get; set; }
        public CognitiveFunctionLevel EpisodicMemory { get; set; }
        public CognitiveFunctionLevel ProspectiveMemory { get; set; }
        public CognitiveFunctionLevel SemanticMemory { get; set; }
        public CognitiveFunctionLevel WorkingMemory { get; set; }
        public CognitiveFunctionLevel LongTermMemory { get; set; }
        public string Other { get; set; }
    }
}
