
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using static Spectra.Domain.Shared.Constants.EmployeesConsts;

namespace Spectra.Domain.Employees.MedicalStaff
{
    public class MedicalProvider : EmployeeBase
    {
        public ICollection<MedicalProviderSpecialization> Specializations { get; set; }
        public ICollection<MedicalProviderService> Services { get; set; }
        public string LicenseNumber { get; set; }
        public string ApprovedBy { get; set; }
        public AcademicDegrees AcademicDegree { get; set; }
        public string MainSpecializationId { get; set; }
        public string MainSpecializationName { get; set; }
        public string SectionId { get; set; }
        public string SectionName { get; set; }


        protected MedicalProvider() { }
        public MedicalProvider(string id,
                   Name name,
                   string nationalId,
                   PhoneNumber phoneNumber,
                   HumenGender humenGender,
                   EmailAddress emailAddress,
                   Address address,
                   ICollection<MedicalProviderSpecialization> specializations,
                   ICollection<MedicalProviderService> services,
                   string licenseNumber,
                   string approvedBy,
                   AcademicDegrees academicdegree,
                   JobTypes jobType,
                   string jobName,
                  string userId,
                  string specializationId,
                  string specializationName,
                  string sectionId,
                  string sectionName) : base(id, name, nationalId, phoneNumber, humenGender, emailAddress, address, userId, jobType, jobName)
        {
            ArgumentNullException.ThrowIfNull(specializations, nameof(specializations));
            ArgumentNullException.ThrowIfNull(licenseNumber, nameof(licenseNumber));
            ArgumentNullException.ThrowIfNull(academicdegree, nameof(academicdegree));
            ArgumentNullException.ThrowIfNull(approvedBy, nameof(approvedBy));
            ArgumentNullException.ThrowIfNull(specializationId, nameof(specializationId));
            ArgumentNullException.ThrowIfNull(specializationName, nameof(specializationName));
            ArgumentNullException.ThrowIfNull(sectionId, nameof(sectionId));
            ArgumentNullException.ThrowIfNull(sectionName, nameof(sectionName));

            Specializations = specializations;
            LicenseNumber = licenseNumber;
            ApprovedBy = approvedBy;
            AcademicDegree = academicdegree;
            MainSpecializationId = specializationId;
            MainSpecializationName = specializationName;
            SectionId = sectionId;
            SectionName = sectionName;
        }

        public static MedicalProvider Create(string id,
                   Name name,
                   string nationalId,
                   PhoneNumber phoneNumber,
                   HumenGender humenGender,
                   EmailAddress emailAddress,
                   Address address,
                   ICollection<MedicalProviderSpecialization> specializations,
                   ICollection<MedicalProviderService> services,
                   string licenseNumber,
                   string approvedBy,
                   AcademicDegrees academicdegree,
                   JobTypes jobType,
                   string jobName,
                  string userId,
                  string specializationId,
                  string specializationName,
                  string sectionId,
                  string sectionName)
        {

            return new(id,
                name,
                nationalId,
                phoneNumber,
                humenGender,
                emailAddress,
                address,
                specializations,
                services,
                licenseNumber,
                approvedBy,
                academicdegree,
                jobType,
                jobName,
                userId,
                specializationId,
                specializationName,
                sectionId,
                sectionName
               );
        }

    }

}
