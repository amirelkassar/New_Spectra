using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;

namespace Spectra.Domain.Patients.PatientsData
{
    public class PatientData : BaseAuditableEntity<string>
    {
        public string PatientId { get; private set; }
        public string Name { get; set; }
        public PatientDataCategories Category { get; private set; }
        public string? Description { get; set; }
        public string Value { get; set; }
        public DateTime SourceCreationDate { get; set; }
        public DateTime? InfoDate { get; set; }
        public string? Source { get; set; }
        public DateTime? ToDate { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ValidToDate { get; set; }

        private PatientData(string id,
            string patientId,
            string name,
            PatientDataCategories category,
            string value,
            DateTime sourceCreationDate) : base(id)
        {
            Name = name;
            Category = category;
            Value = value;
            SourceCreationDate = sourceCreationDate;
        }


        public static PatientData Create(string id,
             string patientId,
            string name,
            PatientDataCategories category,
            string value,
            DateTime sourceCreationDate)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(category, nameof(category));
            ArgumentNullException.ThrowIfNull(value, nameof(value));
            ArgumentNullException.ThrowIfNull(sourceCreationDate, nameof(sourceCreationDate));

            return new PatientData(id, patientId, name, category, value, sourceCreationDate);
        }
    }
}
