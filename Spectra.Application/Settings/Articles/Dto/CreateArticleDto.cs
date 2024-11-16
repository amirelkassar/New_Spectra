using Microsoft.AspNetCore.Http;

namespace Spectra.Application.Settings.Articles.Dto
{
    public class ArticleDto
    {
        public string Title { get; set; }
        public IFormFile MainPhoto { get; set; }
        public List<string> SectionDescription { get; set; }
        public List<IFormFile> AttachmentPath { get; set; }
    }
}
