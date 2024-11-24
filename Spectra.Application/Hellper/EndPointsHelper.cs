using Microsoft.AspNetCore.Http;

namespace Spectra.Application.Hellper
{
    public static class EndPointsHelper
    {
        public static string GetFileUrl(string filePath, string route, IHttpContextAccessor httpContextAccessor)
        {
            string url = string.Empty;
            if (!string.IsNullOrWhiteSpace(filePath) && File.Exists(filePath))
            {
                var fileInfo = new FileInfo(filePath);
                var request = httpContextAccessor.HttpContext.Request;
                url = $"{request.Scheme}://{request.Host}{request.PathBase}/{route}/{fileInfo.Name}";
            }
            return url;
        }
    }
}
