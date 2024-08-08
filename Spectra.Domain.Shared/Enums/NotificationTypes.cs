using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Enums
{
    public enum NotificationTypes
    {
        System = 1,
        Reminder = 2,
        NewMessage = 3,
        ReportReady = 4,
        OperationCompleted = 5,
        AppointmentSessionUpdate = 6,
        GeneralAlert = 7,
        RequestApproved = 8,
        Error = 9,
        Custom = 10
    }
}
