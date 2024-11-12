using Microsoft.AspNetCore.Http;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Constants;
using System.Security.Claims;

namespace Spectra.Infrastructure.Handlers
{
    public class CurrentUserHandler(IHttpContextAccessor httpContextAccessor) : ICurrentUser
    {
        private readonly HttpContext _context = httpContextAccessor.HttpContext ?? throw new ArgumentNullException(nameof(httpContextAccessor));

        public string Id => _context.User.FindFirst(ClaimTypes.Sid)?.Value;

        public string Name => _context.User.Identity.Name;

        public string Username => _context.User.FindFirst(CustomClaims.Username)?.Value;

        public string Email => _context.User.FindFirst(ClaimTypes.Email)?.Value;

        public string Phone => _context.User.FindFirst(ClaimTypes.MobilePhone)?.Value;

        public bool IsEmailConfirmed => Convert.ToBoolean(_context.User.FindFirst(CustomClaims.EmailConfirmed)?.Value);

        public bool IsPhoneConfirmed => Convert.ToBoolean(_context.User.FindFirst(CustomClaims.PhoneConfirmed)?.Value);

        public string CurrentToken => !string.IsNullOrWhiteSpace(_context.Request.Headers[HttpClaims.Authorization])
            ? _context.Request.Headers[HttpClaims.Authorization].ToString().Replace("Bearer ", "")
            : string.Empty;

        public bool IsInRole(string role)
        {
            return _context.User.IsInRole(role);
        }
    }
}
