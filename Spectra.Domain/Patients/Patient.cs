using System;
using Spectra.Domain.Patients.PatientsData;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using static Spectra.Domain.Common.Conses.Units;



namespace Spectra.Domain.Patients
{
    public class Patient : BaseAuditableEntity<string>
    {
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public HumenGender Gender { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public ClientPatientRelations RelationToClient { get; set; }
        public string ClientId { get; private set; }
        public double? ChildHeight { get; set; }
        public double? ChildWeight { get; set; }
        public string? MedicalSymptoms { get; set; }
        public DateOnly? MedicalSymptomsDate { get; set; }
        public BirthHistory? BirthHistory { get; set; }
        public PatientMedicalHistory? PatientMedicalHistory { get; set; }
        public BehavioralDifficulty? BehavioralDifficulty { get; set; }
        public SocialAdaptive? SocialAdaptive { get; set; }
        public SchoolTypes? SchoolType { get; set; }
        public FamilySocialHistory? FamilySocialhistory { get; set; }

        private Patient(string id,
            Name name,
            string nationalId,
            HumenGender gender,
            DateOnly dateOfBirth,
            ClientPatientRelations relationToClient,
            string clientId) : base(id)
        {
            Id = id;
            Name = name;
            NationalId = nationalId;
            Gender = gender;
            DateOfBirth = dateOfBirth;
            RelationToClient = relationToClient;

            ClientId = clientId;
        }

        protected Patient() { }

        public static Patient Create(string id, Name name,
            string nationalId,
            HumenGender gender,
            DateOnly dateOfBirth,
            ClientPatientRelations relationToClient,
            string dateOfOnSetOfSymptoms,



            string clientId)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(nationalId, nameof(nationalId));
            ArgumentNullException.ThrowIfNull(gender, nameof(gender));
            ArgumentNullException.ThrowIfNull(dateOfBirth, nameof(dateOfBirth));
            ArgumentNullException.ThrowIfNull(relationToClient, nameof(relationToClient));
            ArgumentNullException.ThrowIfNull(dateOfOnSetOfSymptoms, nameof(dateOfOnSetOfSymptoms));
            ArgumentNullException.ThrowIfNull(clientId, nameof(clientId));



            return new Patient(id, name, nationalId, gender, dateOfBirth, relationToClient, clientId);
        }
    }
}
