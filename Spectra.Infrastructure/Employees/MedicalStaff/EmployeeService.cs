using MediatR;
using Spectra.Application.Employees.Commands;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Employees.Queries;
using Spectra.Application.Employees.Services;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Employees.MedicalStaff
{
    internal class EmployeeService(IMediator mediator) : IEmployeeService
    {
        private readonly IMediator _mediator = mediator;

        public async Task<OperationResult> CreateAsync(CreateEmployeeDto input)
        {
            var command = new CreateEmployeeCommand
            {
                AcademicDegree = input.AcademicDegree,
                ApprovedBy = input.ApprovedBy,
                ExperienceYears = input.ExperienceYears,
                HumenGender = input.HumenGender,
                JobDescription = input.JobDescription,
                JobName = input.JobName,
                JobType = input.JobType,
                LicenseNumber = input.LicenseNumber,
                NationalId = input.NationalId,
                Qualification = input.Qualification,
                Name = new Domain.ValueObjects.Name
                {
                    FirstName = input.FirstName,
                    LastName = input.LastName,
                    Prefix = input.Prefix,
                },
                MobileNumber = new Domain.ValueObjects.PhoneNumber
                {
                    CountryCode = input.CountryCode,
                    PhoneNumbers = input.PhoneNumber,
                },
                Address = new Domain.ValueObjects.Address
                {
                    Country = input.Country,
                    City = input.City,
                    Building = input.Building,
                    CommonMark = input.CommonMark,
                    Floor = input.Floor,
                    PostalCode = input.PostalCode,
                    State = input.State,
                    StreetName = input.StreetName
                },
                EmailAddress = new Domain.ValueObjects.EmailAddress
                {
                    Emailaddress = input.Emailaddress
                },
                MainSpecializationId = input.MainSpecializationId,
                MainSpecializationName = input.MainSpecializationName,
                Passowrd = input.Password,
                SectionId = input.SectionId,
                SectionName = input.SectionName,
                Services = input.Services,
                Specializations = input.Specializations,
                WorkingHours=input.WorkingHours
            };
            var response = await _mediator.Send(command);
            return response;
        }

        public async Task<OperationResult> CreateAttachmentAsync(CreateAttachmentCommand input)
        {
            var response = await _mediator.Send(input);
            return response;
        }

        public async Task<OperationResult> DeleteAsync(string id)
        {
            var response = await _mediator.Send(new DeleteEmployeeCommand
            {
                Id = id
            });
            return response;
        }

        public async Task<OperationResult> DeleteAttachmentAsync(Guid id, string empId)
        {
            var response = await _mediator.Send(new DeleteAttachmentCommand
            {
                DocumentId = id,
                EmpId= empId
            });
            return response;
        }

        public async Task<OperationResult> GetAsync(GetEmployeeById input)
        {
            var response=await _mediator.Send(input);
            return response;
        }

        public async Task<OperationResult> GetEmployeeListAsync(GetEmployeeListQuery input)
        {
            var response = await _mediator.Send(input);
            return response;
        }

        public async Task<OperationResult> GetMedicalProviderListAsync(GetMedicalProvderListQuery input)
        {
            var response = await _mediator.Send(input);
            return response;
        }

        public async Task<OperationResult> UpdateAttachmentAsync(UpdateAttachmentCommand input)
        {
            var response = await _mediator.Send(input);
            return response;
        }

        public async Task<OperationResult> UpdateEmployeeAsync(UpdateEmployeeDto input)
        {
            var command = new UpdateEmployeeCommand
            {
                Id = input.Id,
                AcademicDegree = input.AcademicDegree,
                ApprovedBy = input.ApprovedBy,
                ExperienceYears = input.ExperienceYears,
                HumenGender = input.HumenGender,
                JobDescription = input.JobDescription,
                JobName = input.JobName,
                JobType = input.JobType,
                LicenseNumber = input.LicenseNumber,
                NationalId = input.NationalId,
                Qualification = input.Qualification,
                Name = new Domain.ValueObjects.Name
                {
                    FirstName = input.FirstName,
                    LastName = input.LastName,
                    Prefix = input.Prefix,
                },
                MobileNumber = new Domain.ValueObjects.PhoneNumber
                {
                    CountryCode = input.CountryCode,
                    PhoneNumbers = input.PhoneNumber,
                },
                Address = new Domain.ValueObjects.Address
                {
                    Country = input.Country,
                    City = input.City,
                    Building = input.Building,
                    CommonMark = input.CommonMark,
                    Floor = input.Floor,
                    PostalCode = input.PostalCode,
                    State = input.State,
                    StreetName = input.StreetName
                },
                EmailAddress = new Domain.ValueObjects.EmailAddress
                {
                    Emailaddress = input.Emailaddress
                },
                WorkingHours=input.WorkingHours
            };
            var response = await _mediator.Send(command);
            return response;
        }

        public async Task<OperationResult> UpdateMedicallDataAsync(UpdateMedicalDataCommand input)
        {
            var response = await _mediator.Send(input);
            return response;
        }
    }
}
