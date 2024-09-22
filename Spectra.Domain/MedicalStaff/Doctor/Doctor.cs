using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;

namespace Spectra.Domain.MedicalStaff.Doctor
{
    public class Doctor : BassMedicalStaff
    {
      
        protected Doctor() { }

        private Doctor(
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
            string attachmentPath)
            : base(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address, diagnoses, licenseNumber, approvedBy, academicdegree, attachmentPath) { } 

   
            public static Doctor Create(
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
            string attachmentPath
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

            var doctor = new Doctor(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address, diagnoses,
                licenseNumber, approvedBy, academicdegree, attachmentPath);

            return doctor;


        }

    }

}
