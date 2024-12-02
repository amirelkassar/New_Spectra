using Mapster;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Employees.Dto
{
    public class EmployeeListDto
    {
        public EmployeeListDto()
        {
            


        }
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Prefix { get; set; }
        public HumenGender HumenGender { get; set; }
        public string Emailaddress { get; set; }
        public string MainSpecializationId { get; set; }
        public string MainSpecializationEnName { get; set; }
        public string MainSpecializationArName { get; set; }
        public string? SectionId { get; set; }
        public string? SectionEnName { get; set; }
        public string? SectionArEnName { get; set; }
        public double? WorkingHours { get; set; }
        public string JobName { get; set; }
        public JobTypes JobType { get; set; }
        public int? ExperienceYears { get; set; }
        public string? Qualification { get; set; }
        public string? JobDescription { get; set; }
        public string UserImage { get; set; }

        public static TypeAdapterConfig GetConfigurations() => TypeAdapterConfig<Employee, EmployeeListDto>
               .NewConfig()
               .Map(dest => dest.FirstName, src => src.Name.FirstName)
               .Map(dest => dest.LastName, src => src.Name.LastName)
               .Map(dest => dest.Prefix, src => src.Name.Prefix)
               .Map(dest => dest.Emailaddress, src => src.EmailAddress.Emailaddress).Config;

    }
}
