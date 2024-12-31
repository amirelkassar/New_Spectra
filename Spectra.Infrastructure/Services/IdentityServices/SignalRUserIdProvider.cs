using System.Security.Claims;
using Microsoft.AspNetCore.SignalR;

namespace Spectra.Infrastructure.Services.IdentityServices
{
    internal class SignalRUserIdProvider : IUserIdProvider
    {
        public string? GetUserId(HubConnectionContext connection)
        {
            return connection.User?.FindFirst(ClaimTypes.Sid)?.Value;
        }
    }
}
