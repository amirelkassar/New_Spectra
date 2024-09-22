using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Clients.Commands;
using Spectra.Application.Clients.DTO;
using Spectra.Application.Clients.DTOs;
using Spectra.Application.Clients.Queries;
using Spectra.Application.Clients.Services;
using Spectra.Application.Interfaces;
using Spectra.Domain.Clients;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;
using System.Security.Claims;

namespace Spectra.Infrastructure.Clients
{
    public class ClientService : IClientService
    {
        private readonly IMediator _mediator;
        private readonly ICurrentUser _currentUser;

        public ClientService(IMediator mediator, ICurrentUser currentUser)
        {
            _mediator = mediator;

            _currentUser = currentUser;
        }

        public async Task<OperationResult<string>> CreateClient(CreateNormalClientDto input)
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
                Organization = organization,
                medicalServiceProvider = medicalServiceProvider

            };

            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteClient(string id)
        {
            var command = new DeleteClientCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<IEnumerable<Client>>> GetAllClients()
        {
            var query = new GetAllClientsQuery();
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<Client>> GetClientById(string id)
        {
            var query = new GetClientByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<Unit>> UpdateClient(string id, UpdateClientDto input)
        {
            var userId = _currentUser.Id;


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

            var command = new UpdateClientCommand
            {
                Id = id,
                Name = name,
                NationalId = input.NationalId,
                PhoneNumber = phoneNumber,
                ClientType = input.ClientType,
                UserId = userId,
                EmailAddress = emailAddress,
                Address = address,
                Organization = organization,
                MedicalServiceProvider = medicalServiceProvider

            };
            return await _mediator.Send(command);
        }
    }
}

