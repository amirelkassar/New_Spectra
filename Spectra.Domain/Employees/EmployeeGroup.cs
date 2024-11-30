using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Employees
{
    public class EmployeeGroup : BaseAuditableEntity<string>
    {
        protected EmployeeGroup()
        {
            
        }
        private EmployeeGroup(string id,
            string ownerId,
            string name,
            ICollection<EmployeeGroupMemeber> memebers):base(id)
        {
            ArgumentNullException.ThrowIfNullOrWhiteSpace(ownerId, nameof(ownerId));
            ArgumentNullException.ThrowIfNullOrWhiteSpace(name, nameof(name));
            ArgumentNullException.ThrowIfNull(memebers, nameof(memebers));
            OwnerId = ownerId;
            OwnerName = name;
            Memebers = memebers;
        }
        public string OwnerId { get; set; }
        public string OwnerName { get; set; }
        public ICollection<EmployeeGroupMemeber> Memebers { get; set; }

        public static EmployeeGroup Create(string id,
            string ownerId,
            string name,
            ICollection<EmployeeGroupMemeber> memebers) => new(id, ownerId,name, memebers);
    }
}
