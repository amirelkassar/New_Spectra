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
    public class CreateNotificationCommand : IRequest<OperationResult>
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string? ObjectUrl { get; set; }
        public string? SenderId { get; set; }
        public NotificationTypes Type { get; set; }
        public ICollection<string> Receivers { get; set; }

        public class CreateNotificationCommandHandler(IBaseMongoDbRepository<Notification> notificationRepository) : IRequestHandler<CreateNotificationCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Notification> _notificationRepository = notificationRepository;

            public async Task<OperationResult> Handle(CreateNotificationCommand request, CancellationToken cancellationToken)
            {
                var notification = new Notification(Ulid.NewUlid().ToString(),
                    request.Title,
                    request.Content,
                    request.Type,
                    request.SenderId,
                    request.ObjectUrl);

                request.Receivers.ToList().ForEach(r =>
                {
                    notification.Changes.Add(new NotificationChange(Ulid.NewUlid().ToString(), notification.Id, r));
                });

                await _notificationRepository.AddAsync(notification);

                return OperationResult<Notification>.Success(notification);
            }
        }
    }
}
