using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mapster;
using MediatR;
using MongoDB.Driver;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.Notifications.Dtos;
using Spectra.Domain.Notifications;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Notifications.Queries
{
    public class GetNotificationListQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string UserId { get; set; }

        public class GetNotificationListQueryHandler(IBaseMongoDbRepository<Notification> notifyRepository) : IRequestHandler<GetNotificationListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Notification> _notifyRepository = notifyRepository;

            public async Task<OperationResult> Handle(GetNotificationListQuery request, CancellationToken cancellationToken)
            {
                var (notifications, total) = await _notifyRepository.GetAllAsync(n => n.Changes.Any(c => c.ReceiverId == request.UserId && c.Status != NotificationChangeStatuses.Deleted), null, request.SkipCount, request.MaxCount);
                var dtos = notifications.Adapt<IReadOnlyCollection<NotificationReadDto>>(NotificationReadDto.Configure());

                return OperationResult<PaginatedResult<NotificationReadDto>>.Success(new PaginatedResult<NotificationReadDto>(dtos, total, request.MaxCount));
            }
        }
    }
}
