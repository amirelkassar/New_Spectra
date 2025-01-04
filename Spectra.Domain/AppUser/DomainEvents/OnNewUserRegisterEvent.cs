using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;

namespace Spectra.Domain.AppUser.DomainEvents
{
    public record OnNewUserRegisterEvent : BaseEvent
    {
        public OnNewUserRegisterEvent(string userId,
            string role,
            string? empId = null,
            string? clientId = null) : base(DomainEventType.AfterCommit)
        {
            UserId = userId;
            Role = role;
            EmployeeId = empId;
            ClientId = clientId;
        }

        public string UserId { get; }
        public string Role { get; }
        public string? EmployeeId { get; }
        public string? ClientId { get; }
    }
}
