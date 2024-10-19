using Microsoft.AspNetCore.Http;

namespace Spectra.Application.MasterData.HellperFunc
{
    public interface IHellper
    {
        Task<List<string>> CreateAttachments(IEnumerable<IFormFile> attachments, string folderName);
        Task DeleteAttachment(string? attachment);
   
        Task DeleteAttachments(List<string> attachments);
        Task<List<string>> UpdateAttachment(List<string>? existingAttachment, List<IFormFile> newAttachments, string folderName);
    }
}