using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Payment
{
    public class Wallet
    {
        public Currencies Currency { get; set; }
        public decimal AmountPaid {  get; set; }  

    }
}
