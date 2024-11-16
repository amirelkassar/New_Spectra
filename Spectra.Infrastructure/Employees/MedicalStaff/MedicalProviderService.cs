using MediatR;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Commands;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Dto;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services;
using Spectra.Application.Identities;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.MedicalPatientProfiles;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Infrastructure.Employees.MedicalStaff
{
    public class MedicalProviderService : IMedicalProviderService
    {
        private readonly IMediator _mediator;
        
                

        public MedicalProviderService(IMediator mediator )
        {
            _mediator = mediator;
          
        }
        public async Task<OperationResult<string>> CreateMedicalProvider(
      string firstName,
      string lastName,
      string? prefix,
      string phoneNumbers,
      string countryCode,
      string emailAddress,
      string country,
      string city,
      string nationalId,
      string academicDegree,
      string approvedBy,
      List<string> diagnoses,
      HumenGender humenGenders,
      string licenseNumber,
      JobTypes JobTypes
     /* List<IFormFile>? scientificDegree*/
       )
        {
            // Create value objects
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
          
            // Create the command
            var command = new CreateMedicalProviderCommand
            {
                Name = name,
                NationalId = nationalId,
                MobileNumber = phoneNumber,
                EmailAddress = email,
                Address = address,
                Academicdegree = academicDegree,
                ApprovedBy = approvedBy,
                Diagnoses = diagnoses,
                HumenGenders = humenGenders,
                LicenseNumber = licenseNumber,
               
                JobType = JobTypes
                
                //ScientificDegree = scientificDegree
            };

            // Send the command via mediator
            return await _mediator.Send(command);
        }


        public async Task<OperationResult<Unit>> DeleteMedicalProvider(string id)
        {
            var command = new DeleteMedicalProviderCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<IEnumerable<MedicalProvider>>> GetAllMedicalProviders()
        {
            var query = new GetAllMedicalProviderQuery();
            return await _mediator.Send(query);
        }
        public async Task<OperationResult<Application.Hellper.PaginatedResult<MedicalPatientProfile>>> GetAllClintsMedicalProviderCare(string id, GetAllClientsInMedicalProviderProfileQuery input)
        {
            var query = new GetAllClientsInMedicalProviderProfileQuery
            {
                Id = id,
                PageSize = input.PageSize,
                PageNumber = input.PageNumber
            };

            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<MedicalProvider>>> GetAllMedicalProviderSpecificServices()
        {
            var query = new GetAllMedicalProviderEarlyDetectionQuery();
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<MedicalProvider>> GetMedicalProviderById(string id)
        {
            var query = new GetMedicalProviderByIdQuery { Id = id };



            return await _mediator.Send(query);
        }

        public async Task<OperationResult<Unit>> UpdateMedicalProvider(string id, UpdateDoctorDto input)
        {
            var name = new Name { FirstName = input.FirstName, LastName = input.LastName, Prefix = input.Prefix };


            var phoneNumber = new PhoneNumber { PhoneNumbers = input.PhoneNumbers, CountryCode = input.CountryCode };

            var emailAddress = new EmailAddress { Emailaddress = input.Emailaddress };

            var address = new Address
            {
                Country = input.Country,

                City = input.City,

            };
            var command = new UpdateMedicalProviderCommand
            {
                Id = id,
                Name = name,
                NationalId = input.NationalId,
                MobileNumber = phoneNumber,
                EmailAddresse = emailAddress,
                Address = address,
                Academicdegree = input.Academicdegree,
                ApprovedBy = input.ApprovedBy,
                Diagnoses = input.Diagnoses,
                HumenGenders = input.HumenGenders,
                LicenseNumber = input.LicenseNumber,
                ScientificDegree = input.ScientificDegree,
               
                
            };

            return await _mediator.Send(command);
        }


    }

}

