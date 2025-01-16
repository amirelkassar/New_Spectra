using Microsoft.AspNetCore.DataProtection;
using Spectra.Application.Settings.AppSettings;
using Spectra.Domain.Settings.AppSettings;
using Spectra.Domain.Shared.Common.Exceptions;

namespace Spectra.Infrastructure.Settings.AppSettings
{
    internal class SettingService : ISettingService
    {
        private readonly ISettingRepository _settingRepository;
        private readonly IDataProtector _dataProtector;

        public SettingService(ISettingRepository settingRepository,
            IDataProtectionProvider dataProtectionProvider)
        {
            _settingRepository = settingRepository;
            _dataProtector = dataProtectionProvider.CreateProtector(nameof(SettingService));
        }

        public async Task<bool> AnyAsync(string name) => await _settingRepository.AnyAsync(s => s.LogicalName == name);

        public async Task<ApplicationSetting?> CreateSettingAsync(string name, string value, bool encrypted, string? description = null, string? group = null)
        {
            var setting = ApplicationSetting.Create(Ulid.NewUlid().ToString(), name, encrypted);

            if (!string.IsNullOrWhiteSpace(value))
                setting.Value = encrypted ? _dataProtector.Protect(value) : value;

            setting.Description = description;
            setting.Group = group;

            await _settingRepository.AddAsync(setting);
            return setting;
        }

        public async Task DeleteAsync(string name)
        {
            var setting = await _settingRepository.GetByNameAsync(name);
            await _settingRepository.DeleteAsync(setting);
        }

        public async Task DeleteGroupAsync(string? group = null)
        {
            var settings = await _settingRepository.GetAllAsync(s => s.Group == group);
            await _settingRepository.DeleteRangeAsync(settings.ToArray());
        }

        public async Task<ICollection<ApplicationSetting>> GetListAsync(string? group = null)
        {
            var settings = await _settingRepository.GetAllAsync(s => s.Group == group);
            var result = new List<ApplicationSetting>();

            foreach (var setting in settings)
            {
                if (setting.Encrypted)
                {
                    setting.Value = _dataProtector.Unprotect(setting.Value);
                }
                result.Add(setting);
            }

            return result;
        }

        public async Task<ApplicationSetting> GetSettingAsync(string name)
        {
            var setting = await _settingRepository.GetByNameAsync(name);
            if (setting.Encrypted)
            {
                setting.Value = _dataProtector.Unprotect(setting.Value);
            }
            return setting;
        }

        public async Task<T> GetValueAsync<T>(string name)
        {
            var setting = await _settingRepository.GetByNameAsync(name);
            if (setting.Encrypted)
            {
                setting.Value = _dataProtector.Unprotect(setting.Value);
            }
            return (T)Convert.ChangeType(setting.Value,typeof(T));
        }

        public async Task<ApplicationSetting> SetValueAsync(string name, string value, string? description = null)
        {
            var setting = await _settingRepository.GetByNameAsync(name) ?? throw new NotFoundException("ApplicationSetting", name);

            if (!string.IsNullOrWhiteSpace(value))
                setting.Value = setting.Encrypted ? _dataProtector.Protect(value) : value;
            setting.Description = description;
            await _settingRepository.UpdateAsync(setting);

            return setting;
        }
    }
}
