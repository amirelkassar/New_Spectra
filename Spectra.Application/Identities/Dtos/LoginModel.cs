namespace Spectra.Application.Identities.Dtos
{
    public class LoginModel
    {
        public LoginModel()
        {
            CreationTime = DateTime.UtcNow;
        }
        public string? AccessToken { get; set; }
        public DateTime CreationTime { get; }
        public DateTime ExpirationTime { get; set; }
        public string? RefereshToken { get; set; }
    }
}
