namespace Spectra.Domain.Common.Conses
{
    public class SettingsConses
    {
        private const string Prefix = "spect.";
        public class EmailSettings
        {
            private const string emailSettings = Prefix + "email_settings.";
            public const string Group = "email_settings";
            public const string Host = emailSettings + "host";
            public const string UseDefaultCredentials = emailSettings + "use_defaultcredentials";
            public const string Port = emailSettings + "port";
            public const string Name = emailSettings + "name";
            public const string EmailAddress = emailSettings + "email_address";
            public const string Password = emailSettings + "password";
            public const string UseSSL = emailSettings + "use_ssl";
        }
    }
}
