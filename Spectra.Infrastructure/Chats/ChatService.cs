using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DocumentFormat.OpenXml.Spreadsheet;
using Mapster;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SignalR;
using SharpCompress.Common;
using Spectra.Application.Chats.Dtos;
using Spectra.Application.Chats.Hubs;
using Spectra.Application.Chats.Services;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Domain.Chats;
using Spectra.Domain.Chats.Exceptions;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Infrastructure.Chats
{
    internal class ChatService(IHubContext<ChatHub, IChatHubClient> chatHub,
        IBaseMongoDbRepository<ChatRoom> chatRepository,
        IBaseMongoDbRepository<ChatMessage> messageRepository,
        IDocumentHellper documentHellper,
        IHttpContextAccessor httpContextAccessor) : IChatService
    {
        private readonly IHubContext<ChatHub, IChatHubClient> _chatHub = chatHub;
        private readonly IBaseMongoDbRepository<ChatRoom> _chatRepository = chatRepository;
        private readonly IBaseMongoDbRepository<ChatMessage> _messageRepository = messageRepository;
        private readonly IDocumentHellper _documentHellper = documentHellper;
        private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;

        public async Task<string> AddMessageAsync(string chatId, string userId, string? content = null, MessageType type = MessageType.Text, IFormFile? file = null)
        {
            var chat = await _chatRepository.GetByIdAsync(chatId);
            if (chat.Participants.Any(p => p.UserId == userId))
            {
                string filePath = null;

                if (file is not null)
                {
                    var folderPath = Path.Combine(Pathes.GetUsersPath(), userId);
                    filePath = await _documentHellper.CreateAttachment(file, folderPath);
                }

                var message = new ChatMessage(Ulid.NewUlid().ToString(), type, chatId, userId)
                {
                    Content = content,
                    FileUrl = filePath
                };

                await _messageRepository.AddAsync(message);

                var messageDto = message.Adapt<MessageReadDto>();
                if (!string.IsNullOrWhiteSpace(filePath))
                {
                    messageDto.FileUrl = EndPointsHelper.GetFileUrl(filePath, EndPointsRoutes.Users, _httpContextAccessor);
                }
                var targetParticipants = chat.Participants.Where(p => p.UserId != userId).Select(p => p.UserId).ToArray();

                await _chatHub.Clients.Users(targetParticipants)
                    .MessageAdded(messageDto);

                return message.Id;
            }
            else
                throw new UserNotAllowedToSendMessageException();
        }

        public async Task<string> AddParticipantToChatAsync(string chatId, string userId, ChatParticipantType type, DateTimeOffset? expirationDate, bool Expried = false, bool canSend = true)
        {
            var chatRoom = await _chatRepository.GetByIdAsync(chatId) ?? throw new NotFoundException(nameof(ChatRoom), chatId);

            if (chatRoom.Participants.Any(p => p.UserId == userId))
            {
                return chatRoom.Participants.First(p => p.UserId == userId).Id;
            }
            var participant = new ChatRoomParticipant(Ulid.NewUlid().ToString(), userId)
            {
                ExprationDate = expirationDate,
                Type = type,
                Expried = Expried,
                CanSend = canSend,
            };

            await _chatRepository.UpdateAsync(chatRoom);

            var targetParticipants = chatRoom.Participants.Where(p => p.UserId != userId).Select(p => p.UserId).ToArray();

            var participantDto = participant.Adapt<ChatParticipantReadDto>();

            await _chatHub.Clients.Users(targetParticipants)
                   .ParticipantAdded(participantDto);

            return participant.Id;
        }

        public async Task<ChatRoom> CreateChatRoomAsync(ICollection<ChatRoomParticipant> participants, string title, string? reference = default, bool isGroup = false)
        {
            var chatRoom = new ChatRoom(Ulid.NewUlid().ToString(), isGroup);
            chatRoom.Participants = participants;
            chatRoom.RoomName = title;
            chatRoom.Reference = reference;

            await _chatRepository.AddAsync(chatRoom);

            var targetParticipants = chatRoom.Participants.Select(p => p.UserId).ToArray();

            var roomDto = chatRoom.Adapt<ChatReadDto>();

            await _chatHub.Clients.Users(targetParticipants)
                   .ChatCreated(roomDto);
            return chatRoom;
        }

        public async Task RemoveChatRoomAsync(string chatId)
        {
            var chat = await _chatRepository.GetByIdAsync(chatId);
            if (chat != null)
            {
                await _chatRepository.DeleteAsync(chatId);
                var targetParticipants = chat.Participants.Select(p => p.UserId).ToArray();
                await _chatHub.Clients.Users(targetParticipants)
                         .ChatDeleted(chatId);
            }
        }

        public async Task<string> RemoveMessageAsync(string chatId, string userId, string messageId)
        {
            var chat = await _chatRepository.GetByIdAsync(chatId);
            if (chat.Participants.Any(p => p.UserId == userId))
            {
                var participant = chat.Participants.First(p => p.UserId == userId);
                var message = await _messageRepository.GetAsync(m => m.Id == messageId && m.SenderId == userId);
                if (message is not null)
                {
                    await _messageRepository.DeleteAsync(messageId);
                    var messageDto = message.Adapt<MessageReadDto>();
                    var targetParticipants = chat.Participants.Where(p => p.UserId != userId).Select(p => p.UserId).ToArray();
                    await _chatHub.Clients.Users(targetParticipants)
                        .MessageRemoved(messageDto);
                }

            }
            return messageId;
        }

        public async Task<string> RemoveParticipantFromChatAsync(string chatId, string userId)
        {
            var chat = await _chatRepository.GetByIdAsync(chatId);
            if (chat.Participants.Any(p => p.UserId == userId))
            {
                var participant = chat.Participants.First(p => p.UserId == userId);
                chat.Participants.Remove(participant);
                await _chatRepository.UpdateAsync(chat);

                var targetParticipants = chat.Participants.Where(p => p.UserId != userId).Select(p => p.UserId).ToArray();

                var participantDto = participant.Adapt<ChatParticipantReadDto>();

                await _chatHub.Clients.Users(targetParticipants)
                       .ParticipantRemoved(participantDto);
            }

            return userId;
        }
    }
}
