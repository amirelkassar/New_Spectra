using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;

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
            List<string> attachmentPath,
            EmpelyeeRates? empelyeeRate
         



            )
            : base(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address, diagnoses, licenseNumber, approvedBy, academicdegree, attachmentPath , empelyeeRate 
                  )
        { 

        } 

   
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
           List<string> attachmentPath,
            
            EmpelyeeRates? empelyeeRate

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
           

            var doctor = new Doctor(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address, diagnoses,
                licenseNumber, approvedBy, academicdegree, attachmentPath , empelyeeRate);

            return doctor;


        }

    }

}
