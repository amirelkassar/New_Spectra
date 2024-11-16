using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.Patients
{
    public class ReferralRequest : BaseAuditableEntity<string>
    {
        public string Name { get; private set; }
        public string SessoinId { get; private set; }
        public string PatientId { get; private set; }
        public string PatientName { get; private set; }
        public string RequesterId { get; private set; }
        public string RequesterName { get; private set; }
    }
}
