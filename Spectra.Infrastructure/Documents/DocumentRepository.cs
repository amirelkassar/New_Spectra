using MongoDB.Driver;
using Spectra.Application.Documents;
using Spectra.Application.Interfaces;
using Spectra.Domain.Documents;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Documents
{
    public class DocumentRepository : IDocumentRepository
    {
        private readonly IMongoCollection<Document> _documents;

        public DocumentRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _documents = database.GetCollection<Document>("Documents");
        }

        public async Task AddAsync(Document document)
        {
            await _documents.InsertOneAsync(document);
        }

        public async Task DeleteAsync(string id)
        {
            await _documents.DeleteOneAsync(doc => doc.Id == id);
        }

        public async Task<Document> GetByIdAsync(string id)
        {
            return await _documents.Find(doc => doc.Id == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Document>> GetAllAsync()
        {
            return await _documents.Find(_ => true).ToListAsync();
        }

        public async Task UpdateAsync(Document document)
        {
            await _documents.ReplaceOneAsync(doc => doc.Id == document.Id, document);
        }
    }
}
