using System;
using Spectra.Domain.ValueObjects;

namespace Spectra.Domain.Payment
{
    public class CrditCard
    {
        //public PayMethode PayMethodes { get; set; }
        public Name Name { get; set; }
        public string NumberCard { get; set; }
        public DateTime ExpiryDate { get; set; }
        public string Cvv { get; set; }

    }
}
