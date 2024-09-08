using Microsoft.AspNetCore.Http;
using Spectra.Application.Interfaces;
using System.Security.Claims;

namespace Spectra.Infrastructure.Handlers
{
    public class CurrentUserHandler : ICurrentUser
    {
        private readonly HttpContext _context;

        public CurrentUserHandler(IHttpContextAccessor httpContextAccessor )
        {
            _context = httpContextAccessor.HttpContext ?? throw new ArgumentNullException(nameof(httpContextAccessor));
        }

        public string Id => _context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        public string Name => _context.User.Identity.Name;

        public string Username => _context.User.FindFirst("username")?.Value;

        public string Email => _context.User.FindFirst(ClaimTypes.Email)?.Value;

        public string Phone => _context.User.FindFirst(ClaimTypes.MobilePhone)?.Value;

        public bool IsEmailConfirmed => _context.User.FindFirst("email_verified")?.Value == "true";

        public bool IsPhoneConfirmed => _context.User.FindFirst("phone_verified")?.Value == "true";

        public string CurrentToken => _context.Request.Headers["Authorization"].ToString().Replace("Bearer ", "");

        public bool IsInRole(string role)
        {
            return _context.User.IsInRole(role);
        }
        //public string Id => throw new NotImplementedException();
        //public string Name => throw new NotImplementedException();

        //public string Username => throw new NotImplementedException();

        //public string Email => throw new NotImplementedException();

        //public string Phone => throw new NotImplementedException();

        //public bool IsEmailConfirmed => throw new NotImplementedException();

        //public bool IsPhoneConfirmed => throw new NotImplementedException();

        //public string CurrentToken => throw new NotImplementedException();

        //public bool IsInRole(string role)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
