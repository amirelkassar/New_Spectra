using MediatR;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Hellper;
using Spectra.Application.MedicalStaff.Doctors.Commands;
using Spectra.Application.MedicalStaff.Doctors.Dto;
using Spectra.Application.MedicalStaff.Doctors.Queries;
using Spectra.Application.MedicalStaff.Doctors.Services;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Infrastructure.Doctors
{
    public class DoctorService : IDoctorService
    {
        private readonly IMediator _mediator;


        public DoctorService(IMediator mediator)
        {
            _mediator = mediator;

        }

        public async Task<OperationResult<string>> CreateDoctor(CreateDoctorDto input)
        {

            var name = new Name { FirstName = input.FirstName, LastName = input.LastName, Prefix = input.Prefix };

            var phoneNumber = new PhoneNumber { PhoneNumbers = input.PhoneNumbers, CountryCode = input.CountryCode };

            var emailAddress = new EmailAddress { Emailaddress = input.Emailaddress };

            var address = new Address
            {
                Country = input.Country,
                City = input.City,

            };

            var command = new CreateDoctorCommand
            {
                Name = name,
                NationalId = input.NationalId,
                MobileNumber = phoneNumber,
                EmailAddress = emailAddress,
                Address = address,
                Academicdegree = input.Academicdegree,
                ApprovedBy = input.ApprovedBy,
                Diagnoses = input.Diagnoses,
                HumenGenders = input.HumenGenders,
                LicenseNumber = input.LicenseNumber,
                ScientificDegree = input.ScientificDegree

            };

            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteDoctor(string id)
        {
            var command = new DeleteDoctorCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<IEnumerable<Doctor>>> GetAllDoctors()
        {
            var query = new GetAllDoctorQuery();
            return await _mediator.Send(query);
        }

   
        public async Task<OperationResult<IEnumerable<Doctor>>> GetAllDoctorSpecificServices()
        {
            var query = new GetAllDoctorEarlyDetectionQuery();
            return await _mediator.Send(query);
        }



        public async Task<OperationResult<Doctor>> GetDoctorById(string id)
        {
            var query = new GetDoctorByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<Unit>> UpdateDoctor(string id, UpdateDoctorDto input)
        {
            var name = new Name { FirstName = input.FirstName, LastName = input.LastName, Prefix = input.Prefix };


            var phoneNumber = new PhoneNumber { PhoneNumbers = input.PhoneNumbers, CountryCode = input.CountryCode };

            var emailAddress = new EmailAddress { Emailaddress = input.Emailaddress };

            var address = new Address
            {
                Country = input.Country,

                City = input.City,

            };
            var command = new UpdateDoctorCommand
            {

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
                ScientificDegree = input.ScientificDegree

            };

            return await _mediator.Send(command);
        }


    }
}

