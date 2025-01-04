using Microsoft.AspNetCore.Http;

namespace Spectra.Application.MasterData.Drug.Validator
{
    public class FileValidationHelper
    {
        public static bool BeAValidImage(IFormFile? file)
        {
            if (file == null) return true; // If null, it's considered valid since it's optional.

            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif" };
            var extension = Path.GetExtension(file.FileName).ToLower();
            return allowedExtensions.Contains(extension);
        }
    }
}
