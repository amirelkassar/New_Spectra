using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Notifications;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Notifications.Commands
{
    public class UpdateNotificationStateCommand : IRequest<OperationResult>
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public NotificationChangeStatuses Status { get; set; }

        public class UpdateNotificationStateCommandHandler(IBaseMongoDbRepository<Notification> notifyRepository) : IRequestHandler<UpdateNotificationStateCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Notification> _notifyRepository = notifyRepository;

            public async Task<OperationResult> Handle(UpdateNotificationStateCommand request, CancellationToken cancellationToken)
            {
                var notification = await _notifyRepository.GetAsync(n => n.Id == request.Id && n.Changes.Any(c => c.ReceiverId == request.UserId));
                notification.Changes.FirstOrDefault(c => c.ReceiverId == request.UserId).Status = request.Status;
                return OperationResult.Success();
            }
        }
    }
}
