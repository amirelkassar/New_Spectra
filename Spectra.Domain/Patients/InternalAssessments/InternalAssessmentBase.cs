using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.Patients.InternalAssessments
{
    public abstract class InternalAssessmentBase : BaseAuditableEntity<string>
    {
        public string Name { get; protected set; }
        public string AssignedToId { get; protected set; }
        public string AssignedToName { get; protected set; }
    }
}
