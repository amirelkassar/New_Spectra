using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;

namespace Spectra.Domain.ValueObjects
{
    public sealed class Certificate : ValueObject
    {
        public string? Description { get; set; }
        public string Name { get; set; }
        public DateTime CertificationDate { get; set; }
        public string Organization { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public CertificateTypes CertificateType { get; set; }
        public string? Tags { get; private set; }
        public string DocumentId { get; set; }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Description;
            yield return Name;
            yield return CertificationDate;
            yield return Organization;
            yield return ExpirationDate;
            yield return CertificateType;
            yield return Tags;
            yield return DocumentId;
        }
    }
}
