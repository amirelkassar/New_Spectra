namespace Spectra.Application.Commons.Dtos
{
    public class EmailMetadata(string toAddress, string subject, string? body = "",
        EmailAttachment[]? attachments = default)
    {
        public string ToAddress { get; private set; } = toAddress;
        public string Subject { get; private set; } = subject;
        public string? Body { get; private set; } = body;
        public EmailAttachment[]? Attachments { get; private set; } = attachments;
    }

    public class EmailAttachment(string fileName, string contentType, Stream data)
    {
        public bool IsInline { get; set; }

        public string Filename { get; private set; } = fileName;

        public Stream Data { get; private set; }=data;

        public string ContentType { get; private set; } = contentType;

        public string ContentId { get; set; }
    }
}
