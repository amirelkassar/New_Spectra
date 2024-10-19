﻿using MediatR;
using Spectra.Application.MedicalStaff.Specialists.Commands;
using Spectra.Application.MedicalStaff.Specialists.Dto;
using Spectra.Application.MedicalStaff.Specialists.Queries;
using Spectra.Application.MedicalStaff.Specialists.Services;
using Spectra.Domain.MedicalStaff.Specialists;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Infrastructure.Specialists
{
    public class SpecialistService : ISpecialistService
    {
        private readonly IMediator _mediator;


        public SpecialistService(IMediator mediator)
        {
            _mediator = mediator;

        }

        public async Task<OperationResult<string>> CreateSpecialist(CreateSpecialistDto input)
        {

            var name = new Name { FirstName = input.FirstName, LastName = input.LastName, Prefix = input.Prefix };


            var phoneNumber = new PhoneNumber { PhoneNumbers = input.PhoneNumbers, CountryCode = input.CountryCode };

            var emailAddress = new EmailAddress { Emailaddress = input.Emailaddress };

            var address = new Address
            {
                Country = input.Country,
                City = input.City,
            };

            var command = new CreateSpecialistCommand
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

        public async Task<OperationResult<Unit>> DeleteSpecialist(string id)
        {
            var command = new DeleteSpecialistCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<IEnumerable<Specialist>>> GetAllSpecialists()
        {
            var query = new GetAllSpecialistQuery();
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<Specialist>> GetSpecialistById(string id)
        {
            var query = new GetSpecialistByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<Unit>> UpdateSpecialist(string id, UpdateSpecialistDto input)
        {
            var name = new Name { FirstName = input.FirstName, LastName = input.LastName, Prefix = input.Prefix };

            var phoneNumber = new PhoneNumber { PhoneNumbers = input.PhoneNumbers, CountryCode = input.CountryCode };

            var emailAddress = new EmailAddress { Emailaddress = input.Emailaddress };

            var address = new Address
            {
                Country = input.Country,

                City = input.City,

            };

            var command = new UpdateSpecialistCommand
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
