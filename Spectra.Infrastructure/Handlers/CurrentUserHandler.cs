using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Constants;

namespace Spectra.Infrastructure.Handlers
{
    public class CurrentUserHandler : ICurrentUser
    {
        private readonly HttpContext _context;
        public CurrentUserHandler(IHttpContextAccessor httpContextAccessor)
        {
            if(httpContextAccessor is not null && httpContextAccessor.HttpContext is not null)
            _context = httpContextAccessor.HttpContext;
        }

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

        public string Role => _context.User.FindFirst(ClaimTypes.Role)?.Value;

        public string EmployeeId => _context.User.FindFirst(CustomClaims.EmployeeId)?.Value;

        public bool IsInRole(string role)
        {
            return _context.User.IsInRole(role);
        }
    }
}
