using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Sessions
{
    public abstract class SessionBase : BaseAuditableEntity<string>
    {
        public string Topic { get; protected set; }
        public string PatientId { get; protected set; }
        public string PatientName { get; protected set; }
        public string DoctorId { get; protected set; }
        public string DoctorName { get; protected set; }
        public string ClientId { get; protected set; }
        public string ClientName { get; protected set; }
        public string ServiceId { get; protected set; }
        public string ServiceName { get; protected set; }
        public string PackageId { get; protected set; }
        public string PackageName { get; protected set; }
        public int Number { get; protected set; }
        public DateOnly Date { get; protected set; }
        public TimeOnly? StartedAt { get; set; }
        public TimeOnly? ProviderJoinedAt { get; set; }
        public TimeOnly? ClientJoinedAt { get; set; }
        public TimeOnly? EndedAt { get; set; }
        public string? ProviderToken { get; set; }
        public string? ClientToken { get; set; }
        public string? RoomNumber { get; set; }
        public string? Notes { get; set; }
    }
}
