using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.MasterData.Articles;
using Spectra.Domain.Shared.Common;

namespace Spectra.Application.MasterData.Articles.Dtos
{
    public class ArticleReadDto : BaseEntityDto<string>
    {
        public string ArTitle { get; set; }
        public string ArDescription { get; set; }
        public string EnTitle { get; set; }
        public string EnDescription { get; set; }
        public string HeroImage { get; set; }
        public int? Rate { get; set; }
        public ICollection<ArticleSectionReadDto> Sections { get; set; }
        public ICollection<ArticleComment> Comments { get; set; }
    }
}
