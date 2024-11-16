using System;

namespace Spectra.Domain.Shared.Common.Exceptions
{
    public class AlreadyExistException : Exception
    {
        public AlreadyExistException(string value, string key)
    : base($"Entity with {key} = {value} already exists")
        {
            Value = value;
            Key = key;
        }

        public string Value { get; }
        public string Key { get; }
    }
}
