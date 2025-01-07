using System.Net;
using System.Net.Mail;
using FluentEmail.Core;
using FluentEmail.Smtp;
using Spectra.Application.Commons.Dtos;
using Spectra.Application.Interfaces;
using Spectra.Application.Settings.AppSettings;
using Spectra.Domain.Common.Conses;

namespace Spectra.Infrastructure.EmailSenders
{
    internal class FluentEmailSender : IEmailSender
    {
        private readonly IFluentEmail _fluentEmail;
        private readonly ISettingService _settingService;

        public FluentEmailSender(IFluentEmail fluentEmail, ISettingService settingService)
        {
            _fluentEmail = fluentEmail;
            _settingService = settingService;
        }
        public async Task<bool> SendAsync(EmailMetadata input)
        {
            await SetupSenderAsync();
            var response = await _fluentEmail
                .To(input.ToAddress)
                .Subject(input.Subject)
                .Body(input.Body)
                .SendAsync();

            return response.Successful;
        }

        public async Task SendRangeAsync(ICollection<EmailMetadata> input)
        {
            await SetupSenderAsync();
            Parallel.ForEach(input, async email =>
            {
                await _fluentEmail
                   .To(email.ToAddress)
                   .Subject(email.Subject)
                   .Body(email.Body)
                   .SendAsync();
            });

            await Task.CompletedTask;
        }

        private async Task SetupSenderAsync()
        {
            var emailSettings = await _settingService.GetListAsync(SettingsConses.EmailSettings.Group);
            var host = emailSettings.FirstOrDefault(s => s.LogicalName == SettingsConses.EmailSettings.Host)?.Value;
            var port = Convert.ToInt32(emailSettings.FirstOrDefault(s => s.LogicalName == SettingsConses.EmailSettings.Port)?.Value);
            var password = await _settingService.GetValueAsync<string>(SettingsConses.EmailSettings.Password);
            var emailAddress = emailSettings.FirstOrDefault(s => s.LogicalName == SettingsConses.EmailSettings.EmailAddress)?.Value;
            var name = emailSettings.FirstOrDefault(s => s.LogicalName == SettingsConses.EmailSettings.Name)?.Value;
            var useSsl = Convert.ToBoolean(emailSettings.FirstOrDefault(s => s.LogicalName == SettingsConses.EmailSettings.Name)?.Value);
            var useDefaultCerd = Convert.ToBoolean(emailSettings.FirstOrDefault(s => s.LogicalName == SettingsConses.EmailSettings.UseDefaultCredentials)?.Value);



            using var smtpClient = new SmtpClient(host, port)
            {
                EnableSsl = useSsl,
                UseDefaultCredentials = useDefaultCerd,
            };

            smtpClient.Credentials = new NetworkCredential(emailAddress, password);

            Email.DefaultSender = new SmtpSender(smtpClient);

            _fluentEmail.SetFrom(emailAddress, name);
        }
    }
}
