using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Application.Settings.Articles;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Infrastructure.MasterData.ServicesMD;
using System.Linq.Expressions;

namespace Spectra.Infrastructure.Settings.Articles
{
    public class ArticlesRepository : IArticlesRepository
    {

        private readonly IMongoCollection<Article> _articles;

        public ArticlesRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _articles = database.GetCollection<Article>("Articles");
        }
        public async Task<Article> GetByIdAsync(string id)
        {

            var entity = await _articles.Find(c => c.Id == id).FirstOrDefaultAsync();
            if (entity == null)
            {
                throw new NotFoundException("article", id);
            }
            return entity;
        }

        public async Task AddAsync(Article article)
        {
            await _articles.InsertOneAsync(article);
        }

        public async Task UpdateAsync(Article article)
        {
            await _articles.ReplaceOneAsync(c => c.Id == article.Id, article);
        }

        public async Task DeleteAsync(Article article)
        {
            await _articles.DeleteOneAsync(c => c.Id == article.Id);
        }

        public async Task<IEnumerable<Article>> GetAllAsync(Expression<Func<Article, bool>> filter = null, FindOptions options = null)
        {
            filter ??= _ => true;
            return await _articles.Find(filter, options).ToListAsync();
        }
        //public async Task<IEnumerable<Article>> GetAllNameAndTermsAndConditions()
        //{
        //    var filter = Builders<Article>.Filter
        //.Eq(x => x.AvailableSrvices, AvailableSrvice.ServicesView);

        //    var projection = Builders<Article>.Projection
        //        .Include(x => x.Name)
        //        .Include(x => x.TermsAndConditions);

        //    var result = await _articles
        //        .Find(filter)
        //        .Project<Article>(projection)
        //        .ToListAsync();

        //    return result;


        //}
    }
}

