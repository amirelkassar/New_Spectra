using MediatR;
using Spectra.Application.Employees.ManagementStaff.Commands;
using Spectra.Application.Employees.ManagementStaff.Queries;
using Spectra.Application.Employees.ManagementStaff.Service;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Infrastructure.Employees.ManagementStaff
{
    public class ManagementStaffService : IManagementStaffService
    {

        private readonly IMediator _mediator;
        public ManagementStaffService(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<OperationResult> CreateAsync(string firstName,
            string lastName,
            string? prefix,
            string phoneNumber,
            string countryCode,
            string emailAddress,
            int? experienceYears,
            string country,
            string city,
            string nationalId,
            HumenGender humenGender,
            JobTypes jobType,
            string jobName,
            double? workingHours,
            string jobDescription,
            string qualification,
            string passowrd)
        {
      
            var name = new Name
            {
                FirstName = firstName,
                LastName = lastName,
                Prefix = prefix
            };

            var staffNumber = new PhoneNumber
            {
                PhoneNumbers = phoneNumber,
                CountryCode = countryCode
            };

            var email = new EmailAddress
            {
                Emailaddress = emailAddress
            };

            var address = new Address
            {
                Country = country,
                City = city
            };

            var command = new CreateManagementStaffCommand
            {
                Name = name,
                ExperienceYears= experienceYears,
                NationalId = nationalId,
                JobDescription= jobDescription,
                Qualification= qualification,
                MobileNumber = staffNumber,
                EmailAddress = email,
                HumenGender = humenGender,
                Address = address,
                JobName = jobName,
                WorkingHours = workingHours,
                JobType = jobType,
                Passowrd= passowrd,
            };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult> DeleteAsync(string id)
        {
            var command = new DeleteManagementStaffCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult> GetAllAsync(GetAllManagementStaffQuery input)
        {
            var query = new GetAllManagementStaffQuery();
            return await _mediator.Send(query);
        }

        public async Task<OperationResult> GetByIdAsync(string id)
        {
            var query = new GetManagementStaffByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult> UpdateAsync(string id,
            string firstName,
            string lastName,
            string? prefix,
            string phoneNumber,
            string countryCode,
            string emailAddress,
            int? experienceYears,
            string country,
            string city,
            string nationalId,
            HumenGender humenGender,
            JobTypes jobType,
            string jobName,
            double? workingHours,
            string jobDescription,
            string qualification,
            string passowrd)
        {
            var name = new Name
            {
                FirstName = firstName,
                LastName = lastName,
                Prefix = prefix
            };

            var staffNumber = new PhoneNumber
            {
                PhoneNumbers = phoneNumber,
                CountryCode = countryCode
            };

            var email = new EmailAddress
            {
                Emailaddress = emailAddress
            };

            var address = new Address
            {
                Country = country,
                City = city
            };

            var command = new UpdateManagementStaffCommand
            {
                Id = id,
                Name = name,
                ExperienceYears = experienceYears,
                NationalId = nationalId,
                JobDescription = jobDescription,
                Qualification = qualification,
                MobileNumber = staffNumber,
                EmailAddress = email,
                HumenGender = humenGender,
                Address = address,
                JobName = jobName,
                WorkingHours = workingHours,
                JobType = jobType
            };

            return await _mediator.Send(command);
        }

    }
}




