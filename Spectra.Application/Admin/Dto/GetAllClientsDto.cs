using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Admin.Dto
{
    public class GetAllClientsDto
    {
        public string Name { get; set; }
        public int NumberOfKids { get; set; }
        //public int lastActivation {  get; set; }
        public ClientTypes ClientType { get; set; }


    }
}
