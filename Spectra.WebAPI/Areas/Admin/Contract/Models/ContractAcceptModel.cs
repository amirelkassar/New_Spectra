using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Spectra.WebAPI.Areas.Admin.Contract.Models
{
    public class ContractAcceptModel
    {
        public string Id { get; set; }
        public IFormFile Signature { get; set; }
    }
}
