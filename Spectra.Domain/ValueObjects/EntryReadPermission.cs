using Spectra.Domain.Shared.Common;
using System.Collections.Generic;

namespace Spectra.Domain.ValueObjects
{
    public sealed class EntityRecordPermission : ValueObject
    {
        public bool Read { get; set; }
        public bool Write { get; set; }
        public bool Delete { get; set; }
        public bool Share { get; set; }
        public bool Disable { get; set; }
        public bool Export { get; set; }
        public bool Enable { get; set; }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Read;
            yield return Write;
            yield return Delete;
            yield return Share;
            yield return Disable;
            yield return Export;
            yield return Enable;
        }
    }
}
