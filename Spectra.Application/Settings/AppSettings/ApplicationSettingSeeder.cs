using static Spectra.Domain.Common.Conses.SettingsConses;

namespace Spectra.Application.Settings.AppSettings
{
    public class ApplicationSettingSeeder
    {
        private readonly ISettingService _settingService;

        public ApplicationSettingSeeder(ISettingService settingService)
        {
            _settingService = settingService;
        }

        public async Task Initialize()
        {
            if (!await _settingService.AnyAsync(EmailSettings.Host))
                await _settingService.CreateSettingAsync(EmailSettings.Host, "127.0.0.1", false, group: EmailSettings.Group);

            if (!await _settingService.AnyAsync(EmailSettings.Port))
                await _settingService.CreateSettingAsync(EmailSettings.Port, "567", false, group: EmailSettings.Group);

            if (!await _settingService.AnyAsync(EmailSettings.UseDefaultCredentials))
                await _settingService.CreateSettingAsync(EmailSettings.UseDefaultCredentials, "true", false, group: EmailSettings.Group);

            if (!await _settingService.AnyAsync(EmailSettings.EmailAddress))
                await _settingService.CreateSettingAsync(EmailSettings.EmailAddress, "tech@profound-group.com", false, group: EmailSettings.Group);

            if (!await _settingService.AnyAsync(EmailSettings.Name))
                await _settingService.CreateSettingAsync(EmailSettings.Name, "Spectra", false, group: EmailSettings.Group);

            if (!await _settingService.AnyAsync(EmailSettings.Password))
                await _settingService.CreateSettingAsync(EmailSettings.Password, "Testing@1234", true, group: EmailSettings.Group);

            if (!await _settingService.AnyAsync(EmailSettings.UseSSL))
                await _settingService.CreateSettingAsync(EmailSettings.UseSSL, "true", true, group: EmailSettings.Group);
        }
    }
}
