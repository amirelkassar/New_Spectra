namespace Spectra.WebAPI.Areas.User.Models
{
    public class AuthenticationInfoModel
    {
        public AuthenticationInfoModel(IReadOnlyCollection<string> roles,
            IReadOnlyCollection<string> permissions,
            bool hasActiveContract)
        {
            Roles = roles;
            Permissions = permissions;
            HasActiveContract = hasActiveContract;
        }
        public IReadOnlyCollection<string> Roles { get; }
        public IReadOnlyCollection<string> Permissions { get; }
        public bool HasActiveContract { get; }
    }
}
