using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Notifications;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Notifications.Commands
{
    public class DeleteNotificationCommand : IRequest<OperationResult>
    {
        public string NotificationId { get; set; }

        public class DeleteNotificationCommandHandler(IBaseMongoDbRepository<Notification> notifyRepository) : IRequestHandler<DeleteNotificationCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Notification> _notifyRepository = notifyRepository;

            public async Task<OperationResult> Handle(DeleteNotificationCommand request, CancellationToken cancellationToken)
            {
                await _notifyRepository.DeleteAsync(request.NotificationId);
                return OperationResult.Success();
            }
        }
    }
}
