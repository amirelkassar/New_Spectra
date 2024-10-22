
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Admin.Dto
{
    public class CollectAllEmployeeDto
    {
        public IEnumerable<GetAllEmployeesDto> Employees { get; set;} 
       
        public int TotalItems { get; set; }
        public int TotalPages { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    }
}
