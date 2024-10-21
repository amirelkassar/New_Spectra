using DocumentFormat.OpenXml.Drawing;
using DocumentFormat.OpenXml.Wordprocessing;
using MediatR;
using Spectra.Application.Admin.Commands;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Clients.DTO;
using Spectra.Application.Clients.DTOs;
using Spectra.Application.Hellper;
using Spectra.Application.MedicalStaff.Doctors.Commands;
using Spectra.Application.MedicalStaff.Doctors.Dto;
using Spectra.Application.MedicalStaff.Doctors.Services;
using Spectra.Application.MedicalStaff.Specialists.Dto;
using Spectra.Application.MedicalStaff.Specialists.Services;
using Spectra.Domain.Clients;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;
using Spectra.Infrastructure.Doctors;

namespace Spectra.Infrastructure.Admin
{
    public class AdminService : IAdminService
    {
        private readonly IMediator _mediator;
        private readonly IDoctorService _doctorService;
        private readonly ISpecialistService _specialistService;
        public AdminService(IMediator mediator, IDoctorService doctorService, ISpecialistService specialistService)
        {
            _mediator = mediator;
            _doctorService = doctorService;
            _specialistService = specialistService;

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

        //public async Task<OperationResult<Unit>> UpdateDoctorEmploymentStatus(string id, UpdateDoctorEmploymentStatusCommand input)
        //{
        //    var query = new UpdateDoctorEmploymentStatusCommand
        //    {
        //        Ids = input.Ids,
        //        Status = input.Status
        //    };
        //    return await _mediator.Send(query);
        //}
        //public async Task<OperationResult<Unit>> UpdateDoctorsEmploymentStatus( UpdateDoctorEmploymentStatusCommand input)
        //{
        //    var query = new UpdateDoctorEmploymentStatusCommand
        //    {
        //        Ids = input.Ids,
        //        Status = input.Status
        //    };
        //    return await _mediator.Send(query);
        //}

        public async Task<OperationResult<PaginatedResult<Doctor>>> GetAllDoctorsWithPagination(GetAllDoctorEmpQuery input)
        {
            var query = new GetAllDoctorEmpQuery() { PageNumber = input.PageNumber, PageSize = input.PageSize/*, Status = input.Status */};
            return await _mediator.Send(query);
        }
    

        public async Task<OperationResult<CollectAllEmployeeDto>> GetAllEmplyees()
        {
            var query = new GetAllEmployeesQuery();
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<string>> CreateEmplyee(CreateEmployeesDto input)
        {
            OperationResult<string> query;
            if (JobTypes.Doctor == input.JobTypes)
            {
                query = await _doctorService.CreateDoctor(input.FirstName,
                    input.LastName,
                    input.Prefix,
                    input.PhoneNumbers,
                    input.CountryCode,
                    input.Emailaddress,
                    input.Country,
                    input.City,
                    input.NationalId,
                    input.Academicdegree,
                    input.ApprovedBy,
                    input.Diagnoses,
                    input.HumenGenders,
                    input.LicenseNumber,
                    input.ScientificDegree);

                return query;
            }

            if (JobTypes.Specialist == input.JobTypes)
            {
                query = await _specialistService.CreateSpecialist(
                 input.FirstName,
                    input.LastName,
                    input.Prefix,
                    input.PhoneNumbers,
                    input.CountryCode,
                    input.Emailaddress,
                    input.Country,
                    input.City,
                    input.NationalId,
                    input.Academicdegree,
                    input.ApprovedBy,
                    input.Diagnoses,
                    input.HumenGenders,
                    input.LicenseNumber,
                    input.ScientificDegree);
                return query;
            }

            return null;

        }

    }
}
