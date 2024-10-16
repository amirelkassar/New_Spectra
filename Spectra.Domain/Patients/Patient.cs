﻿using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;



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
        public double ChildHeight { get; set; }
        public double ChildWeightt { get; set; }
        public string DateOfOnSetOfSymptoms { get; set; }
        public TypeOfDisease InheritedOrAcquired { get; set; }




        private Patient(string id, Name name,
            string nationalId,
            HumenGender gender,
            DateOnly dateOfBirth,
            ClientPatientRelations relationToClient,
            double childHeight,
            double childWeightt,
            string dateOfOnSetOfSymptoms,
            TypeOfDisease inheritedOrAcquired,
      

            string clientId) : base(id)
        {
            Id = id;
            Name = name;
            NationalId = nationalId;
            Gender = gender;
            DateOfBirth = dateOfBirth;
            RelationToClient = relationToClient;
            ChildHeight = childHeight;
            ChildWeightt = childWeightt;
            DateOfOnSetOfSymptoms = dateOfOnSetOfSymptoms;
            InheritedOrAcquired = inheritedOrAcquired;
       
            ClientId = clientId;
        }

        protected Patient() { }

        public static Patient Create(string id, Name name,
            string nationalId,
            HumenGender gender,
            DateOnly dateOfBirth,
            ClientPatientRelations relationToClient,
            double childHeight,
            double childWeightt,
            string dateOfOnSetOfSymptoms,
            TypeOfDisease inheritedOrAcquired,
         


            string clientId)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(name, nameof(name));
            ArgumentNullException.ThrowIfNull(nationalId, nameof(nationalId));
            ArgumentNullException.ThrowIfNull(gender, nameof(gender));
            ArgumentNullException.ThrowIfNull(dateOfBirth, nameof(dateOfBirth));
            ArgumentNullException.ThrowIfNull(relationToClient, nameof(relationToClient));
            ArgumentNullException.ThrowIfNull(childHeight, nameof(childHeight));
            ArgumentNullException.ThrowIfNull(childWeightt, nameof(childWeightt));
            ArgumentNullException.ThrowIfNull(dateOfOnSetOfSymptoms, nameof(dateOfOnSetOfSymptoms));
            ArgumentNullException.ThrowIfNull(inheritedOrAcquired, nameof(inheritedOrAcquired));
            ArgumentNullException.ThrowIfNull(clientId, nameof(clientId));



            return new Patient(id, name, nationalId, gender, dateOfBirth, relationToClient, childHeight, childWeightt, dateOfOnSetOfSymptoms, inheritedOrAcquired, clientId);
        }
    }
}
