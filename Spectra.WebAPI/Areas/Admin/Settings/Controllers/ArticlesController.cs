using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Settings.Articles.Commands;
using Spectra.Infrastructure.Settings.Articles;

namespace Spectra.WebAPI.Areas.Admin.Settings.Controllers
{
    public class ArticlesController : SettingsController
    {
        private readonly IArticlesService _entityServices;

        public ArticlesController(IArticlesService ArticlessServices)
        {
            _entityServices = ArticlessServices;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult> GetAllArticles()
        {
            var Articless = await _entityServices.GetAllArticles();
            return Ok(Articless);
        }

        [HttpGet("id")]
        [AllowAnonymous]
        public async Task<ActionResult> GetOneArticles(string id)
        {
            var Articless = await _entityServices.GetArticlesMById(id);
            return Ok(Articless);
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> CreateArticles(CreateArticlesCommand input)
        {
            var Articless = await _entityServices.CreateArticles(input);
            return Ok(Articless);
        }
        [HttpPut("id")]
        [AllowAnonymous]
        public async Task<ActionResult> UpdateArticles(string id, UpdateArticlesCommand input)
        {
            var Articless = await _entityServices.UpdateArticles(id, input);

            return Ok(Articless);
        }
        [HttpDelete("id")]
        [AllowAnonymous]
        public async Task<ActionResult> DeleteArticles(string id)
        {
            var Articless = await _entityServices.DeleteArticles(id);
            return Ok(Articless);
        }


    }
}

