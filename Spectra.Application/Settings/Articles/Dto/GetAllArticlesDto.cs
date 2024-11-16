using Microsoft.AspNetCore.Http;
using Spectra.Domain.Settings.Articles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Settings.Articles.Dto
{
    public class GetAllArticlesDto
    {

        public List<string> SectionDescription { get; set; }
        public List<IFormFile> AttachmentPath { get; set; }


    }

}
