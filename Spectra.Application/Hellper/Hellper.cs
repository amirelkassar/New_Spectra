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

        public async Task<string> Createattachment(IFormFile attachment, string fileName)
        {


        public async Task<List<string>> CreateAttachments(IEnumerable<IFormFile> attachments, string folderName)
            if (attachment != null)
        {
            var filePaths = new List<string>();

            if (attachments != null && attachments.Any())
                if (string.IsNullOrEmpty(_webHostEnvironment.WebRootPath))
            {
                    _webHostEnvironment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
                }
 
                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, folderName);
                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, fileName);


                // Ensure the directory exists
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
                return $"/{fileName}/{uniqueFileName}";


        public async Task DeleteAttachment(string? attachment)
            }
            return null;
        }
        public async Task Deleteattachment(string? attachment)
        {
            if (!string.IsNullOrEmpty(attachment))
            {
                var filePath = _webHostEnvironment.WebRootPath + attachment;
                var filePath = Path.Combine(_webHostEnvironment.WebRootPath, attachment);
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
        public async Task<string> Updateattachment(string? attachment, IFormFile upload, string fileName)
            {
                await DeleteAttachments(existingAttachments);
            }

            // Delete the existing attachment if any
            await Deleteattachment(attachment);
          
            // Save the new attachment
            var newFileName = Guid.NewGuid() + Path.GetExtension(upload.FileName);
            if (string.IsNullOrEmpty(_webHostEnvironment.WebRootPath))
            {
                _webHostEnvironment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            }

            var uploadedFilePaths = new List<string>();
            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, folderName);
            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, fileName);

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
                await upload.CopyToAsync(stream);
                    }

                   
                    uploadedFilePaths.Add(Path.Combine(folderName, newFileName).Replace("\\", "/"));
            // Update the drug with the new attachment path
            return Path.Combine(fileName, newFileName);
                }

            }

          
            return uploadedFilePaths;
        }
    }

    }




