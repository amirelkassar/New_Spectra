using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.AppUser
{
    public class UserImage : BaseEntity<string>
    {
        public string UserId { get; set; }
        public string? EmployeeId { get; set; }
        public string ImagePath { get; set; }
    }
}
