//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using Spectra.Application.Clients.DTOs;
//using Spectra.Application.Clients.Services;
//using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries;
//using Spectra.Infrastructure.Admin;

//namespace Spectra.WebAPI.Areas.Admin.Controllers
//{
//    [Area("Admin/Client")]
//    public class AdminClientController: BassAdminController
//    {
//        //private readonly IAdminService _adminService;
//        private readonly IClientService _clientService;

//        public AdminClientController(/*IAdminService adminService,*/ IClientService clientService)
//        {
//            //_adminService = adminService;
//            _clientService = clientService;
//        }

//        [HttpGet("Client/id")]
//        [AllowAnonymous]
//        public async Task<ActionResult> GetOneClient(string id)
//        {
//            var clienties = await _clientService.GetClientById(id);
//            return Ok(clienties);
//        }

//        [HttpPost("CreateClient")]
//        [AllowAnonymous]
//        public async Task<ActionResult> CreateNormalClient(CreateNormalClientDto input)
//        {

//            var clienties = await _clientService.CreateClient(input);
//            return Ok(clienties);
//        }

//        //[HttpPut("ClientsFellowDoctor/id")]
//        //[AllowAnonymous]
//        //public async Task<ActionResult> GetAllClientsFellowDoctor(string id, [FromQuery] GetAllClientsInMedicalProviderProfileQuery input)
//        //{
//        //    var clients = await _doctorService.GetAllClintsMedicalProviderCare(id, input);
//        //    return Ok(clients);
//        //}


//    }

//}
