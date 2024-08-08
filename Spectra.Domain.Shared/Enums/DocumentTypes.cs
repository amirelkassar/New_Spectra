using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Enums
{
    public enum DocumentTypes : byte
    {
        Others = 0,
        EmailTemplate = 1,
        UserProfileImage = 2,
        UserResource = 3,
        ReportTemplate = 4,
        NationalIdFront = 5,
        NationalIdBack = 6,
        HealthInsuranceFront = 7,
        HealthInsuranceBack = 8,
        ResidenceIdFront = 9,
        ResidenceIdBack = 10,
        TaxNumberFront = 11,
        TaxNumberBack = 12,
        LegalDocument = 13
    }
}
