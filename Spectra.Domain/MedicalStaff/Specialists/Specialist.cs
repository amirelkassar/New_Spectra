using Spectra.Domain.Clients;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.MedicalStaff.Specialists
{
    public class Specialist :BassMedicalStaff
    {

        protected Specialist() { }



        private Specialist(
            string id,
            Name name,
            string nationalId,
            PhoneNumber phoneNumber,
            HumenGender humenGenders,
            EmailAddress emailAddress,
            Address address,
            string diagnoses,
            string? licenseNumber,
            string? approvedBy,
            string academicdegree,
             List<string> attachmentPath,
            EmpelyeeRates? empelyeeRate,
            EmploymentStatus status)
            : base(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address, 
                  diagnoses, licenseNumber, approvedBy, academicdegree, attachmentPath , empelyeeRate , status) { }




        public static Specialist Create(
            string id,
            Name name,
            string nationalId,
            PhoneNumber phoneNumber,
            EmailAddress emailAddress,
            HumenGender humenGenders,
            Address address,
            string diagnoses,
            string? licenseNumber,
            string? approvedBy,
            string academicdegree,
             List<string> attachmentPath,
             EmpelyeeRates? empelyeeRate,
             EmploymentStatus status
            )
        {
            ArgumentNullException.ThrowIfNull(id, nameof(Id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(nationalId, nameof(nationalId));
            ArgumentNullException.ThrowIfNull(phoneNumber, nameof(phoneNumber));
            ArgumentNullException.ThrowIfNull(address, nameof(address));
            ArgumentNullException.ThrowIfNull(humenGenders, nameof(humenGenders));
            ArgumentNullException.ThrowIfNull(emailAddress, nameof(emailAddress));
            ArgumentNullException.ThrowIfNull(diagnoses, nameof(diagnoses));
            ArgumentNullException.ThrowIfNull(academicdegree, nameof(academicdegree));
            ArgumentNullException.ThrowIfNull(attachmentPath, nameof(attachmentPath));

            var specialist = new Specialist(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address, diagnoses,
                licenseNumber, approvedBy, academicdegree, attachmentPath , empelyeeRate,
                EmploymentStatus.Wating);

            return specialist;


        }

    }
}
