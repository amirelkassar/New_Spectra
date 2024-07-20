using Microsoft.AspNetCore.Http;
using Spectra.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Infrastructure.Handlers
{
    public class CurrentUserHandler : ICurrentUser
    {
        private readonly HttpContext _context;

        public CurrentUserHandler(IHttpContextAccessor httpContextAccessor)
        {
            _context = httpContextAccessor.HttpContext;
        }
        public string Id => throw new NotImplementedException();
        public string Name => throw new NotImplementedException();

        public string Username => throw new NotImplementedException();

        public string Email => throw new NotImplementedException();

        public string Phone => throw new NotImplementedException();

        public bool IsEmailConfirmed => throw new NotImplementedException();

        public bool IsPhoneConfirmed => throw new NotImplementedException();

        public string CurrentToken => throw new NotImplementedException();

        public bool IsInRole(string role)
        {
            throw new NotImplementedException();
        }
    }
}
