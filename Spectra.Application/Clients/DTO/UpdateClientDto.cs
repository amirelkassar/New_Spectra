using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Clients.DTO
{
    public class UpdateClientDto
    {
      
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber PhoneNumber { get; set; }
        public ClientTypes ClientType { get; set; }
        public string UserId { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public Address Address { get; set; }
    }
}
