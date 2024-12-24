using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.MasterData.Articles.Dtos
{
    public class ArticleSectionReadDto
    {
        public string Id { get; set; }
        public string EnTitle { get; set; }
        public string EnDescription { get; set; }
        public string ArTitle { get; set; }
        public string ArDescription { get; set; }
        public string SectionImage { get; set; }
    }
}
