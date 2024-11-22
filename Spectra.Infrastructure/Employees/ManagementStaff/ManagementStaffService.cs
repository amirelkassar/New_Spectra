using MediatR;
using Spectra.Application.Employees.ManagementStaff.Commands;
using Spectra.Application.Employees.ManagementStaff.Dto;
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

        public async Task<OperationResult> CreateAsync(CreateStaffDto input)
        {
      
            var name = new Name
            {
                FirstName = input.FirstName,
                LastName = input.LastName,
            };

            var staffNumber = new PhoneNumber
            {
                PhoneNumbers = input.PhoneNumber,
                CountryCode = input.CountryCode
            };

            var email = new EmailAddress
            {
                Emailaddress = input.EmailAddress,
            };

            var address = new Address
            {
                Country = input.Country,
                City = input.City,
                Building=input.Building,
                CommonMark=input.CommonMark,
                Floor=input.Floor,
                PostalCode=input.PostalCode,
                State = input.State,
                StreetName = input.StreetName
            };

            var command = new CreateManagementStaffCommand
            {
                Name = name,
                ExperienceYears= input.ExperienceYears,
                NationalId = input.NationalId,
                JobDescription= input.NationalId,
                Qualification= input.NationalId,
                MobileNumber = staffNumber,
                EmailAddress = email,
                HumenGender = input.HumenGender,
                Address = address,
                JobName = input.NationalId,
                WorkingHours = input.WorkingHours,
                JobType = input.JobType,
                Passowrd= input.Passowrd,
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

        public async Task<OperationResult> UpdateAsync(UpdateStaffDto input)
        {
            var name = new Name
            {
                FirstName = input.FirstName,
                LastName = input.LastName,
            };

            var staffNumber = new PhoneNumber
            {
                PhoneNumbers = input.PhoneNumber,
                CountryCode = input.CountryCode
            };

            var email = new EmailAddress
            {
                Emailaddress = input.EmailAddress,
            };

            var address = new Address
            {
                Country = input.Country,
                City = input.City,
                Building = input.Building,
                CommonMark = input.CommonMark,
                Floor = input.Floor,
                PostalCode = input.PostalCode,
                State = input.State,
                StreetName = input.StreetName
            };

            var command = new UpdateManagementStaffCommand
            {
                Id = input.Id,
                Name = name,
                ExperienceYears = input.ExperienceYears,
                NationalId = input.NationalId,
                JobDescription = input.NationalId,
                Qualification = input.NationalId,
                MobileNumber = staffNumber,
                EmailAddress = email,
                HumenGender = input.HumenGender,
                Address = address,
                JobName = input.NationalId,
                WorkingHours = input.WorkingHours,
                JobType = input.JobType,
            };

            return await _mediator.Send(command);
        }

    }
}




