using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.MasterData.TreatmentTypes
{
    public class TreatmentType : BaseAuditableEntity<string>
    {
        public TreatmentType(string id) : base(id)
        {
            Sections = [];
        }
        public string ArTitle { get; set; }
        public string ArDescription { get; set; }
        public string EnTitle { get; set; }
        public string EnDescription { get; set; }
        public string HeroImage { get; set; }

        public ICollection<TreatmentTypeContentSection> Sections { get; set; }
    }

    public class TreatmentTypeContentSection
    {
        public TreatmentTypeContentSection()
        {
            Id = Guid.NewGuid().ToString();
        }
        public string Id { get;private set; }
        public string EnTitle { get; set; }
        public string EnDescription { get; set; }
        public string ArTitle { get; set; }
        public string ArDescription { get; set; }
        public string SectionImage { get; set; }
    }
}
