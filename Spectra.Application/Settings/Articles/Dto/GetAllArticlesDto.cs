using Microsoft.AspNetCore.Http;

namespace Spectra.Application.Settings.Articles.Dto
{
    public class GetAllArticlesDto
    {

        public List<string> SectionDescription { get; set; }
        public List<IFormFile> AttachmentPath { get; set; }


    }

}
