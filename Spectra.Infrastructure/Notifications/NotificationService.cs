using DocumentFormat.OpenXml.Office2010.Excel;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Spectra.Application.Notifications;
using Spectra.Application.Notifications.Commands;
using Spectra.Application.Notifications.Dtos;
using Spectra.Application.Notifications.Hubs;
using Spectra.Domain.AppUser;
using Spectra.Domain.Notifications;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Notifications
{
    internal class NotificationService(IHubContext<NotificationHub,INotificationClientHub> notificationContext,
        UserManager<AppUser> userManager,
        ISender sender) : INotificationService
    {
        private readonly IHubContext<NotificationHub, INotificationClientHub> _notificationContext = notificationContext;
        private readonly UserManager<AppUser> _userManager = userManager;
        private readonly ISender _sender = sender;

        public async Task<Notification> PushToRoleAsync(string roleName, string title, string content, NotificationTypes type, string? senderId = null, string? objectUrl = null)
        {
            var users = await _userManager.GetUsersInRoleAsync(roleName);
            var userIds = users.Select(u => u.Id).ToArray();
            var notificationRes =(OperationResult<Notification>) await _sender.Send(new CreateNotificationCommand
            {
                Content = content,
                Title = title,
                ObjectUrl = objectUrl,
                SenderId = senderId,
                Type = type,
                Receivers= userIds
            });

            var notification = notificationRes.Data;
            var notificationDto = notification.Adapt<NotificationReadDto>();

            await _notificationContext.Clients.Users(userIds).Receive(notificationDto);


            return notification;
        }

        public async Task<Notification> PushToUserAsync(string userId, string title, string content, NotificationTypes type, string? senderId = null, string? objectUrl = null)
        {
            var notificationRes = (OperationResult<Notification>)await _sender.Send(new CreateNotificationCommand
            {
                Content = content,
                Title = title,
                ObjectUrl = objectUrl,
                SenderId = senderId,
                Type = type,
                Receivers = [userId]
            });

            var notification = notificationRes.Data;
            var notificationDto = notification.Adapt<NotificationReadDto>();
            await _notificationContext.Clients.User(userId).Receive(notificationDto);

            return notification;
        }

        public async Task<Notification> PushToUsersAsync(string[] userIds, string title, string content, NotificationTypes type, string? senderId = null, string? objectUrl = null)
        {
            var notificationRes = (OperationResult<Notification>)await _sender.Send(new CreateNotificationCommand
            {
                Content = content,
                Title = title,
                ObjectUrl = objectUrl,
                SenderId = senderId,
                Type = type,
                Receivers = [.. userIds]
            });

            var notification = notificationRes.Data;
            var notificationDto = notification.Adapt<NotificationReadDto>();

            await _notificationContext.Clients.Users(userIds).Receive(notificationDto);

            return notification;
        }
    }
}
