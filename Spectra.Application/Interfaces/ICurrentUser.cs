namespace Spectra.Application.Interfaces
{
    public interface ICurrentUser
    {
        string Id { get; }
        string Name { get; }
        string Username { get; }
        string Email { get; }
        string Phone { get; }
        bool IsEmailConfirmed { get; }
        bool IsPhoneConfirmed { get; }
        string CurrentToken { get; }

        public string Role { get; set; }
    }
}
