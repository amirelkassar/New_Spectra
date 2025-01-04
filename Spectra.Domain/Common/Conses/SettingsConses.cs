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

        public class PlatformSettings
        {
            private const string platformSettings = Prefix + "platform_settings.";
            public const string Group = "platform_settings";
            public const string Address=platformSettings + "address";
            public const string TaxNumber = platformSettings + "taxnumber";
            public const string LicenseNumber = platformSettings + "licensenumber";
            public const string LogoPathLight = platformSettings + "logopathlight";
            public const string LogoPathDark = platformSettings + "logopathdark";
            public const string PhoneNumber = platformSettings + "phonebumber";
            public const string MobileNumber = platformSettings + "mobilenumber";
            public const string InfoEmail = platformSettings + "infoemail";
            public const string ContactEmail = platformSettings + "contactemail";
            public const string SalesEmail = platformSettings + "salesemail";
            public const string ArabicName = platformSettings + "arabicname";
            public const string EnglishName = platformSettings + "englishname";
            public const string StampPath = platformSettings + "stamppath";

        }
    }
}
