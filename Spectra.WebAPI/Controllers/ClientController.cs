using FluentValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Clients.Commands;
using Spectra.Application.Clients.DTO;
using Spectra.Application.Clients.DTOs;
using Spectra.Application.Clients.Services;
using Spectra.Application.Countries;
using Spectra.Application.Countries.DTOs;
using Spectra.Application.Countries.Services;
using Spectra.Application.Countries.States.DTOs;
using Spectra.Application.Interfaces;
using Spectra.Domain.Clients;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System.ComponentModel.DataAnnotations;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService;
        //private readonly IValidator<CreateNormalClientDto> _normalClientvalidator;
        //private readonly IValidator<CreateOrganizationClientDto> _organizationvalidator;
     

        public ClientController(IClientService clientService/* IValidator<CreateNormalClientDto> normalClientvalidator, IValidator<CreateOrganizationClientDto> organizationvalidator*/)
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

            //var result = _normalClientvalidator.Validate(input);
            //if (!result.IsValid)
            //{
            //    return Badinput(result.Errors);
            //}
            var clienties = await _clientService.CreateClient(input);
            return Ok(clienties);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateClient(string id, UpdateClientDto input)
        {

           
        await _clientService.UpdateClient(id,input.Name,input.NationalId,
                input.PhoneNumber,input.ClientType,emailAddress:input.EmailAddress,address:input.Address);
            return NoContent();
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteClient(string id)
        {
            await _clientService.DeleteClient(id);
            return NoContent();
        }


    }
}
