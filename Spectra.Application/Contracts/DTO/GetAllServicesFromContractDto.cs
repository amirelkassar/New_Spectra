using Spectra.Domain.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Contracts.DTO
{
    public class GetAllServicesFromContractDto
    {
        public List<ServicesDataFromContractDto>? Freelance { get; set; }
        public List<ServicesDataFromContractDto>? SpectraTeam { get; set; }



    }
}
