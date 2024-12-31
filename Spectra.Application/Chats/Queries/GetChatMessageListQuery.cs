using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using Spectra.Application.Chats.Dtos;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser;
using Spectra.Domain.Chats;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Chats.Queries
{
    public class GetChatMessageListQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? ChatId { get; set; }
        public string? Reference { get; set; }

        public class GetChatMessageListQueryHandler(IBaseMongoDbRepository<ChatRoom> chatRepository,
            IBaseMongoDbRepository<ChatMessage> messageRepository,
            IHttpContextAccessor httpContextAccessor,
            ICurrentUser currentUser,
            UserManager<AppUser> userManager,
            IWebHostEnvironment webHostEnvironment) : IRequestHandler<GetChatMessageListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<ChatRoom> _chatRepository = chatRepository;
            private readonly IBaseMongoDbRepository<ChatMessage> _messageRepository = messageRepository;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly UserManager<AppUser> _userManager = userManager;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;

            public async Task<OperationResult> Handle(GetChatMessageListQuery request, CancellationToken cancellationToken)
            {
                var chatCollection = await _chatRepository.GetCollectionAsync();
                var chatFilterBuilder = Builders<ChatRoom>.Filter;
                ChatRoom chat = null;
                if (!string.IsNullOrWhiteSpace(request.ChatId))
                {
                    var chatFilter = chatFilterBuilder.Eq(c => c.Id, request.ChatId);
                    chatFilter &= chatFilterBuilder.ElemMatch(c => c.Participants, p => p.UserId == _currentUser.Id);
                    chat = await chatCollection.Find(chatFilter).FirstOrDefaultAsync() ?? throw new NotFoundException("Chats", request.ChatId);
                }
                else if (!string.IsNullOrWhiteSpace(request.Reference))
                {
                    var chatFilter = chatFilterBuilder.Eq(c => c.Reference, request.Reference);
                    chatFilter &= chatFilterBuilder.ElemMatch(c => c.Participants, p => p.UserId == _currentUser.Id);
                    chat = await chatCollection.Find(chatFilter).FirstOrDefaultAsync() ?? throw new NotFoundException("Chats", request.Reference);
                }
                else
                {
                    throw new NotFoundException("Chats", request.Reference);
                }


                var messagesCollection = await _messageRepository.GetCollectionAsync();
                var sortBuilder = Builders<ChatMessage>.Sort;
                var sort = sortBuilder.Descending(m=>m.Id);

                var messages = await messagesCollection
                    .Find(m => m.ChatId == chat.Id)
                    .Sort(sort)
                    .Skip(request.SkipCount)
                    .Limit(request.MaxCount)
                    .ToListAsync();

                var totalMessages = await messagesCollection.CountDocumentsAsync(m => m.ChatId == chat.Id);

                var messagesDto = messages.Adapt<ICollection<MessageReadDto>>();

                var chatUsers = await _userManager.Users.Where(u => chat.Participants.Select(p=>p.Id).Any(p => p == u.Id)).ToArrayAsync();


                foreach (var dto in messagesDto)
                {
                    var user = chatUsers.FirstOrDefault(u => u.Id == dto.SenderId);
                    if (user is not null)
                    {
                        dto.SenderName = $"{user.Name} {user.SurName}";

                        if (!string.IsNullOrWhiteSpace(user.UserImage))
                            dto.SenderImage = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, user.UserImage), EndPointsRoutes.Users, _httpContextAccessor);
                    }
                    dto.ChatReference = chat.Reference;
                    if (!string.IsNullOrEmpty(dto.FileUrl))
                    dto.FileUrl = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, dto.FileUrl), EndPointsRoutes.Users, _httpContextAccessor);
                }

                var chatDto = chat.Adapt<ChatDetailReadDto>();
                chatDto.Messages = new PaginatedResult<MessageReadDto>(messagesDto,totalMessages,request.MaxCount);

                return OperationResult<ChatDetailReadDto>.Success(chatDto);
            }
        }
    }
}
