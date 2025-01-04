using Microsoft.AspNetCore.Http;

namespace Spectra.WebAPI.Areas.Admin
{
    public class BulkCreateModel
    {
        public IFormFile File { get; set; }
    }
}
