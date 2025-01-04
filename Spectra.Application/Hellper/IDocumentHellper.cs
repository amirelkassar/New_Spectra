using Microsoft.AspNetCore.Http;

namespace Spectra.Application.MasterData.HellperFunc
{
    public interface IDocumentHellper
    {
        Task<string> CreateAttachment(IFormFile attachment, string folderName);
        Task<List<string>> CreateAttachments(IEnumerable<IFormFile> attachments, string folderName);

        Task DeleteAttachment(string? attachment);

        Task DeleteAttachments(List<string> attachments);
        Task<List<string>> UpdateAttachments(List<string>? existingAttachment, List<IFormFile> newAttachments, string folderName);
        Task<string> UpdateAttachment(string? existingAttachment, IFormFile newAttachment, string folderName);
        bool IsSupportedExtension(string fileName);

        Task<Stream> ConvertAudioToMP3(Stream audioStream);
        Task<Stream> ConvertImageToWebp(Stream imageStream);

    }
}