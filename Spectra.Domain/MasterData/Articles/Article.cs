using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.MasterData.Articles
{
    public class Article : BaseAuditableEntity<string>
    {
        public Article()
        {
            Sections = [];
        }
        public string ArTitle { get; set; }
        public string ArDescription { get; set; }
        public string EnTitle { get; set; }
        public string EnDescription { get; set; }
        public string HeroImage { get; set; }
        public int Rate { get; set; }
        public ICollection<ArticleSection> Sections { get; set; }
        public ICollection<ArticleComment> Comments { get; set; }

    }

    public class ArticleSection
    {
        public ArticleSection()
        {
            Id = Guid.NewGuid().ToString();
        }
        public string Id { get; private set; }
        public string EnTitle { get; set; }
        public string EnDescription { get; set; }
        public string ArTitle { get; set; }
        public string ArDescription { get; set; }
        public string SectionImage { get; set; }
    }

    public class ArticleComment : BaseEntity<string>
    {
        public string? UserId { get; set; }
        public string? UserName { get; set; }
        public string? Comment { get; set; }
    }
}
