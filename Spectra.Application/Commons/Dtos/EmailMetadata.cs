namespace Spectra.Application.Commons.Dtos
{
    public class EmailMetadata(string toAddress, string subject, string? body = "",
        string[]? attachments = default)
    {
        public string ToAddress { get; private set; } = toAddress;
        public string Subject { get; private set; } = subject;
        public string? Body { get; private set; } = body;
        public string[]? Attachments { get; private set; } = attachments;
    }
}
