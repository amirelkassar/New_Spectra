using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
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

        [HttpGet]
        [Authorize(AdminMedicalTestsAndXrayPermissions.ReadList)]
        public async Task<ActionResult> GetAllMedicalTestsAndXray()
        {
            var medicalTestsAndXrayies = await _medicalTestsAndXrayService.GetAllMedicalTestsAndXray();
            return Ok(medicalTestsAndXrayies);
        }

        [HttpGet("GetAllNames")]
        [Authorize(AdminMedicalTestsAndXrayPermissions.ReadList)]
        public async Task<ActionResult> GetAllMedicalTestsAndXrayNames()
        {
            var medicalTestsAndXrayies = await _medicalTestsAndXrayService.GetAllMedicalTestsAndXrayNames();
            return Ok(medicalTestsAndXrayies);
        }

        [HttpGet("id")]
        [Authorize(AdminMedicalTestsAndXrayPermissions.ReadOne)]
        public async Task<ActionResult> GetOneMedicalTestsAndXray(string id)
        {
            var medicalTestsAndXrayies = await _medicalTestsAndXrayService.GetMedicalTestsAndXrayById(id);
            return Ok(medicalTestsAndXrayies);
        }

        [HttpPost]
        [Authorize(AdminMedicalTestsAndXrayPermissions.Create)]
        public async Task<ActionResult> CreateMedicalTestsAndXray(CreateMedicalTestsAndXraysCommand input)
        {
            var medicalTestsAndXrayies = await _medicalTestsAndXrayService.CreateMedicalTestsAndXray(input);
            return Ok(medicalTestsAndXrayies);
        }

        [HttpPut("id")]
        [Authorize(AdminMedicalTestsAndXrayPermissions.Update)]
        public async Task<ActionResult> UpdateMedicalTestsAndXray(string id, UpdateMedicalTestsAndXraysCommand input)
        {
            var medicalTestsAndXrayies = await _medicalTestsAndXrayService.UpdateMedicalTestsAndXray(id, input);
            return Ok(medicalTestsAndXrayies);
        }

        [HttpDelete("id")]
        [Authorize(AdminMedicalTestsAndXrayPermissions.Delete)]
        public async Task<ActionResult> DeleteMedicalTestsAndXray(string id)
        {
            var medicalTestsAndXrayies = await _medicalTestsAndXrayService.DeleteMedicalTestsAndXray(id);
            return Ok(medicalTestsAndXrayies);
        }

        [HttpPost("upload")]
        [Authorize(AdminMedicalTestsAndXrayPermissions.SheetsPermissions)]
        public async Task<ActionResult> UploadExcelFile(IFormFile file)
        {
            var data = _medicalTestsAndXrayService.CreateFromExcel(file);
            return Ok(data);
        }
    }
}
