using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Areas.Admin.Employees.Models
{
    public class DeleteAttachmentModel
    {
        public Guid FileId { get; set; }
        public string EmployeeId { get; set; }
    }
}
