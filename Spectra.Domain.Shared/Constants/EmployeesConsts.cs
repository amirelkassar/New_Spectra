namespace Spectra.Domain.Shared.Constants
{
    public class EmployeesConsts
    {
        public enum AcademicDegrees : byte
        {
            // Undergraduate Medical Degrees
            DoctorOfMedicine = 1,            // MD
            BachelorOfMedicine = 2,          // MBBS/MBChB
            DoctorOfOsteopathicMedicine = 3, // DO
            BachelorOfDentalSurgery = 4,     // BDS
            BachelorOfPharmacy = 5,          // BPharm
            BachelorOfNursing = 6,           // BN

            // Postgraduate Medical Degrees
            MasterOfMedicine = 7,            // MD (Postgraduate)
            MasterOfSurgery = 8,             // MS
            MasterOfPublicHealth = 9,        // MPH
            MasterOfMedicalScience = 10,      // MSc/MedSci
            DoctorOfPhilosophy = 11,          // PhD
            DoctorOfMedicalScience = 12,      // DMSc/DMS

            // Specialized Medical Degrees
            DoctorOfDentalMedicine = 13,      // DMD
            DoctorOfDentalSurgery = 14,       // DDS
            DoctorOfPharmacy = 15,            // PharmD
            DoctorOfNursingPractice = 16,     // DNP
            MasterOfClinicalResearch = 17,    // MSCR
            MasterOfHealthAdministration = 18,// MHA

            // Advanced Medical Fellowships/Certifications
            FellowshipRoyalCollegeOfSurgeons = 19,  // FRCS
            FellowshipRoyalCollegeOfPhysicians = 20,// FRCP
            BoardCertification = 21
        }
    }
}
