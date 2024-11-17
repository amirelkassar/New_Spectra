
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.Employees.MedicalStaff
{
    public class MedicalProvider : BassEmployees
    {
        public List<string> Diagnoses { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public string Academicdegree { get; set; }
        public List<string>? AttachmentPath { get; set; } = new List<string>();
        public EmpelyeeRates? EmpelyeeRate { get; set; }
        public JobTypes JobType { get; set; }
       
        public string SpecializationId { get; set; }
        public string SectionMedicalDepartment { get; set; }


        protected MedicalProvider() { }
        public MedicalProvider(
                   string id,
                   Name name,
                   string nationalId,
                   PhoneNumber phoneNumber,
                   HumenGender humenGenders,
                   EmailAddress emailAddress,
                   Address address,
                   List<string> diagnoses,
                   string? licenseNumber,
                   string? approvedBy,
                   string academicdegree,
                   List<string>? attachmentPath,
                   EmpelyeeRates? empelyeeRate,
                   JobTypes jobType,
                   string userId,

                   string specializationId,
                   string sectionMedicalDepartment
                   ) : base(id, name, nationalId, phoneNumber, humenGenders, emailAddress, address, userId)
        {
            Id = id;
            Name = name;
            NationalId = nationalId;
            MobileNumber = phoneNumber;
            EmailAddress = emailAddress;
            HumenGenders = humenGenders;
            Address = address;
            Diagnoses = diagnoses;
            LicenseNumber = licenseNumber;
            ApprovedBy = approvedBy;
            Academicdegree = academicdegree;
            AttachmentPath = attachmentPath;
            EmpelyeeRate = empelyeeRate;
            JobType = jobType;
            UserId = userId;
            SpecializationId = specializationId;

            SectionMedicalDepartment = sectionMedicalDepartment;
        }

        public static MedicalProvider Create(
          string id,
          Name name,
          string nationalId,
          PhoneNumber phoneNumber,
          EmailAddress emailAddress,
          HumenGender humenGenders,
          Address address,
          List<string> diagnoses,
          string? licenseNumber,
          string? approvedBy,
          string academicdegree,
          List<string> attachmentPath,
          EmpelyeeRates? empelyeeRate,
          JobTypes jobType,
          string userId
          , string specializationId,
          string sectionMedicalDepartment
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
            ArgumentNullException.ThrowIfNull(specializationId, nameof(specializationId));
            ArgumentNullException.ThrowIfNull(sectionMedicalDepartment, nameof(sectionMedicalDepartment));


            var medicalProvider = new MedicalProvider(id, name, 
                nationalId, phoneNumber, humenGenders, emailAddress, address, diagnoses,
                licenseNumber, approvedBy, academicdegree, attachmentPath, empelyeeRate, jobType, userId, specializationId, sectionMedicalDepartment
               );

            return medicalProvider;


        }

    }

}
