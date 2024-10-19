using System;
using System.Collections.Generic;
<<<<<<< HEAD

namespace Spectra.Domain.Shared.Wrappers
{

    public class OperationResult
    {
        private OperationResult()
=======

namespace Spectra.Domain.Shared.Wrappers
{
    public class OperationResult<TData>
    {
        protected OperationResult()
>>>>>>> Admin-BackEnd
        {
            OperationId = Guid.NewGuid();
            Errors = new Dictionary<string, string[]>();
        }
<<<<<<< HEAD
        protected OperationResult(int code, string message, IDictionary<string, string[]>? errors = null)
        {
=======
        protected OperationResult(TData data, int code, string message, IDictionary<string, string[]>? errors = null) : this()
        {
            Data = data;
>>>>>>> Admin-BackEnd
            Code = code;
            Message = message;
            Errors = errors;
            SuccessOpration = Errors is null || Errors.Count == 0;
        }
        public Guid OperationId { get; }
<<<<<<< HEAD
        public bool SuccessOpration { get; }
        public int Code { get; }
        public string? Message { get; }
        public IDictionary<string, string[]>? Errors { get; }
        public static OperationResult Success(int code = 200, string message = "Valid Operation!") => new OperationResult(code, message);
        public static OperationResult Failure(IDictionary<string, string[]> errors, int code = 400, string message = "Invalid Operation!")
             => new OperationResult(code, message, errors);
    }
    public class OperationResult<TData> : OperationResult
    {
        private OperationResult(TData data, int code, string message, IDictionary<string, string[]>? errors = null) : base(code, message, errors)
        {
            Data = data;
        }
        public TData Data { get; }
=======

        public bool SuccessOpration { get; }
        public int Code { get; set; }
        public string? Message { get; set; }
        public IDictionary<string, string[]>? Errors { get; set; }
        public TData Data { get; set; }
>>>>>>> Admin-BackEnd

        public static OperationResult<TData> Success(TData data, int code = 200, string message = "Valid Operation!") => new OperationResult<TData>(data, code, message);
        public static OperationResult<object?> Failure(IDictionary<string, string[]> errors, int code = 400, string message = "Invalid Operation!")
             => new OperationResult<object?>(null, code, message, errors);
    }
}
