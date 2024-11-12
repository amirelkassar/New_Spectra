using MongoDB.Driver;
using Spectra.Domain.Settings.Articles;
using System.Linq.Expressions;

namespace Spectra.Application.Settings.Articles
{
    public interface IArticlesRepository
    {
        Task AddAsync(Article article);
        Task DeleteAsync(Article article);
        Task<IEnumerable<Article>> GetAllAsync(Expression<Func<Article, bool>> filter = null, FindOptions options = null);
        Task<Article> GetByIdAsync(string id);
        Task UpdateAsync(Article article);
    }
}