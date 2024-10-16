namespace Spectra.Application.ChatHub.Services
{
    public interface IChatService
    {
        Task BroadcastMessageAsync(string fromUser, string message);
        Task SendMessageAsync(string fromUser, string toUser, string message);
    }
}