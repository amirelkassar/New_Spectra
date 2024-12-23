using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Contracts.DTO
{
    public class ContractTextSectionCreateDto
    {
        public string ArTitle { get; set; }
        public string? EnTitle { get; set; }
        public string? ArDescription { get; set; }
        public string? ENDescription { get; set; }
        public ICollection<string>? EnPoints { get; set; }
        public ICollection<string>? ARPoints { get; set; }
    }
}
