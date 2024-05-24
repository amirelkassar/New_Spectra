using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Wrappers
{
    public class OperationResult<TData>
    {
        protected OperationResult()
        {
            OperationId = Guid.NewGuid();
            Errors = new Dictionary<string, string[]>();
        }
        protected OperationResult(TData data, int code, string message, IDictionary<string, string[]>? errors = null) : this()
        {
            Data = data;
            Code = code;
            Message = message;
            Errors = errors;
            Success = Errors is null || Errors.Count == 0;
        }
        public Guid OperationId { get; }

        public bool Success { get; }
        public int Code { get; set; }
        public string? Message { get; set; }
        public IDictionary<string, string[]>? Errors { get; set; }
        public TData Data { get; set; }

        public static OperationResult<TData> SuccessOperation(TData data, int code = 200, string message = "Valid Operation!") => new OperationResult<TData>(data, code, message);
        public static OperationResult<object?> Failure(IDictionary<string, string[]> errors, int code = 400, string message = "Invalid Operation!") => new OperationResult<object?>(null, code, message, errors);

    }
}
