using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DocumentFormat.OpenXml.Wordprocessing;
using Mapster;
using MediatR;
using MongoDB.Bson;
using MongoDB.Driver;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.Notifications.Dtos;
using Spectra.Domain.Employees;
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
                var collection = await _notifyRepository.GetCollectionAsync();
                var filterBuilder = Builders<Notification>.Filter;
                var filter = filterBuilder.Empty;
                filterBuilder.Where(n => n.Changes.Any(c => c.ReceiverId == request.UserId && c.Status != NotificationChangeStatuses.Deleted));
                var total = await collection.CountDocumentsAsync(filter);
                var sortBuilder = Builders<Notification>.Sort;
                var sort = sortBuilder.Descending("Changes.Status");

                // Step 4: Execute the query
                var notificationsQuery = collection
                    .Find(filter)
                    .Sort(sort)
                    .Skip(request.SkipCount)
                    .Limit(request.MaxCount);

                var data = await notificationsQuery.ToListAsync();
                var dtos = data.Adapt<ICollection<NotificationReadDto>>(NotificationReadDto.Configure());
                var response = new PaginatedResult<NotificationReadDto>(dtos, total, request.MaxCount)
                {
                    UnReadNotifications = dtos.Any(n => n.Status == NotificationChangeStatuses.Unread)
                };
                return OperationResult<PaginatedResult<NotificationReadDto>>.Success(response);
            }
        }
    }
}
