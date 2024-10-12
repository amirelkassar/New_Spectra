using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.ScheduleAppointments.DoctorSchedules.DTO
{
    public class AppointmentDto
    {
        public TimeOnly From { get; set; }
        public TimeOnly To { get; set; }
        public MoringOrNight FormMoringOrNight { get; set; }
        public MoringOrNight ToMoringOrNight { get; set; }
        public DateTime Daysdate { get; set; }
     public List<DoctorScheduleDto> DoctorSchedules { get; set; }
    }

    public class DoctorScheduleDto
    {
        public TimeOnly From { get; set; }
        public TimeOnly To { get; set; }
        public MoringOrNight FormMoringOrNight { get; set; }
        public MoringOrNight ToMoringOrNight { get; set; }
    }
 
}
