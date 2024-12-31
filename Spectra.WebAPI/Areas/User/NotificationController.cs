using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spectra.Application.Interfaces;
using Spectra.Application.Notifications.Commands;
using Spectra.Application.Notifications.Queries;
using Spectra.Domain.Shared.Common;

namespace Spectra.WebAPI.Areas.User
{
    public class NotificationController(ILogger<NotificationController> logger, ICurrentUser currentUser,
        IMediator mediator) : UserControllerBase<NotificationController>(logger, currentUser)
    {
        private readonly IMediator _mediator = mediator;

        [HttpGet("list")]
        public async Task<IActionResult> GetListAsync([FromQuery] QueryPaginationParam input)
        {
            var response = await _mediator.Send(new GetNotificationListQuery()
            {
                MaxCount = input.MaxCount,
                SkipCount = input.SkipCount,
                UserId = CurrentUser.Id,
            });

            return Ok(response);
        }

        [HttpPut]
        public async Task<IActionResult> ReadAsync([FromQuery] string id)
        {
            var response = await _mediator.Send(new UpdateNotificationStateCommand
            {
                Id = id,
                Status = Domain.Shared.Enums.NotificationChangeStatuses.Read,
                UserId = CurrentUser.Id
            });
            return Accepted(response);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAsync([FromQuery] string id)
        {
            var response = await _mediator.Send(new UpdateNotificationStateCommand
            {
                Id = id,
                Status = Domain.Shared.Enums.NotificationChangeStatuses.Deleted,
                UserId = CurrentUser.Id
            });
            return Accepted(response);
        }
    }
}
