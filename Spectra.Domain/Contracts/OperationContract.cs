using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Contracts
{
    public class OperationContract
    {

        public string Service { get; set; }
        public double Selary { get; set; }
    
        public double Duration { get; set; }
        public double PlatformFee { get; set; }

    }
}
