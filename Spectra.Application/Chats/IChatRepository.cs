

using Spectra.Infrastructure.ChatHub;

namespace Spectra.Application.ChatHub
{
    public interface IChatRepository
    {
        Task AddAsync(SendPrivateMessageRequest chat);
    }
}