using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Admin.Commands;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Admin.Queries;
using Spectra.Application.Clients.DTO;
using Spectra.Application.Clients.DTOs;
using Spectra.Application.Clients.Services;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Contracts.Services;
using Spectra.Application.Employees.ManagementStaff.Service;
using Spectra.Application.Employees.MedicalStaff.Doctors.Dto;
using Spectra.Application.Employees.MedicalStaff.Doctors.Queries;
using Spectra.Application.Employees.MedicalStaff.Doctors.Services;
using Spectra.Domain.Shared.Enums;
using Spectra.Infrastructure.Admin;
using Spectra.Infrastructure.Contracts;
using Spectra.Infrastructure.Doctors;

namespace Spectra.WebAPI.Areas.Admin.Controllers
{


    public class AdminController : BassAdminController
    {
        private readonly IAdminService _adminService;
        private readonly IClientService _clientService;
        private readonly IDoctorService _doctorService;
        private readonly IContractService _contractService;

        public AdminController(IAdminService adminService, IClientService clientService, IDoctorService doctorService, IContractService contractService)
        {
            _adminService = adminService;
            _clientService = clientService;
            _contractService = contractService;
            _doctorService = doctorService;
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
            var Doctories = await _doctorService.GetDoctorById(id);
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
        public async Task<ActionResult> UpdateRefuesContract(string id)
        {

            var employees = await _adminService.UpdateContractStatus(id);
            return Ok(employees);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateClient(string id, UpdateClientDto input)
        {

            var client = await _clientService.UpdateClient(id, input);

            return Ok(client);
        }

        [HttpPut("ContractOperations/id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateContractChangeOrAccpet(string id, UpdateContractCommand input)
        {

            input.ContractCase = ContractCases.BACkTOEMPlOYEE;
            var contract = await _contractService.UpdateContract(id, input);
            return Ok(contract);
        }


        [HttpPut("EditDocotor/id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateDocotor(string id, UpdateManagementStaffDto input)
        {


            var contract = await _doctorService.UpdateDoctor(id, input);
            return Ok(contract);
        }
        [HttpPut("ClientsFellowDoctor/id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllClientsFellowDoctor(string id, [FromQuery] GetAllClientsInDoctorProfileQuery input)
        {

         
            var clients = await _doctorService.GetAllClintsDoctorCare(id, input);
            return Ok(clients);
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
