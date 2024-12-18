using System;
using System.Collections.Generic;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.Shared.Wrappers
{

    public class OperationResult
    {
        private readonly ICollection<BaseEvent> _events;
        private OperationResult()
        {
            OperationId = Guid.NewGuid();
            this.errors = new Dictionary<string, string[]>();
        }
        protected OperationResult(int code, string message, IDictionary<string, string[]>? errors = null)
        {
            Code = code;
            Message = message;
            this.errors = errors;
            SuccessOpration = errors is null || errors.Count == 0;
            OperationId = Guid.NewGuid();
            _events = [];
        }
        public Guid OperationId { get; }
        public bool SuccessOpration { get; }
        public int Code { get; }
        public string? Message { get; }
        public IDictionary<string, string[]>? errors { get; }
        public static OperationResult Success(int code = 200, string message = "Valid Operation!") => new OperationResult(code, message);
        public static OperationResult Failure(IDictionary<string, string[]> errors, int code = 400, string message = "Invalid Operation!")
             => new OperationResult(code, message, errors);
        public void AddDomainEvent(BaseEvent domainEvent) => _events.Add(domainEvent);
        public ICollection<BaseEvent> GetEvents() => _events;
        public void ClearEvents() => _events.Clear();
    }
    public class OperationResult<TData> : OperationResult
    {
        private OperationResult(TData data, int code, string message, IDictionary<string, string[]>? errors = null) : base(code, message, errors)
        {
            Data = data;
        }
        public TData Data { get; }

        public static OperationResult<TData> Success(TData data, int code = 200, string message = "Valid Operation!") => new OperationResult<TData>(data, code, message);
        public static OperationResult<object?> Failure(IDictionary<string, string[]> errors, int code = 400, string message = "Invalid Operation!")
             => new OperationResult<object?>(null, code, message, errors);
    }
}
