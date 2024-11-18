using MediatR;
using Spectra.Application.ChatHub.Services;
using Spectra.Application.Employees.ManagementStaff.Commands;
using Spectra.Application.Employees.ManagementStaff.Queries;
using Spectra.Application.Employees.ManagementStaff.Service;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees.ManagementStaff;
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


        public async Task<OperationResult<string>> CreateStaff(
       string firstName,
       string lastName,
       string? prefix,
       string phoneNumbers,
       string countryCode,
       string emailAddress,
       string country,
       string city,
       string nationalId,
       HumenGender humenGenders,
       string jobName,
       string qualifications,
       DateOnly? timeToJoin,
       double? workingHours,
       JobTypes jobType,
        string Passowrd, 
        string confirmationPassword

     )
        {
      
            var name = new Name
            {
                FirstName = firstName,
                LastName = lastName,
                Prefix = prefix
            };

            var phoneNumber = new PhoneNumber
            {
                PhoneNumbers = phoneNumbers,
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
                NationalId = nationalId,
                MobileNumber = phoneNumber,
                EmailAddress = email,
                HumenGenders = humenGenders,
                Address = address,
                JobName = jobName,
                Qualifications = qualifications,
                TimeToJoin = timeToJoin,
                WorkingHours = workingHours,
                JobType = jobType,
           
            };
            return await _mediator.Send(command);
        }



        public async Task<OperationResult<Unit>> DeleteStaff(string id)
        {
            var command = new DeleteManagementStaffCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<IEnumerable<Staff>>> GetAllStaff()
        {
            var query = new GetAllManagementStaffQuery();
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<Staff>> GetStaffById(string id)
        {
            var query = new GetManagementStaffByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<Unit>> UpdateEmployees(string id, string firstName,
       string lastName,
       string? prefix,
       string phoneNumbers,
       string countryCode,
       string emailAddress,
       string country,
       string city,
       string nationalId,
       HumenGender humenGenders,
      string jobName,
      string qualifications,
      DateOnly? timeToJoin,
      double? workingHours,
      JobTypes jobType
      
      )
        {
            var name = new Name
            {
                FirstName = firstName,
                LastName = lastName,
                Prefix = prefix
            };

            var phoneNumber = new PhoneNumber
            {
                PhoneNumbers = phoneNumbers,
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

                Name = name,
                NationalId = nationalId,
                MobileNumber = phoneNumber,
                EmailAddrese = email,
                JobName = jobName,
                HumenGenders = humenGenders,
                Qualifications = qualifications,
                TimeToJoin = timeToJoin,
                WorkingHours = workingHours,
                JobType = jobType,
                Address = address
                ,
            };

            return await _mediator.Send(command);
        }


    }
}




