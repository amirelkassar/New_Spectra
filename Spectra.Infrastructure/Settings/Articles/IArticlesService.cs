using MediatR;
using Spectra.Application.Settings.Articles.Commands;
using Spectra.Domain.Settings.Articles;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Settings.Articles
{
    public interface IArticlesService
    {
        Task<OperationResult<string>> CreateArticles(CreateArticlesCommand input);
        Task<OperationResult<Unit>> DeleteArticles(string id);
        Task<OperationResult<IEnumerable<Article>>> GetAllArticles();
        Task<OperationResult<Article>> GetArticlesMById(string id);
        Task<OperationResult<Unit>> UpdateArticles(string id, UpdateArticlesCommand input);
    }
}