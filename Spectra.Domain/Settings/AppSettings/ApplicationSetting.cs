using Spectra.Domain.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Settings.AppSettings
{
    public class ApplicationSetting : BaseAuditableEntity<string>
    {
        protected ApplicationSetting()
        {
            
        }
        private ApplicationSetting(string id,
            string name, bool encrypted)
        {
            Id = id;
            DisplayName = name;
            LogicalName = name;
            Encrypted = encrypted;
        }
        public string DisplayName { get; set; }
        public string LogicalName { get; private set; }
        public string? Value { get; set; }
        public string? Description { get; set; }
        public string? Group { get; set; }
        public bool Encrypted { get; set; }


        public static ApplicationSetting Create(string id,
            string name, bool encrypted)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(encrypted, nameof(encrypted));
           
            return new ApplicationSetting(id, name, encrypted);
        }
    }
}
