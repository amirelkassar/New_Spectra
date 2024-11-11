using MediatR;
using Spectra.Application.Admin.Commands;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Contracts.Services;
using Spectra.Application.Employees.ManagementStaff.Service;
using Spectra.Application.Employees.MedicalStaff.Doctors.Services;
using Spectra.Application.Employees.MedicalStaff.Specialists.Services;
using Spectra.Application.Hellper;
using Spectra.Domain.Clients;
using Spectra.Domain.Contracts;
using Spectra.Domain.Employees.MedicalStaff.Doctor;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Infrastructure.Doctors;

namespace Spectra.Infrastructure.Admin
{
    public class AdminService : IAdminService
    {
        private readonly IMediator _mediator;
        private readonly IDoctorService _doctorService;
        private readonly ISpecialistService _specialistService;
        private readonly IManagementStaffService _managementStaffService;
        private readonly IContractService _contractService;


        public AdminService(IMediator mediator, IDoctorService doctorService, ISpecialistService specialistService, IManagementStaffService managementStaffService , IContractService contractService   )
        {

            _mediator = mediator;
            _doctorService = doctorService;
            _specialistService = specialistService;
            _managementStaffService = managementStaffService;
            _contractService = contractService;

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

        // Contract Qury
        public async Task<OperationResult<PaginatedResult<GetAllemployeeDto>>> GetAllContractsOfEployees(GetAllContractWithStatusQuery input)
        {
            // Create the query and pass pagination parameters

            var query = new GetAllContractWithStatusQuery
            {
                PageNumber = input.PageNumber,
                PageSize = input.PageSize,
            };
            return await _mediator.Send(query);
        }
        public async Task<OperationResult<IEnumerable<GetAllCopiesWithDataDto>>> GetAllCopiesOfContract(GetAllCopiesOFContractQuery input)
        {
            // Create the query and pass pagination parameters
            var query = new GetAllCopiesOFContractQuery
            {
                EmployeeId = input.EmployeeId
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
        public async Task<OperationResult<Unit>> UpdateContractFromAdmin(string id, UpdateContractToSendToEmployeeCommand input)
        {
            var command = new UpdateContractToSendToEmployeeCommand
            {
                id = id,
                HoursOfWork = input.HoursOfWork,
                DaysOfWork = input.DaysOfWork,
                ContractCase = input.ContractCase,
                EmployeeId = input.EmployeeId,
                Titel = input.Titel,
                Freelance = input.Freelance,
                SpectraTeam = input.SpectraTeam,


            };


            return await _mediator.Send(command);
        }

        public async Task<OperationResult<PaginatedResult<Doctor>>> GetAllDoctorsWithPagination(GetAllDoctorEmpQuery input)
        {
            var query = new GetAllDoctorEmpQuery() { PageNumber = input.PageNumber, PageSize = input.PageSize/*, Status = input.Status */};
            return await _mediator.Send(query);
        }
        public async Task<OperationResult<Unit>> UpdateContractStatus(string id, UpdateContractStatusCommand input )
        {
            var query = new UpdateContractStatusCommand
            {
                Id = id
                ,
                ContractCases=input.ContractCases

            };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<CollectAllEmployeeDto>> GetAllEmplyees(GetAllEmployeesQuery input)
        {
            var query = new GetAllEmployeesQuery() { PageNumber = input.PageNumber, PageSize = input.PageSize };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<string>> CreateEmplyee(CreateEmployeesDto input)
        {
            OperationResult<string> query;
            if (JobTypes.Doctor == input.JobTypes)
            {
                query = await _doctorService.CreateDoctor(
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
                    input.LicenseNumber
                
                   /* input.ScientificDegree*/);

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
            if (JobTypes.Accountant == input.JobTypes || JobTypes.secretary == input.JobTypes)
            {
                query = await _managementStaffService.CreateStaff(
                 input.FirstName,
                    input.LastName,
                    input.Prefix,
                    input.PhoneNumbers,
                    input.CountryCode,
                    input.Emailaddress,
                    input.Country,
                    input.City,
                    input.NationalId,
                    input.HumenGenders,
                    input.JobName,  
                    input.Qualifications,
                    input.TimeToJoin,
                    input.WorkingHours
                    , input.JobTypes
                );
                return query;
            }
            throw new RequestErrorException(" you Must Choose  the type Employee  ");


        }


        public async Task<OperationResult<GetEmployIdDto>> GetEmployeeByid(string id, JobTypes input)
        {
            GetEmployIdDto result;

            switch (input)
            {
                case JobTypes.Doctor:
                    var doctor = await _doctorService.GetDoctorById(id);
                    var doctorServices = await _contractService.GetAllDoctorServicesFromContract(doctor.Data.Id);


                    var freelanceServices = doctorServices.Data.SelectMany(x => x.Freelance).Select(y => new ServicesDataFromContractDto
                    {
                        ServicesData = y.ServicesData,
                        Price = y.Price
                    }).ToList();
                    var spectraTeamServices = doctorServices.Data.SelectMany(x => x.SpectraTeam).Select(y=>new ServicesDataFromContractDto {ServicesData= y.ServicesData,
                      Price = y.Price}).ToList();


                    result = new GetEmployIdDto
                    {
                        Id = doctor.Data.Id,
                        FirstName = doctor.Data.Name.FirstName,
                        LastName = doctor.Data.Name.LastName,
                        PhoneNumbers = doctor.Data.MobileNumber.PhoneNumbers,
                        CountryCode = doctor.Data.MobileNumber.CountryCode,
                        Emailaddress = doctor.Data.EmailAddress.Emailaddress,
                        Country = doctor.Data.Address.Country,
                        City = doctor.Data.Address.City,
                        NationalId = doctor.Data.NationalId,
                        Academicdegree = doctor.Data.Academicdegree,
                        ApprovedBy = doctor.Data.ApprovedBy,
                        Diagnoses = doctor.Data.Diagnoses,
                        HumenGenders = doctor.Data.HumenGenders,
                        LicenseNumber = doctor.Data.LicenseNumber,
                        FreelanceServices = freelanceServices,
                        TeamSpectraServices= spectraTeamServices

                    };
            
                    //Attachments = doctor.Data.AttachmentPath
           
                    break;

                case JobTypes.Specialist:
                    var specialist = await _specialistService.GetSpecialistById(id);
                    result = new GetEmployIdDto
                    {
                        Id = specialist.Data.Id,
                        FirstName = specialist.Data.Name.FirstName,
                        LastName = specialist.Data.Name.LastName,
                        Prefix = specialist.Data.Name.Prefix,
                        PhoneNumbers = specialist.Data.MobileNumber.PhoneNumbers,
                        CountryCode = specialist.Data.MobileNumber.CountryCode,
                        Emailaddress = specialist.Data.EmailAddress.Emailaddress,
                        Country = specialist.Data.Address.Country,
                        City = specialist.Data.Address.City,
                        NationalId = specialist.Data.NationalId,
                        Academicdegree = specialist.Data.Academicdegree,
                        ApprovedBy = specialist.Data.ApprovedBy,
                        Diagnoses = specialist.Data.Diagnoses,
                        HumenGenders = specialist.Data.HumenGenders,
                        LicenseNumber = specialist.Data.LicenseNumber,
                        Attachments = specialist.Data.AttachmentPath
                    };
                    break;

                case JobTypes.Accountant:
                case JobTypes.secretary:
                    var staff = await _managementStaffService.GetStaffById(id);
                    result = new GetEmployIdDto
                    {
                        Id = staff.Data.Id,
                        FirstName = staff.Data.Name.FirstName,
                        LastName = staff.Data.Name.LastName,
                        Prefix = staff.Data.Name.Prefix,
                        PhoneNumbers = staff.Data.MobileNumber.PhoneNumbers,
                        CountryCode = staff.Data.MobileNumber.CountryCode,
                        Emailaddress = staff.Data.EmailAddress.Emailaddress,
                        Country = staff.Data.Address.Country,
                        City = staff.Data.Address.City,
                        NationalId = staff.Data.NationalId,
                        HumenGenders = staff.Data.HumenGenders,
                        JobName = staff.Data.JobName,
                        Qualifications = staff.Data.Qualifications,
                        TimeToJoin = staff.Data.TimeToJoin,
                        WorkingHours = staff.Data.WorkingHours
                    };
                    break;

                default:
                    throw new RequestErrorException("You must choose a valid employee type.");
            }

            // Return the constructed result as an OperationResult
            return OperationResult<GetEmployIdDto>.Success(result);
        }

    

    }
}
