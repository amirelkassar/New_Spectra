using Spectra.Domain.Shared.Common;
using System;

namespace Spectra.Domain.MedicalPatientProfiles
{
    public class MedicalPatientProfile : BaseAuditableEntity<string>
    {

        public string DoctorId { get; set; }
        public string PatientId { get; set; }
        public string PatientName { get; set; }
        public string ClientId { get; set; }
        public string ClientName { get; set; }





        protected MedicalPatientProfile() { }
        private MedicalPatientProfile(
          string id,
          string doctorId,
          string patientId,
          string clientId,

            string patientName,
            string clientName
            ) : base(id)

        {

            Id = id;
            DoctorId = doctorId;
            PatientId = patientId;
            ClientId = clientId;

            PatientName = patientName;
            ClientName = clientName;
        }
        public static MedicalPatientProfile Create(string id, string doctorId, string patientId,
           string clientId, string patientName,
            string clientName
       )
        {

            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(doctorId, nameof(doctorId));
            ArgumentNullException.ThrowIfNull(patientId, nameof(patientId));
            ArgumentNullException.ThrowIfNull(clientId, nameof(clientId));

            ArgumentNullException.ThrowIfNull(patientName, nameof(patientName));
            ArgumentNullException.ThrowIfNull(clientName, nameof(clientName));





            return new MedicalPatientProfile(id, doctorId, patientId, clientId, patientName, clientName);

        }
    }





}
