using Mapster;
using MediatR;
using MongoDB.Driver;
using Spectra.Application.Chats.Dtos;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Chats;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Chats.Queries
{
    public class GetChatListQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public class GetChatListQueryHandler(ICurrentUser currentUser,
            IBaseMongoDbRepository<ChatRoom> chatRepository) : IRequestHandler<GetChatListQuery, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<ChatRoom> _chatRepository = chatRepository;

            public async Task<OperationResult> Handle(GetChatListQuery request, CancellationToken cancellationToken)
            {
                var chatCollection = await _chatRepository.GetCollectionAsync();
                var chatFilterBuilder = Builders<ChatRoom>.Filter;
                var chatFilter = chatFilterBuilder.Empty;
                chatFilter &= chatFilterBuilder.ElemMatch(c => c.Participants, p => p.UserId == _currentUser.Id);

                var chats = await chatCollection.Find(chatFilter)
                    .SortByDescending(c => c.LastMeesageDate)
                    .Skip(request.SkipCount)
                    .Limit(request.MaxCount)
                    .ToListAsync();
                var chatCount = await chatCollection.CountDocumentsAsync(chatFilter);

                var dtos = chats.Adapt<ICollection<ChatReadDto>>();

                return OperationResult<PaginatedResult<ChatReadDto>>.Success(new PaginatedResult<ChatReadDto>(dtos, chatCount, request.MaxCount));

            }
        }
    }
}
