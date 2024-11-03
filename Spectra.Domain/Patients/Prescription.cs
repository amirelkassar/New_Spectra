using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Spectra.Domain.Common.Conses.Units;

namespace Spectra.Domain.Patients
{
    public class Prescription : BaseAuditableEntity<string>
    {
        public Prescription(string id,
            string doctorName,
            string doctorMedicalNumber,
            string sessionId,
            string sessionNumber,
            string patientId,
            string patientName,
            HumenGender patientGender,
            string clientId,
            string clientName,
            string rx)
        {
            Id = id;
            DoctorName = doctorName;
            DoctorMedicalNumber = doctorMedicalNumber;
            SessionId = sessionId;
            SessionNumber = sessionNumber;
            PatientId = patientId;
            PatientName = patientName;
            Gender = patientGender;
            ClientId = clientId;
            ClientId = clientName;
            RX = rx;
        }
        public string DoctorName { get; private set; }
        public string DoctorMedicalNumber { get; private set; }
        public string SessionId { get;private set; }
        public string SessionNumber { get; private set; }
        public string PatientId { get; private set; }
        public string PatientName { get; private set; }
        public HumenGender Gender { get; set; }
        public string ClientId { get; private set; }
        public string ClientName { get; private set; }
        public string RX { get; private set; }
        public ICollection<PrescriptionDetail> Details { get;private set; }
        public string Notes { get; set; }
    }

    public class PrescriptionDetail : BaseEntity<string>
    {
        public string? DrugId { get;private set; }
        public string? DrugName { get; private set; }
        public double Dose { get; set; }
        public double Frequency { get; set; }
        public FrequencyTypes FrequencyType { get; set; }
        public string TreatmentPeriod { get; set; }
        public string Notes { get; set; }
    }
}
