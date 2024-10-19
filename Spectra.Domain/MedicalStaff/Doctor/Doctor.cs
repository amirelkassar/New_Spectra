using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
<<<<<<< HEAD
=======
using System.Collections.Generic;
>>>>>>> Admin-BackEnd

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
<<<<<<< HEAD
            string attachmentPath,
             EmpelyeeRates? empelyeeRate,
=======
         List<string> attachmentPath,
            EmpelyeeRates? empelyeeRate,
>>>>>>> Admin-BackEnd
            EmploymentStatus status


            )
<<<<<<< HEAD
            : base(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address, diagnoses, licenseNumber, approvedBy, academicdegree, attachmentPath, empelyeeRate, status) { }

=======
            : base(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address, diagnoses, licenseNumber, approvedBy, academicdegree, attachmentPath , empelyeeRate ,
                  status)
        { 

        } 
>>>>>>> Admin-BackEnd

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
<<<<<<< HEAD
        string attachmentPath,
        EmpelyeeRates? empelyeeRate,
             EmploymentStatus status

=======
           List<string> attachmentPath,
            EmploymentStatus status,
            EmpelyeeRates? empelyeeRate
>>>>>>> Admin-BackEnd
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
            ArgumentNullException.ThrowIfNull(empelyeeRate, nameof(empelyeeRate));
<<<<<<< HEAD

            var doctor = new Doctor(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address, diagnoses,
                licenseNumber, approvedBy, academicdegree, attachmentPath, empelyeeRate, EmploymentStatus.Wating
);
=======
            ArgumentNullException.ThrowIfNull(status, nameof(status));


            var doctor = new Doctor(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address, diagnoses,
                licenseNumber, approvedBy, academicdegree, attachmentPath , empelyeeRate, status);
>>>>>>> Admin-BackEnd

            return doctor;


        }

    }

}
