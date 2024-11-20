using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Constants
{
    public static class ContractConses
    {
        public enum ContractVersionStates : byte
        {
            Active = 1,
            Draft = 0
        }

        public enum ContractStates : byte
        {
            Contracting = 1,
            Accepted = 2,
            Canceled = 0
        }

        public enum ContractApprovals : byte
        {
            Doctor = 1,
            DepartmentHead = 2,
            Admin = 3
        }
    }
}
