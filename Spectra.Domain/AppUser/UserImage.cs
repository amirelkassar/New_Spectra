using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.AppUser
{
    public class UserImage : BaseEntity<string>
    {
        public string UserId { get; set; }
        public string? EmployeeId { get; set; }
        public string ImagePath { get; set; }
    }
}
