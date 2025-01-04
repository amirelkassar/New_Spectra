using Microsoft.AspNetCore.Http;

namespace Spectra.Application.MasterData.UploadExcel.Services
{
    public interface IExcelProcessingService
    {


        Task<List<T>> ProcessExcelFile<T>(IFormFile file, Func<List<string>, T> createErntity);
    }
}