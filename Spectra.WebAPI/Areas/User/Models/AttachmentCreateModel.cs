using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using static Spectra.Domain.Shared.Constants.DocumentsConts;

namespace Spectra.WebAPI.Areas.User.Models
{
    public class AttachmentCreateModel
    {
        public string Name { get; set; }
        public IFormFile File { get; set; }
        public FileTypes Type { get; set; }
    }
}
