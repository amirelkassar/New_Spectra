using MediatR;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Commands;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Dto;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Employees.MedicalStaff
{
    internal class AdminMedicalProviderService(IMediator mediator) : IAdminMedicalProviderService
    {
        private readonly IMediator _mediator = mediator;

        public async Task<OperationResult> CreateAsync(CreateMedicalProviderDto input)
        {
            var command = new CreateMedicalProviderCommand
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
                MainSpecializationId=input.MainSpecializationId,
                MainSpecializationName=input.MainSpecializationName,
                Passowrd = input.Password,
                SectionId = input.SectionId,
                SectionName = input.SectionName,
                Services = input.Services,
                Specializations = input.Specializations
            };
            var response = await _mediator.Send(command);
            return response;
        }

        public async Task<OperationResult> DeleteAsync(string id)
        {
            var response = await _mediator.Send(new DeleteMedicalProviderCommand
            {
                Id = id
            });
            return response;
        }

        public async Task<OperationResult> GetAsync(string id)
        {
            var response=await _mediator.Send(new GetMedicalProviderById { Id = id });
            return response;
        }

        public async Task<OperationResult> GetListAsync(GetMedicalProviderListQuery input)
        {
            var response = await _mediator.Send(input);
            return response;
        }

        public async Task<OperationResult> UpdateMedicallDataAsync(UpdateMedicalDataCommand input)
        {
            var response = await _mediator.Send(input);
            return response;
        }

        public async Task<OperationResult> UpdatePersonalDataAsync(UpdateMedicalProviderDto input)
        {
            var updateCommand = new UpdateMedicalProviderCommand
            {
                Id=input.Id,
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
                Name=new Domain.ValueObjects.Name
                {
                    FirstName = input.FirstName,
                    LastName = input.LastName,
                    Prefix=input.Prefix,
                },
                MobileNumber=new Domain.ValueObjects.PhoneNumber
                {
                    CountryCode = input.CountryCode,
                    PhoneNumbers=input.PhoneNumber,
                },
                Address=new Domain.ValueObjects.Address
                {
                    Country = input.Country,
                    City = input.City,
                    Building = input.Building,
                    CommonMark=input.CommonMark,
                    Floor = input.Floor,
                    PostalCode = input.PostalCode,
                    State = input.State,
                    StreetName = input.StreetName
                },
                EmailAddress=new Domain.ValueObjects.EmailAddress
                {
                    Emailaddress=input.Emailaddress
                }
            };

            var response = await _mediator.Send(updateCommand);
            return response;
        }
    }
}
