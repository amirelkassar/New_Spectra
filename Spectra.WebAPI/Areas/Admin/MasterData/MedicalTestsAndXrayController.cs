using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Services;
using Spectra.Domain.Shared.Constants.Permissions.Admin.MasterDataPermissons;

namespace Spectra.WebAPI.Areas.Admin.MasterData
{
    public class MedicalTestsAndXrayController : AdminBaseController
    {
        private readonly IMedicalTestsAndXrayService _medicalTestsAndXrayService;

        public MedicalTestsAndXrayController(IMedicalTestsAndXrayService medicalTestsAndXrayService)
        {
            _medicalTestsAndXrayService = medicalTestsAndXrayService;
        }

        [HttpGet("list")]
        [Authorize(AdminMedicalTestsAndXrayPermissions.ReadList)]
        public async Task<ActionResult> GetAllMedicalTestsAndXray([FromQuery] GetAllMedicalTestsAndXraysQuery input)
        {
            var medicalTestsAndXrayies = await _medicalTestsAndXrayService.GetAllMedicalTestsAndXray(input);
            return Ok(medicalTestsAndXrayies);
        }

        [HttpGet()]
        [Authorize(AdminMedicalTestsAndXrayPermissions.ReadOne)]
        public async Task<ActionResult> GetOneMedicalTestsAndXray([FromQuery] GetMedicalTestsAndXraysByIdQuery input)
        {
            var medicalTestsAndXrayies = await _medicalTestsAndXrayService.GetMedicalTestsAndXrayById(input.Id);
            return Ok(medicalTestsAndXrayies);
        }

        [HttpPost]
        [Authorize(AdminMedicalTestsAndXrayPermissions.Create)]
        public async Task<ActionResult> CreateMedicalTestsAndXray([FromBody] CreateMedicalTestsAndXraysCommand input)
        {
            var medicalTestsAndXrayies = await _medicalTestsAndXrayService.CreateMedicalTestsAndXray(input);
            return Created("", medicalTestsAndXrayies);
        }

        [HttpPut()]
        [Authorize(AdminMedicalTestsAndXrayPermissions.Update)]
        public async Task<ActionResult> UpdateMedicalTestsAndXray([FromBody] UpdateMedicalTestsAndXraysCommand input)
        {
            var medicalTestsAndXrayies = await _medicalTestsAndXrayService.UpdateMedicalTestsAndXray(input);
            return Accepted(medicalTestsAndXrayies);
        }

        [HttpDelete()]
        [Authorize(AdminMedicalTestsAndXrayPermissions.Delete)]
        public async Task<ActionResult> DeleteMedicalTestsAndXray([FromQuery] DeleteMedicalTestsAndXraysCommand input)
        {
            var medicalTestsAndXrayies = await _medicalTestsAndXrayService.DeleteMedicalTestsAndXray(input.Id);
            return Ok(medicalTestsAndXrayies);
        }

        [HttpPost("bulk")]
        [Authorize(AdminMedicalTestsAndXrayPermissions.SheetsPermissions)]
        public async Task<ActionResult> UploadExcelFile([FromForm] BulkCreateModel input)
        {
            var data = _medicalTestsAndXrayService.CreateFromExcel(input.File);
            return Ok(data);
        }
    }
}
