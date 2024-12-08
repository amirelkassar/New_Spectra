using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.WebAPI.Areas.Admin.Contract.Models
{
    public class ContractActionModel
    {
        public string? Id { get; set; }
        public bool? Value { get; set; }
        public string? Reason { get; set; }
    }
}
