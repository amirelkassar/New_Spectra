using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Contracts
{
    public class OperationContrct
    {

        public string Service { get; set; }
        public double Selary { get; set; }
        public double Discount { get; set; }
        public bool IsFreelance { get; set; }


    }
}
