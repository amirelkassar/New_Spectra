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


            if (attachment != null)
            {
                if (string.IsNullOrEmpty(_webHostEnvironment.WebRootPath))
                {
                    _webHostEnvironment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
                }

                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, fileName);

                // Ensure the directory exists
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }
                var uniqueFileName = $"{Guid.NewGuid()}_{attachment.FileName}";


                var filePath = Path.Combine(uploadsFolder, uniqueFileName);


                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await attachment.CopyToAsync(fileStream);
                }


                return $"/{fileName}/{uniqueFileName}";

            }
            return null;
        }
        public async Task Deleteattachment(string? attachment)
        {
            if (!string.IsNullOrEmpty(attachment))
            {
                var filePath = Path.Combine(_webHostEnvironment.WebRootPath, attachment);
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }

            }


        }
        public async Task<string> Updateattachment(string? attachment, IFormFile upload, string fileName)
        {

            // Delete the existing attachment if any
            await Deleteattachment(attachment);

            // Save the new attachment
            var newFileName = Guid.NewGuid() + Path.GetExtension(upload.FileName);
            if (string.IsNullOrEmpty(_webHostEnvironment.WebRootPath))
            {
                _webHostEnvironment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            }

            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, fileName);

            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            var filePath = Path.Combine(uploadsFolder, newFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await upload.CopyToAsync(stream);
            }

            // Update the drug with the new attachment path
            return Path.Combine(fileName, newFileName);
        }

    }



}




