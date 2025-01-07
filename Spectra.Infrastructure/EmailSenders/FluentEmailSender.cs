using System.Net;
using System.Net.Mail;
using FluentEmail.Core;
using FluentEmail.Smtp;
using Mapster;
using Microsoft.Extensions.Logging;
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
        private readonly ILogger<FluentEmailSender> _logger;

        public FluentEmailSender(IFluentEmail fluentEmail,
            ISettingService settingService,
            ILogger<FluentEmailSender> logger)
        {
            _fluentEmail = fluentEmail;
            _settingService = settingService;
            _logger = logger;
        }
        public async Task<bool> SendAsync(EmailMetadata input)
        {
            using (var smtpClient = await SetupSenderAsync())
            {
                var email = _fluentEmail
               .To(input.ToAddress)
               .Subject(input.Subject)
               .Body(input.Body, true);

                if (input.Attachments != null)
                {
                    foreach (var item in input.Attachments)
                    {
                        _logger.LogInformation("Data is {0}", item.Data is not null);

                        if(item.Data is not null)
                        email.Attach(new FluentEmail.Core.Models.Attachment
                        {
                            Filename = item.Filename,
                            IsInline = item.IsInline,
                            ContentType = item.ContentType,
                            Data = item.Data
                        });
                    }
                }

                var response = await email.SendAsync();

                return response.Successful;
            }
        }

        public async Task SendRangeAsync(ICollection<EmailMetadata> input)
        {
            using (var smtpClient = await SetupSenderAsync())
            {
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
        }

        private async Task<SmtpClient> SetupSenderAsync()
        {
            var emailSettings = await _settingService.GetListAsync(SettingsConses.EmailSettings.Group);
            var host = emailSettings.FirstOrDefault(s => s.LogicalName == SettingsConses.EmailSettings.Host)?.Value;
            var port = Convert.ToInt32(emailSettings.FirstOrDefault(s => s.LogicalName == SettingsConses.EmailSettings.Port)?.Value);
            var password = await _settingService.GetValueAsync<string>(SettingsConses.EmailSettings.Password);
            var emailAddress = emailSettings.FirstOrDefault(s => s.LogicalName == SettingsConses.EmailSettings.EmailAddress)?.Value;
            var name = emailSettings.FirstOrDefault(s => s.LogicalName == SettingsConses.EmailSettings.Name)?.Value;
            var useSsl = Convert.ToBoolean(emailSettings.FirstOrDefault(s => s.LogicalName == SettingsConses.EmailSettings.UseSSL)?.Value);
            var useDefaultCerd = Convert.ToBoolean(emailSettings.FirstOrDefault(s => s.LogicalName == SettingsConses.EmailSettings.UseDefaultCredentials)?.Value);



            var smtpClient = new SmtpClient(host, port)
            {
                EnableSsl = useSsl,
                UseDefaultCredentials = useDefaultCerd,
                Credentials = new NetworkCredential(emailAddress, password)
            };

            smtpClient.SendCompleted += (s, e) =>
            {
                if (e.Error != null)
                {
                    _logger.LogError(e.Error, "Error while sending an email\n with details {0}", s);
                }
                else
                {
                    _logger.LogInformation("Email sent with details {0}", s);
                }
            };

            _fluentEmail.Sender = new SmtpSender(smtpClient);

            _fluentEmail.SetFrom(emailAddress, name);
            return smtpClient;
        }
    }
}
