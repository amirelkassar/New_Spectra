using System.Net.Mail;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.GlobalExceptions;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using SixLabors.ImageSharp.Formats.Webp;
using NAudio.Wave;
using NAudio.Lame;

namespace Spectra.Application.MasterData.HellperFunc
{
    public class DocumentHellper : IDocumentHellper
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        public DocumentHellper(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        public async Task<List<string>> CreateAttachments(IEnumerable<IFormFile> attachments, string folderName)
        {
            var filePaths = new List<string>();

            if (attachments != null && attachments.Any())
            {
                foreach (var attachment in attachments)
                {
                    if (!IsSupportedExtension(attachment.FileName))
                    {
                        throw new UnsupportedFileTypeException(string.Join(" ,", DocumentsConts.SupportedFileExtensions));
                    }
                }
                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, folderName);


                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                foreach (var attachment in attachments)
                {
                    if (attachment.Length > 0)
                    {
                        var uniqueFileName = $"{Guid.NewGuid()}_{attachment.FileName}";
                        var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                        using (var fileStream = new FileStream(filePath, FileMode.Create, FileAccess.ReadWrite))
                        {
                            await attachment.CopyToAsync(fileStream);
                        }

                        filePaths.Add($"{folderName}/{uniqueFileName}");
                    }
                }
            }

            return filePaths;
        }
        public async Task<string> CreateAttachment(IFormFile attachment, string folderName)
        {
            if (attachment == null || attachment.Length == 0)
            {
                return null;
            }
            if (!IsSupportedExtension(attachment.FileName))
            {
                throw new UnsupportedFileTypeException(string.Join(" ,", DocumentsConts.SupportedFileExtensions));
            }
            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, folderName);

            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            var uniqueFileName = $"{Guid.NewGuid()}_{attachment.FileName}";
            var filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create, FileAccess.ReadWrite))
            {
                await attachment.CopyToAsync(fileStream);
            }

            return $"{folderName}/{uniqueFileName}";
        }

        public async Task DeleteAttachment(string? attachment)
        {
            if (!string.IsNullOrEmpty(attachment) && File.Exists(attachment))
            {
                var filePath = Path.Combine(_webHostEnvironment.WebRootPath, attachment);
                File.Delete(filePath);
            }
        }


        public async Task DeleteAttachments(List<string> attachmentPaths)
        {
            // Ensure the web root path is correctly set
            if (string.IsNullOrEmpty(_webHostEnvironment.WebRootPath))
            {
                _webHostEnvironment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            }

            foreach (var attachmentPath in attachmentPaths)
            {
                var fullPath = Path.Combine(_webHostEnvironment.WebRootPath, attachmentPath);
                if (File.Exists(fullPath))
                    File.Delete(fullPath);
            }
        }


        public async Task<List<string>> UpdateAttachments(List<string>? existingAttachments, List<IFormFile> newAttachments, string folderName)
        {

            foreach (var attachment in newAttachments)
            {
                if (!IsSupportedExtension(attachment.FileName))
                {
                    throw new UnsupportedFileTypeException(string.Join(" ,", DocumentsConts.SupportedFileExtensions));
                }
            }

            if (string.IsNullOrEmpty(_webHostEnvironment.WebRootPath))
            {
                _webHostEnvironment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            }

            var uploadedFilePaths = new List<string>();
            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, folderName);

            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }


            foreach (var file in newAttachments)
            {

                if (file != null && file.Length > 0)
                {

                    var newFileName = $"{Guid.NewGuid()}{Path.GetExtension(file.FileName)}";

                    var filePath = Path.Combine(uploadsFolder, newFileName);

                    using (var stream = new FileStream(filePath, FileMode.Create, FileAccess.ReadWrite))
                    {
                        await file.CopyToAsync(stream);
                    }


                    uploadedFilePaths.Add(Path.Combine(folderName, newFileName).Replace("\\", "/").TrimStart('\\', '/'));
                }
            }

            if (existingAttachments != null && existingAttachments.Any())
            {
                await DeleteAttachments(existingAttachments);
            }

            return uploadedFilePaths;
        }
        public async Task<string> UpdateAttachment(string? existingAttachment, IFormFile newAttachment, string folderName)
        {
            if (!IsSupportedExtension(newAttachment.FileName))
            {
                throw new UnsupportedFileTypeException(string.Join(" ,", DocumentsConts.SupportedFileExtensions));
            }

            // Check if the new attachment is valid
            if (newAttachment == null || newAttachment.Length == 0)
            {
                return null;
            }

            if (string.IsNullOrEmpty(_webHostEnvironment.WebRootPath))
            {
                _webHostEnvironment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            }

            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, folderName);

            // Create the folder if it does not exist
            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            // Generate a unique file name for the new attachment
            var newFileName = $"{Guid.NewGuid()}{Path.GetExtension(newAttachment.FileName)}";
            var filePath = Path.Combine(uploadsFolder, newFileName);

            // Save the new attachment
            using (var stream = new FileStream(filePath, FileMode.Create, FileAccess.ReadWrite))
            {
                await newAttachment.CopyToAsync(stream);
            }

            // Delete the existing attachment if it exists
            if (!string.IsNullOrEmpty(existingAttachment))
            {
                var existingFilePath = Path.Combine(_webHostEnvironment.WebRootPath, existingAttachment.TrimStart('/'));
                if (File.Exists(existingFilePath))
                {
                    File.Delete(existingFilePath);
                }
            }
            // Return the path of the new file
            return $"{folderName}/{newFileName}";
        }

        public bool IsSupportedExtension(string fileName)
        {
            var fileInfo = new FileInfo(fileName);
            return DocumentsConts.SupportedFileExtensions.Any(e => e.Equals(fileInfo.Extension, StringComparison.OrdinalIgnoreCase));
        }

        public async Task<Stream> ConvertAudioToMP3(Stream audioStream)
        {
            using var reader = new WaveFileReader(audioStream);
            using var mp3Stream = new MemoryStream();
            using var writer = new LameMP3FileWriter(mp3Stream, reader.WaveFormat, LAMEPreset.STANDARD);
            await reader.CopyToAsync(writer);
            return mp3Stream;
        }

        public async Task<Stream> ConvertImageToWebp(Stream imageStream)
        {
            using var image = await Image.LoadAsync(imageStream);
            using var webpStream = new MemoryStream();
            await image.SaveAsWebpAsync(webpStream, new WebpEncoder()
            {
                Quality = 75
            });
            return webpStream;
        }
    }
}




