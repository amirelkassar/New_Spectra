using MediatR;
using Spectra.Application.Admin.Commands;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Clients.DTOs;
using Spectra.Application.Hellper;
using Spectra.Domain.Clients;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Infrastructure.Admin
{
    public class AdminService : IAdminService
    {
        private readonly IMediator _mediator;
        public AdminService(IMediator mediator)
        {
            _mediator = mediator;

        }
        public async Task<OperationResult<PaginatedResult<Appointment>>> GetAllAppointmentsDoctorAsync(GetAllAppointmentDoctorQuery input)
        {
            // Create the query and pass pagination parameters
            var query = new GetAllAppointmentDoctorQuery
            {
                PageNumber = input.PageNumber,
                PageSize = input.PageSize,
            };
            return await _mediator.Send(query);
        }

        //
        public async Task<OperationResult<PaginatedResult<Client>>> GetAllClientsAsyncWithPagination(GetAllClientsQuery input)
        {
            // Create the query and pass pagination parameters
            var query = new GetAllClientsQuery
            {
                PageNumber = input.PageNumber,
                PageSize = input.PageSize,
            };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<Unit>> UpdateDoctorEmploymentStatus(string id, UpdateDoctorEmploymentStatusCommand input)
        {
            var query = new UpdateDoctorEmploymentStatusCommand
            {
                Ids = input.Ids,
                Status = input.Status
            };
            return await _mediator.Send(query);
        }
        public async Task<OperationResult<Unit>> UpdateDoctorsEmploymentStatus(UpdateDoctorEmploymentStatusCommand input)
        {
            var query = new UpdateDoctorEmploymentStatusCommand
            {
                Ids = input.Ids,
                Status = input.Status
            };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<PaginatedResult<Doctor>>> GetAllDoctorsWithPagination(GetAllDoctorEmpQuery input)
        {
            var query = new GetAllDoctorEmpQuery() { PageNumber = input.PageNumber, PageSize = input.PageSize, Status = input.Status };
            return await _mediator.Send(query);
        }
        public async Task<OperationResult<string>> CreateClientByAdmin(CreateNormalClientDto input)
        {
            //var  userId = _currentUser.Id;



            var name = new Name { FirstName = input.FirstName, LastName = input.LastName, Prefix = input.Prefix };


            var phoneNumber = new PhoneNumber { PhoneNumbers = input.PhoneNumbers, CountryCode = input.CountryCode };

            var emailAddress = new EmailAddress { Emailaddress = input.Emailaddress };

            var address = new Address
            {
                Country = input.Country,
                City = input.City,
                State = input.State,
                StreetName = input.StreetName,
                Building = input.Building,
                PostalCode = input.PostalCode,
                Floor = input.Floor,
                CommonMark = input.CommonMark
            };
            // Organization and MedicalServiceProvider can be null, so they are optional
            Organization organization = null;

            if (input.Organization != null)
            {
                organization = new Organization
                {
                    Name = input.Organization.Name,
                    PhoneNumber = input.Organization.PhoneNumber,
                    Industry = input.Organization.Industry,
                    TaxNumber = input.Organization.TaxNumber,
                    EmailAddress = input.Organization.EmailAddress,
                    Website = input.Organization.Website,
                    RegistrationNumber = input.Organization.RegistrationNumber,
                    Address = input.Organization.Address,
                    LogoPath = input.Organization.LogoPath,
                    LandLine = input.Organization.LandLine,
                    OrganizationType = input.Organization.OrganizationType
                };
            }

            MedicalServiceProvider medicalServiceProvider = null;
            if (input.MedicalServiceProvider != null)
            {
                medicalServiceProvider = new MedicalServiceProvider
                {

                    Name = input.MedicalServiceProvider.Name,
                    PhoneNumber = input.MedicalServiceProvider.PhoneNumber,
                    Industry = input.MedicalServiceProvider.Industry,
                    TaxNumber = input.MedicalServiceProvider.TaxNumber,
                    EmailAddress = input.MedicalServiceProvider.EmailAddress,
                    Website = input.MedicalServiceProvider.Website,
                    RegistrationNumber = input.MedicalServiceProvider.RegistrationNumber,
                    Address = input.MedicalServiceProvider.Address,
                    LogoPath = input.MedicalServiceProvider.LogoPath,
                    LandLine = input.MedicalServiceProvider.LandLine,
                    LegalPermissionNumber = input.MedicalServiceProvider.LegalPermissionNumber
                };
            }
            var command = new CreateClientCommand
            {

                Name = name,
                NationalId = input.NationalId,
                PhoneNumber = phoneNumber,
                ClientType = input.ClientType,
                //UserId = userId,
                EmailAddress = emailAddress,
                Address = address,
                Organization = organization

            };

            return await _mediator.Send(command);
        }



    }
}
