using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Admin.Dto
{
    public class GetAllEmployeesDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        //public string JobType { get; set; }
        public DateTimeOffset  TimeToJoin { get; set; }
    }
}
