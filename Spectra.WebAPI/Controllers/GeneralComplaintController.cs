using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Application.MasterData.GeneralComplaintsM.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GeneralComplaintController : ControllerBase
    {
        private readonly IGeneralComplaintService _generalComplaintService;

        public GeneralComplaintController(IGeneralComplaintService generalComplaintService)
        {
            _generalComplaintService = generalComplaintService;
        }

        

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllGeneralComplaints()
        {
            var GeneralComplaintsies = await _generalComplaintService.GetAllGeneralComplaintss();
            return Ok(GeneralComplaintsies);
        }

        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneGeneralComplaints(string id)
        {
            var GeneralComplaintsies = await _generalComplaintService.GetGeneralComplaintsById(id);
            return Ok(GeneralComplaintsies);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateGeneralComplaintss([FromForm] CreateGeneralComplaintsCommand input)
        {


            var GeneralComplaintsies = await _generalComplaintService.CreateGeneralComplaints(input);
            return Ok(GeneralComplaintsies);
        }

        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateGeneralComplaints(string id, UpdateGeneralComplaintsCommand input)
        {

            await _generalComplaintService.UpdateGeneralComplaints(id, input);
            return NoContent();
        }

        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteGeneralComplaints(string id)
        {
            await _generalComplaintService.DeleteGeneralComplaints(id);
            return NoContent();
        }

    }


}

