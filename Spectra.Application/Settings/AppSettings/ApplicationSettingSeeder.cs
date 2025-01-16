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
            await AddEmailSettings();
            await AddPlatformSettings();
        }

        private async Task AddEmailSettings()
        {
            if (!await _settingService.AnyAsync(EmailSettings.Host))
                await _settingService.CreateSettingAsync(EmailSettings.Host, "smtp.hostinger.com", false, group: EmailSettings.Group);

            if (!await _settingService.AnyAsync(EmailSettings.Port))
                await _settingService.CreateSettingAsync(EmailSettings.Port, "587", false, group: EmailSettings.Group);

            if (!await _settingService.AnyAsync(EmailSettings.UseDefaultCredentials))
                await _settingService.CreateSettingAsync(EmailSettings.UseDefaultCredentials, "false", false, group: EmailSettings.Group);

            if (!await _settingService.AnyAsync(EmailSettings.EmailAddress))
                await _settingService.CreateSettingAsync(EmailSettings.EmailAddress, "test.spectra@profound-group.com", false, group: EmailSettings.Group);

            if (!await _settingService.AnyAsync(EmailSettings.Name))
                await _settingService.CreateSettingAsync(EmailSettings.Name, "Spectra", false, group: EmailSettings.Group);

            if (!await _settingService.AnyAsync(EmailSettings.Password))
                await _settingService.CreateSettingAsync(EmailSettings.Password, "uY4lSQjZWyH:", true, group: EmailSettings.Group);

            if (!await _settingService.AnyAsync(EmailSettings.UseSSL))
                await _settingService.CreateSettingAsync(EmailSettings.UseSSL, "true", true, group: EmailSettings.Group);
        }

        private async Task AddPlatformSettings()
        {
            if (!await _settingService.AnyAsync(PlatformSettings.Address))
                await _settingService.CreateSettingAsync(PlatformSettings.Address, "", false, group: PlatformSettings.Group);

            if (!await _settingService.AnyAsync(PlatformSettings.TaxNumber))
                await _settingService.CreateSettingAsync(PlatformSettings.TaxNumber, "", false, group: PlatformSettings.Group);

            if (!await _settingService.AnyAsync(PlatformSettings.LicenseNumber))
                await _settingService.CreateSettingAsync(PlatformSettings.LicenseNumber, "", false, group: PlatformSettings.Group);

            if (!await _settingService.AnyAsync(PlatformSettings.LogoPathLight))
                await _settingService.CreateSettingAsync(PlatformSettings.LogoPathLight, "", false, group: PlatformSettings.Group);

            if (!await _settingService.AnyAsync(PlatformSettings.LogoPathDark))
                await _settingService.CreateSettingAsync(PlatformSettings.LogoPathDark, "", false, group: PlatformSettings.Group);

            if (!await _settingService.AnyAsync(PlatformSettings.PhoneNumber))
                await _settingService.CreateSettingAsync(PlatformSettings.PhoneNumber, "", true, group: PlatformSettings.Group);

            if (!await _settingService.AnyAsync(PlatformSettings.MobileNumber))
                await _settingService.CreateSettingAsync(PlatformSettings.MobileNumber, "", true, group: PlatformSettings.Group);

            if (!await _settingService.AnyAsync(PlatformSettings.InfoEmail))
                await _settingService.CreateSettingAsync(PlatformSettings.InfoEmail, "", true, group: PlatformSettings.Group);

            if (!await _settingService.AnyAsync(PlatformSettings.ContactEmail))
                await _settingService.CreateSettingAsync(PlatformSettings.ContactEmail, "", true, group: PlatformSettings.Group);

            if (!await _settingService.AnyAsync(PlatformSettings.SalesEmail))
                await _settingService.CreateSettingAsync(PlatformSettings.SalesEmail, "", true, group: PlatformSettings.Group);

            if (!await _settingService.AnyAsync(PlatformSettings.ArabicName))
                await _settingService.CreateSettingAsync(PlatformSettings.ArabicName, "", true, group: PlatformSettings.Group);

            if (!await _settingService.AnyAsync(PlatformSettings.EnglishName))
                await _settingService.CreateSettingAsync(PlatformSettings.EnglishName, "", true, group: PlatformSettings.Group);

            if (!await _settingService.AnyAsync(PlatformSettings.StampPath))
                await _settingService.CreateSettingAsync(PlatformSettings.StampPath, "", true, group: PlatformSettings.Group);
        }
    }
}
