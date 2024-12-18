namespace Spectra.Domain.Shared.Constants
{
    public class DocumentsConts
    {
        public enum FileTypes : byte
        {
            NationalIdFront = 1,
            NationalIdBack = 2,
            Certificate = 3,
            TaxCertificate = 4,
            CommercialRegistration = 5,

        }

        public static string[] SupportedFileExtensions = { ".png", ".jpeg", ".jpg", ".pdf", ".gif", ".webp", ".ico", ".svg", ".pdf", ".word", ".txt", ".excel", ".mp4", ".mp3", ".wav" };
    }
}
