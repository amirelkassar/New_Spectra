using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Interfaces.IServices
{
    public interface ICurrentUser
    {
        string Id {  get; }
        string Name { get; }
        string Username { get; }
        string Email { get; }
        string Phone { get; }
        bool IsEmailConfirmed { get; }
        bool IsPhoneConfirmed { get; }
        string CurrentToken { get; }

        bool IsInRole(string role);
    }
}
