using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Chats;
using Spectra.Domain.Chats.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Chats.Commands
{
    public class RemoveMessageCommand : IRequest<OperationResult>
    {
        public string MessageId { get; set; }

        public class RemoveMessageCommandHandler(IBaseMongoDbRepository<ChatMessage> messageRepository,
            ICurrentUser currentUser) : IRequestHandler<RemoveMessageCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<ChatMessage> _messageRepository = messageRepository;
            private readonly ICurrentUser _currentUser = currentUser;

            public async Task<OperationResult> Handle(RemoveMessageCommand request, CancellationToken cancellationToken)
            {
                var message = await _messageRepository.GetAsync(m => m.Id == request.MessageId && m.SenderId == _currentUser.Id) ?? throw new UserNotAllowedToRemoveMessageException();

                await _messageRepository.DeleteAsync(message.Id);

                return OperationResult.Success();
            }
        }
    }
}
