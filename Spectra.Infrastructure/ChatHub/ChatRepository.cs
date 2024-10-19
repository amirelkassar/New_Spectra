using MongoDB.Driver;
using Spectra.Application.ChatHub;
using Spectra.Application.Interfaces;

namespace Spectra.Infrastructure.ChatHub
{

    public class ChatRepository : IChatRepository
    {
        private readonly IMongoCollection<SendPrivateMessageRequest> _Chats;

        public ChatRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _Chats = database.GetCollection<SendPrivateMessageRequest>("Chats");

        }


        public async Task AddAsync(SendPrivateMessageRequest chat)
        {
            await _Chats.InsertOneAsync(chat);
        }

    }
}

