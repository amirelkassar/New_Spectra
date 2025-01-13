using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.Shared.Common;

namespace Spectra.Application.Employees.ScheduleTimes.Dtos
{
    public class ScheduleTimeReadDto : BaseEntityDto<string>
    {
        public string EmployeeId { get;  set; }
        public string UserId { get;  set; }
        public DayOfWeek Day { get;  set; }
        public TimeSpan From { get; set; }
        public TimeSpan To { get; set; }
    }
}
