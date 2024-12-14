using Mapster;
using Spectra.Domain.AppUser;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Enums;
using static Spectra.Domain.Shared.Constants.EmployeesConsts;

namespace Spectra.Application.AppUsers.ProfileManagement.Dtos
{
    public class ProfileReadDto
    {
        public string Id { get; set; }
        public string? Prefix { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CountryCode { get; set; }
        public string? StateCode { get; set; }
        public string NationalId { get; set; }
        public string EmailAddress { get; set; }
        public string Phone { get; set; }
        public HumenGender Gender { get; set; }
        public string? Occupation { get; set; }
        public string? DoctorRefferalCode { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string FullName => $"{FirstName} {LastName}";
        public JobTypes JobType { get; set; }
        public string JobName { get; set; }
        public string? JobDescription { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public AcademicDegrees? AcademicDegree { get; set; }
        public string MainSpecializationId { get; set; }
        public int? ExperienceYears { get; set; }
        public string? Qualification { get; set; }
        public HumenGender HumenGender { get; set; }
        public string Emailaddress { get; set; }
        public string? State { get; set; }
        public string? StreetName { get; set; }
        public string? Building { get; set; }
        public string? PostalCode { get; set; }
        public string? Floor { get; set; }
        public string? CommonMark { get; set; }
        public string? PhoneNumber { get; set; }
        public string UserId { get; set; }
        public string MainSpecializationEnName { get; set; }
        public string MainSpecializationArName { get; set; }
        public string? SectionId { get; set; }
        public string? SectionEnName { get; set; }
        public string? SectionArEnName { get; set; }
        public double? WorkingHours { get; set; }
        public ICollection<EmployeeAttachment>? Attachments { get; set; }
        public ICollection<EmployeeSpecialization>? Specializations { get; set; }
        public ICollection<EmployeeService>? Services { get; set; }
        public string UserImage { get; set; }
        public bool HasActiveContract { get; set; }

        public int Rating { get; set; }
        public int RateCount { get; set; }

        public DateTimeOffset Created { get; set; }

        public static TypeAdapterConfig GetEmployeeConfiguration() => TypeAdapterConfig<Employee, ProfileReadDto>
        .NewConfig()
        .Map(dest => dest.FirstName, src => src.Name.FirstName)
        .Map(dest => dest.LastName, src => src.Name.LastName)
        .Map(dest => dest.Prefix, src => src.Name.Prefix)
        .Map(dest => dest.Emailaddress, src => src.EmailAddress.Emailaddress)
        .Map(dest => dest.PhoneNumber, src => src.MobileNumber.PhoneNumbers)
        .Map(dest => dest.CountryCode, src => src.MobileNumber.CountryCode)
        .Map(dest => dest.Address, src => src.Address.FullAddress)
        .Map(dest => dest.Country, src => src.Address.Country)
        .Map(dest => dest.City, src => src.Address.City)
        .Map(dest => dest.State, src => src.Address.State)
        .Map(dest => dest.StreetName, src => src.Address.StreetName)
        .Map(dest => dest.PostalCode, src => src.Address.PostalCode)
        .Map(dest => dest.Floor, src => src.Address.Floor)
        .Map(dest => dest.CommonMark, src => src.Address.CommonMark)
        .Map(dest => dest.Building, src => src.Address.Building).Config;

        public static TypeAdapterConfig GetUserConfiguration() => TypeAdapterConfig<AppUser, ProfileReadDto>
        .NewConfig()
        .Map(dest => dest.FirstName, src => src.Name)
        .Map(dest => dest.LastName, src => src.SurName)
        .Map(dest => dest.Emailaddress, src => src.Email)
        .Map(dest => dest.PhoneNumber, src => src.PhoneNumber).Config;
    }
}
