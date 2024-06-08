using Spectra.Domain.Entities.ValueObjects;
using Spectra.Domain.Enumeration;
using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Clients
{
	public class Client: BaseAuditableEntity<string>
	{
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber PhoneNumber { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public ClientTypes ClientType { get; set; }
        public string UserId { get; set; }
        public string? Position { get; set; }
        public PhoneNumber? LandLine { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public EmailAddress Address { get; set; }

    }
}
