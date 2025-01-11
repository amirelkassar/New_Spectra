using System;
using Spectra.Domain.Shared.Common;

namespace Spectra.Domain.Employees.ScheduleTimes
{
    public class ScheduleTime : BaseAuditableEntity<string>
    {
        public ScheduleTime(string id,
            string employeeId,
            string userId,
            DayOfWeek day,
            TimeSpan from,
            TimeSpan to)
        {
            Id = id;
            EmployeeId = employeeId;
            UserId = userId;
            Day = day;
            From = from;
            To = to;
        }
        public string EmployeeId { get;private set; }
        public string UserId { get; private set; }
        public DayOfWeek Day { get; private set; }
        public TimeSpan From { get; set; }
        public TimeSpan To { get; set; }

    }
}
