using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Admin.Commands;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Clients.DTO;
using Spectra.Application.Clients.DTOs;
using Spectra.Application.Clients.Services;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Contracts.Services;
using Spectra.Application.Employees.ManagementStaff.Commands.Dto;
using Spectra.Application.Employees.ManagementStaff.Service;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Dto;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services;
using Spectra.Application.Employees.MedicalTeams.Commands;
using Spectra.Application.Employees.MedicalTeams.Services;
using Spectra.Domain.Shared.Enums;
using Spectra.Infrastructure.Admin;


namespace Spectra.WebAPI.Areas.Admin.Controllers
{
    [Area("Admin")]

    public class AdminController : BassAdminController
    {
        private readonly IAdminService _adminService;
        private readonly IClientService _clientService;
        private readonly IMedicalProviderService _doctorService;
        private readonly IContractService _contractService;
        private readonly IManagementStaffService _managementStaffService;
        private readonly IMedicalTeamService _medicalTeamService;

        public AdminController(IAdminService adminService, IClientService clientService, IMedicalProviderService doctorService, IContractService contractService,
            IManagementStaffService managementStaffService, IMedicalTeamService medicalTeamService )
        {
            _adminService = adminService;
            _clientService = clientService;
            _contractService = contractService;
            _doctorService = doctorService; 
            _managementStaffService = managementStaffService;
            _medicalTeamService=medicalTeamService;
        }

        [HttpGet("GetAllDoctors")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllDoctors([FromQuery] GetAllDoctorEmpQuery input)
        {
            var appointmenties = await _adminService.GetAllDoctorsWithPagination(input);
            return Ok(appointmenties);
        }


        [HttpGet("GetAllEmployees")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllEmployees([FromQuery] GetAllEmployeesQuery input)
        {
            var appointmenties = await _adminService.GetAllEmplyees(input);
            return Ok(appointmenties);
        }

        [HttpGet("GetAllContracts")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllContracts([FromQuery] GetAllContractWithStatusQuery input)
        {
            var contract = await _adminService.GetAllContractsOfEployees(input);
            return Ok(contract);
        }

        [HttpGet("GetAllCopiesOFContract")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllCopiesOFContract([FromQuery] GetAllCopiesOFContractQuery input)
        {
            var contract = await _contractService.GetAllCopiesOfContract(input);
            return Ok(contract);
        }

        [HttpGet("AppointmentsDoctor")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllAppointmentsDoctor([FromQuery] GetAllAppointmentDoctorQuery input)
        {

            var appointmenties = await _adminService.GetAllAppointmentsDoctorAsync(input);
            return Ok(appointmenties);
        }
        [HttpGet("Client/id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneClient(string id)
        {
            var clienties = await _clientService.GetClientById(id);
            return Ok(clienties);
        }
        [HttpGet("GetDoctor/id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneDoctor(string id)
        {
            var Doctories = await _doctorService.GetMedicalProviderById(id);
            return Ok(Doctories);
        }


        [HttpPost("CreateClient")]
        [AllowAnonymous]
        public async Task<ActionResult> CreateNormalClient(CreateNormalClientDto input)
        {

            var clienties = await _clientService.CreateClient(input);
            return Ok(clienties);
        }

        [HttpPost("CreateEmployee")]
        [AllowAnonymous]
        public async Task<ActionResult> CreateEmployees([FromForm] CreateEmployeesDto input)
        {

            var employees = await _adminService.CreateEmplyee(input);
            return Ok(employees);
        }
        [HttpPut("RefuesContract/id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateRefuesContract(string id, UpdateContractStatusCommand input)
        {

            var employees = await _adminService.UpdateContractStatus(id, input);
            return Ok(employees);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateClient(string id, UpdateClientDto input)
        {

            var client = await _clientService.UpdateClient(id, input);

            return Ok(client);
        }


        [HttpPut("MakeContractToEmployee/id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateContractChangeOrAccpets(string id, UpdateContractToSendToEmployeeCommand input)
        {

            input.ContractCase = ContractCases.BACkTOEMPlOYEE;
            var contract = await _adminService.UpdateContractFromAdmin(id, input);
            return Ok(contract);
        }


        [HttpPut("EditDocotor/id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateDocotor(string id, UpdateDoctorDto input)
        {

            var contract = await _doctorService.UpdateMedicalProvider(id, input);
            return Ok(contract);
        }
        [HttpPut("ClientsFellowDoctor/id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllClientsFellowDoctor(string id, [FromQuery] GetAllClientsInMedicalProviderProfileQuery input)
        {
            var clients = await _doctorService.GetAllClintsMedicalProviderCare(id, input);
            return Ok(clients);
        }

     
        [HttpGet("GetOneOfNormalStaff/id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneOfNormalStaff(string id, JobTypes input)
        {
            var clients = await _adminService.GetEmployeeByid(id, input);
            return Ok(clients);
        }
        [HttpPut("EditEmployee/id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateNormalStaff(string id, UpdateManagementStaffDto input)
        {
      var employee = await _managementStaffService.UpdateEmployees(id, 
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
        input.WorkingHours,
        input.JobType );
            return Ok(employee);
        }

        //Add Medical Teams 


        [HttpPost("CreateMedicalTeam")]
        [AllowAnonymous]
        public async Task<ActionResult> CreateMedicalTeam( CreateMedicalTeamCommand input)
        {

            var employees = await _medicalTeamService.CreateMedicalTeam(input);
            return Ok(employees);
        }
     
        [HttpPut("EditMedicalTeam/id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateMedicalTeam(string id ,UpdateMedicalTeamCommand input)
        {

            var employees = await _medicalTeamService.UpdateMedicalTeam( id,input);
            return Ok(employees);
        }





        //[HttpPut(("ChangeStutue"))]
        //[AllowAnonymous]
        //// Admin change Stutues doctors From waiting to be cancel or avilibel
        //public async Task<ActionResult> UpdateDoctors( UpdateDoctorEmploymentStatusCommand input)
        //{

        //    var Appointment = await _adminService.UpdateDoctorsEmploymentStatus( input);

        //    return Ok(Appointment);
        //}






    }
}
