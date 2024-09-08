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

        public async Task<string> CreatePhoto(IFormFile photo)
        {


            if (photo != null)
            {
                if (string.IsNullOrEmpty(_webHostEnvironment.WebRootPath))
                {
                    _webHostEnvironment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
                }

                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "uploads");

                // Ensure the directory exists
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }
                var uniqueFileName = $"{Guid.NewGuid()}_{photo.FileName}";


                var filePath = Path.Combine(uploadsFolder, uniqueFileName);


                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await photo.CopyToAsync(fileStream);
                }


                return $"/uploads/{uniqueFileName}";

            }
            return null;
        }
        public async Task DeletePhoto(string? photo)
        {
            if (!string.IsNullOrEmpty(photo))
            {
                var filePath = Path.Combine(_webHostEnvironment.WebRootPath, photo);
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }

            }


        }
        public async Task<string> UpdatePhoto(string? photo, IFormFile upload)
        {

            // Delete the existing photo if any
            await DeletePhoto(photo);

            // Save the new attachment
            var newFileName = Guid.NewGuid() + Path.GetExtension(upload.FileName);
            if (string.IsNullOrEmpty(_webHostEnvironment.WebRootPath))
            {
                _webHostEnvironment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            }

            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "uploads");

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
            return Path.Combine("uploads", newFileName);
        }

    }



}




