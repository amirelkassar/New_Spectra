using FluentEmail.Core;
using Spectra.Application.Commons.Dtos;
using Spectra.Application.Interfaces;

namespace Spectra.Infrastructure.EmailSenders
{
    internal class FluentEmailSender : IEmailSender
    {
        private readonly IFluentEmail _fluentEmail;

        public FluentEmailSender(IFluentEmail fluentEmail)
        {
            _fluentEmail = fluentEmail;
        }
        public async Task<bool> SendAsync(EmailMetadata input)
        {
            var response = await _fluentEmail.To(input.ToAddress)
            .Subject(input.Subject)
            .Body(input.Body)
            .SendAsync();

            return response.Successful;
        }

        public async Task SendRangeAsync(ICollection<EmailMetadata> input)
        {
            Parallel.ForEach(input, async email =>
            {
                await _fluentEmail.To(email.ToAddress)
                   .Subject(email.Subject)
                   .Body(email.Body)
                   .SendAsync();
            });

            await Task.CompletedTask;
        }
    }
}
