namespace Spectra.Domain.Shared.Constants
{
    public class CustomClaims
    {
        public const string Surname = nameof(Surname);
        public const string ClientId = nameof(ClientId);
        public const string Username = nameof(Username);
        public const string PhoneConfirmed = nameof(PhoneConfirmed);
        public const string EmailConfirmed = nameof(EmailConfirmed);
        public const string Permissions = nameof(Permissions);
        public const string Aud = "aud";
        public const string Iss = "iss";
    }

    public class HttpClaims
    {
        public const string Authorization = nameof(Authorization);
    }
}
