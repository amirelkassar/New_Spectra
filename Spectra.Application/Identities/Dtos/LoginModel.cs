namespace Spectra.Application.Identities.Dtos
{
    public class LoginModel
    {
        public LoginModel()
        {
            CreationTime = DateTime.UtcNow;
            Permissions = [];
        }
        public string? AccessToken { get; set; }
        public DateTime CreationTime { get; }
        public DateTime ExpirationTime { get; set; }
        public string? RefereshToken { get; set; }
        public ICollection<string> Roles { get; set; }
        public ICollection<string> Permissions { get; set; }
    }
}
