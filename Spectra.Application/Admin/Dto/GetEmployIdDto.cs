using Spectra.Application.Contracts.DTO;
using Spectra.Domain.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Admin.Dto
{
    public class GetEmployIdDto: BassEmployeesDto
    {
        public string Id { get; set; }
        public List<string> Attachments { get; set; }
        public List<ServicesDataFromContractDto> FreelanceServices { get; set; }
        public List<ServicesDataFromContractDto> TeamSpectraServices { get; set; }


    }
}
