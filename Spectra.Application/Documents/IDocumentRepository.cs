using Spectra.Domain.Documents;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Spectra.Application.Documents
{
    public interface IDocumentRepository
    {
        Task AddAsync(Document document);
        Task UpdateAsync(Document document);
        Task DeleteAsync(string id);
        Task<Document> GetByIdAsync(string id);
        Task<IEnumerable<Document>> GetAllAsync();
    }
}
