using Microsoft.AspNetCore.Http;

namespace Spectra.Application.MasterData.HellperFunc
{
    public interface IHellper
    {
        Task<string> CreatePhoto(IFormFile photo);
        Task DeletePhoto(string? photo);
        Task<string> UpdatePhoto(string? photo, IFormFile upload);
    }
}