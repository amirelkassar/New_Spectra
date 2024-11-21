using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Constants
{
    public class DocumentsConts
    {
        public enum FileTypes : byte
        {
            NationalIdFront = 1,
            NationalIdBack = 2,
            Certificate = 3,
            TaxCertificate = 4,
            CommercialRegistration = 5,

        }
    }
}
