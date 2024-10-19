using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Enums
{
    public enum MoringOrNight
    {
        Morning,
        Night
    }
    public enum AppointmentStatus
    {
        Available,
        Booked,
        Finished,
        Canceled,
        Postponed
    }
    public enum AppointmentType
    {
        Consultation,
        Checkup,
        Session
    }
    public enum AppointmentServices
    {
        EarlyServiceRequest = 1,
        MedicationFollowUpService=2,
        SessionMultiServiceDiagnostics=3,
        RequestForSpecializedConsultations=4

    }
    public enum DaysOfWeeks
    {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6
    }
}
