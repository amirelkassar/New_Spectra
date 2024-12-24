using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Spectra.Application.MasterData.Articles.Dtos
{
    public class ArticleSectionCreateDto
    {
        public string EnTitle { get; set; }
        public string EnDescription { get; set; }
        public string ArTitle { get; set; }
        public string ArDescription { get; set; }
        public IFormFile SectionImage { get; set; }
    }
}
