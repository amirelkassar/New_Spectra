using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Payment
{
    public class CrditCard
    {
        //public PayMethode PayMethodes { get; set; }
        public Name Name { get; set; }
        public string NumberCard { get; set; }
        public DateTime ExpiryDate { get; set; }
        public string Cvv {  get; set; }

    }
}
