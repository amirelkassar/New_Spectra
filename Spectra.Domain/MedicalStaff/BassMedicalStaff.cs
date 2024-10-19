using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;

namespace Spectra.Domain.MedicalStaff
{
    public abstract class BassMedicalStaff : BaseAuditableEntity<string>
    {
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public HumenGender HumenGenders { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public Address Address { get; set; }
        public string Diagnoses { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public string Academicdegree { get; set; }
<<<<<<< HEAD
        public string AttachmentPath { get; set; }
        public EmpelyeeRates? EmpelyeeRate { get; set; }

=======
        public List<string> AttachmentPath { get; set; }
        public EmpelyeeRates? EmpelyeeRate { get; set; }
>>>>>>> Admin-BackEnd
        public EmploymentStatus Status { get; set; }
        protected BassMedicalStaff() { }
        public BassMedicalStaff(
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
=======
                    List<string> attachmentPath,
>>>>>>> Admin-BackEnd
                   EmpelyeeRates? empelyeeRate,
                   EmploymentStatus status
                   ) : base(id)
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
            Status = status;
        }

    }

}
