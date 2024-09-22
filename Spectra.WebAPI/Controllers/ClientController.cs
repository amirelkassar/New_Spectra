using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Clients.DTO;
using Spectra.Application.Clients.DTOs;
using Spectra.Application.Clients.Services;


namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService;

     

        public ClientController(IClientService clientService )
        {

            _clientService = clientService;
        }


        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllClients()
        {
            var clienties = await _clientService.GetAllClients();
            return Ok(clienties);
        }



        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneClient(string id )
        {
            var clienties = await _clientService.GetClientById(id);
            return Ok(clienties);
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateNormalClient(CreateNormalClientDto input)
        {

            
            var clienties = await _clientService.CreateClient(input);
            return Ok(clienties);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateClient(string id, UpdateClientDto input)
        {


            var client = await _clientService.UpdateClient(id,input);

            return Ok(client);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteClient(string id)
        {
          var client=  await _clientService.DeleteClient(id);
            return Ok(client);
        }


    }
}
