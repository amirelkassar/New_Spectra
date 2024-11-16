using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
