using Microsoft.AspNetCore.Http;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Admin.Dto
{
    public class CreateEmployeesDto: BassEmployeesDto
    {

        public string specializationId { get; set; }
        public List<IFormFile>? ScientificDegree { get; set; }
 


    }
}
