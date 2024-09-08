using System.Text.RegularExpressions;

namespace Spectra.Domain.Shared.Helpers
{
    public static class StringExtensionHelper
    {
        public static bool IsNullOrWhiteSpace(this string value) => string.IsNullOrWhiteSpace(value);
        public static bool IsPhoneNumber(this string value)
        {
            string pattern = @"^(\+?\d{1,2}\s?)?((\d{3}[-.\s]?){2}\d{4}|\(\d{3}\)\s?\d{3}[-.\s]?\d{4})$";
            Regex regex = new(pattern);
            return regex.IsMatch(value);
        }

    }
}
