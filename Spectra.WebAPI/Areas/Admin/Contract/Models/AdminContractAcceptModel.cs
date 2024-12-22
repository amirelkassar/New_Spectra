using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.Contracts;

namespace Spectra.WebAPI.Areas.Admin.Contract.Models
{
    public class AdminContractAcceptModel : ContractAcceptModel
    {
        public AdminContractAcceptModel()
        {
            TextSections = [];
        }
        public ICollection<ContractTextSection> TextSections { get; set; }
    }
}
