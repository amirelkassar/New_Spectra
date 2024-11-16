using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients.Assessments.PsychologicalInitialAssessmentData
{
    public class PatientPreviousHistory
    {
        public HistoryStatus SocialStressors { get; set; }
        public HistoryStatus FinancialStressors { get; set; }
        public HistoryStatus PsychiatricHistory { get; set; }
        public HistoryStatus NeurologicalHistory { get; set; }
    }
}
