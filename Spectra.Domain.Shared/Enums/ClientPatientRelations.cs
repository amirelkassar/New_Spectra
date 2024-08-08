using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Enums
{
    public enum ClientPatientRelations
    {
        Parent = 1,
        Guardian = 2,
        Relative = 3,
        OrganizationRepresentative = 4,
        MedicalServiceProvider = 5,
        Sponsor = 6,
        Other = 0
    }
}
