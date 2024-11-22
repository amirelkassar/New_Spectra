using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Shared.Constants.DocumentsConts;

namespace Spectra.Application.Employees.Dto
{
    public class EmployeeAttachmentDto
    {
        public string EmpId { get; set; }
        public string Name { get; set; }
        public IFormFile File { get; set; }
        public FileTypes Type { get; set; }
    }
}
