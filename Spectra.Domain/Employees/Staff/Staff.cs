using Spectra.Domain.Employees.MedicalStaff.Doctor;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Employees.Staff
{
    // Staff : Entitiy is Collect bettwen tow secations Accounts and secretariail
    public class Staff : BassEmployees
    {
        protected Staff() { }

        private Staff(
            string id,
            Name name,
            string nationalId,
            PhoneNumber phoneNumber,
            HumenGender humenGenders,
            EmailAddress emailAddress,
            Address address


            )
            : base(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address
                  )
        {

        }


        public static Staff Create(
        string id,
        Name name,
        string nationalId,
        PhoneNumber phoneNumber,
        EmailAddress emailAddress,
        HumenGender humenGenders,
        Address address

        )

        {
            ArgumentNullException.ThrowIfNull(id, nameof(Id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(nationalId, nameof(nationalId));
            ArgumentNullException.ThrowIfNull(phoneNumber, nameof(phoneNumber));
            ArgumentNullException.ThrowIfNull(address, nameof(address));
            ArgumentNullException.ThrowIfNull(humenGenders, nameof(humenGenders));
            ArgumentNullException.ThrowIfNull(emailAddress, nameof(emailAddress));




            var staff = new Staff(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address);

            return staff;


        }
    }
    }
