using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.MasterData.SuccessStories
{
    public class SuccessStory : BaseAuditableEntity<string>
    {
        public SuccessStory()
        {
            Sections = [];
        }
        public string PatientName { get; set; }
        public string ArDiagnoseName { get; set; }
        public string ArDiagnoseDescription { get; set; }
        public string EnDiagnoseName { get; set; }
        public string EniagnoseDescription { get; set; }
        public string DiagonseImage { get; set; }

        public string BeforeTreatmentPoint1 { get; set; }
        public string BeforeTreatmentPoint2{ get; set; }
        public string BeforeTreatmentPoint3 { get; set; }
        public string BeforeTreatmentImage { get; set; }

        public string AfterTreatmentPoint1 { get; set; }
        public string AfterTreatmentPoint2 { get; set; }
        public string AfterTreatmentPoint3 { get; set; }
        public string AfterTreatmentImage { get; set; }

        public ICollection<SuccessStoryTreatmentSection> Sections { get; set; }

        public string? ClientComment { get; set; }
        public string? Video { get; set; }
    }

    public class SuccessStoryTreatmentSection
    {
        public SuccessStoryTreatmentSection()
        {
            Id = Guid.NewGuid().ToString();
        }
        public string Id { get; private set; }
        public int Order { get; set; }
        public string EnDescription { get; set; }
        public string ArDescription { get; set; }
        public string SectionImage { get; set; }
    }
}
