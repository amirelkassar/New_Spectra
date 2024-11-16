using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;

namespace Spectra.Application.MasterData.UploadExcel.Services
{
    public interface IExcelProcessingService
    {


        Task<List<T>> ProcessExcelFile<T>(IFormFile file, Func<List<string>, T> createErntity);
    }
}