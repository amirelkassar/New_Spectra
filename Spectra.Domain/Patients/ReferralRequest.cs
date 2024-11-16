using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Patients
{
    public class ReferralRequest : BaseAuditableEntity<string>
    {
        public string Name { get; private set; }
        public string SessoinId { get;private set; }
        public string PatientId { get; private set; }
        public string PatientName { get; private set; }
        public string RequesterId { get; private set; }
        public string RequesterName { get; private set; }
    }
}
