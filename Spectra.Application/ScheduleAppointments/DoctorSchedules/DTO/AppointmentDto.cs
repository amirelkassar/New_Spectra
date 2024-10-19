using Spectra.Domain.Shared.Enums;

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
