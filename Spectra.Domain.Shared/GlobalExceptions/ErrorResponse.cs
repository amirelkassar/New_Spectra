using System.Collections.Generic;

namespace Spectra.Domain.Shared.GlobalExceptions
{
    public class ErrorResponse
    {
        public string ErrorType { get; set; }
        public string ErrorCode { get; set; }
        public string ErrorMessage { get; set; }
        public bool Success { get; set; }
        public Dictionary<string, string[]> ErrorCollection { get; set; }
    }
}
