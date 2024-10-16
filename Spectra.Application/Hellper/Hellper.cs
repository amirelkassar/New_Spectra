using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Domain.MasterData.Drug;
using System;
using System.IO;

namespace Spectra.Application.MasterData.HellperFunc
{
    public class Hellper : IHellper
    {
        private readonly IWebHostEnvironment _webHostEnvironment;

        public Hellper(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }



        public async Task<List<string>> CreateAttachments(IEnumerable<IFormFile> attachments, string folderName)
        {
            var filePaths = new List<string>();

            if (attachments != null && attachments.Any())
            {
 
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

                        using (var fileStream = new FileStream(filePath, FileMode.Create))
                        {
                            await attachment.CopyToAsync(fileStream);
                        }

                        filePaths.Add($"/{folderName}/{uniqueFileName}");
                    }
                }
            }

            return filePaths;
        }


        public async Task DeleteAttachment(string? attachment)
        {
            if (!string.IsNullOrEmpty(attachment))
            {
                var filePath = _webHostEnvironment.WebRootPath + attachment;
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }
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
                var fullPath =_webHostEnvironment.WebRootPath + attachmentPath;

                // Check if the file exists before attempting to delete it
                if (File.Exists(fullPath))
                {
                    try
                    {
                        File.Delete(fullPath);
                    }
                    catch (Exception ex)
                    {
                        // Log or handle any errors that occur during file deletion
                        Console.WriteLine($"Error deleting file: {ex.Message}");
                        // You could throw an exception or return a failure result if necessary
                    }
                }
                else
                {
                    Console.WriteLine($"File not found: {fullPath}");
                }
            }
        }


        public async Task<List<string>> UpdateAttachment(List<string>? existingAttachments, List<IFormFile> newAttachments, string folderName)
        {
          
            if (existingAttachments != null && existingAttachments.Any())
            {
                await DeleteAttachments(existingAttachments);
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

                  using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }

                   
                    uploadedFilePaths.Add(Path.Combine(folderName, newFileName).Replace("\\", "/"));
                }
            }

          
            return uploadedFilePaths;
        }
    }
    }




