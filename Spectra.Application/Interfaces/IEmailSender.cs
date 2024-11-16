using Spectra.Application.Commons.Dtos;

namespace Spectra.Application.Interfaces
{
    public interface IEmailSender
    {
        Task<bool> SendAsync(EmailMetadata input);
        Task SendRangeAsync(ICollection<EmailMetadata> input);
    }
}
