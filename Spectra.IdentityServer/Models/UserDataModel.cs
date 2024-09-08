namespace Spectra.IdentityServer.Models
{
    public class UserDataModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string PhoneNUmber { get; set; }
        public List<string> Roles { get; set; }
    }
}
