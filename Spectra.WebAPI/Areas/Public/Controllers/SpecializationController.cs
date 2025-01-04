using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.SpecializationCommend.Queries;
using Spectra.Application.MasterData.SpecializationCommend.Services;

namespace Spectra.WebAPI.Areas.Public.Controllers
{
    public class SpecializationController(ILogger<SpecializationController> logger,
        ICurrentUser currentUser, ISpecializationService specializationsServices) : PublicControllerBase<SpecializationController>(logger, currentUser)
    {
        private readonly ISpecializationService _specializationsServices = specializationsServices;

        [HttpGet("list")]
        public async Task<ActionResult> GetAllSpecializations([FromQuery] GetAllSpecializationQuery input)
        {
            var specializations = await _specializationsServices.GetAllSpecializations(input);
            return Ok(specializations);
        }

        [HttpGet()]
        public async Task<ActionResult> GetOneSpecialization([FromQuery] GetSpecializationByIdQuery input)
        {
            var specialization = await _specializationsServices.GetSpecializationById(input.Id);
            return Ok(specialization);
        }

    }
}
