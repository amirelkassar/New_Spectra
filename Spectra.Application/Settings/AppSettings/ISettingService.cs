using MongoDB.Driver;
using Spectra.Domain.Settings.AppSettings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Settings.AppSettings
{
    public interface ISettingService
    {
        Task<ApplicationSetting> GetSettingAsync(string name);
        Task<ApplicationSetting?> CreateSettingAsync(string name, string value, bool encrypted, string? description = default, string? group = default);
        Task<ApplicationSetting> SetValueAsync(string name, string value, string? description = default);
        Task<ICollection<ApplicationSetting>> GetListAsync(string? group = default);
        Task DeleteAsync(string name);
        Task DeleteGroupAsync(string? group = default);
    }
}
