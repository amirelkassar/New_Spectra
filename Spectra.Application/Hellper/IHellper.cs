using Microsoft.AspNetCore.Http;

namespace Spectra.Application.MasterData.HellperFunc
{
    public interface IHellper
    {
        Task<string> Createattachment(IFormFile attachment, string fileName);
        Task Deleteattachment(string? attachment);
        Task<string> Updateattachment(string? attachment, IFormFile upload, string fileName);
    }
}