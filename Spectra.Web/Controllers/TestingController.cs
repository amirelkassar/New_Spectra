using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spectra.Application.Notifications;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestingController(INotificationService notificationService) : ControllerBase
    {
        private readonly INotificationService _notificationService = notificationService;

        [HttpPost]
        public async Task<IActionResult> SendAdminAsync()
        {
            await _notificationService.PushToRoleAsync(Roles.SystemAdmin, "Testing", "Testing", NotificationTypes.System);
            return Ok();
        }
    }
}
