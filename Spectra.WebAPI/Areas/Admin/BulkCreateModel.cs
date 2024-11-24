using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.WebAPI.Areas.Admin
{
    public class BulkCreateModel
    {
        public IFormFile File { get; set; }
    }
}
