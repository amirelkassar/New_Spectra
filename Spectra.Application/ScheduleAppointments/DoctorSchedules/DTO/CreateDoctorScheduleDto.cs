using Spectra.Application.ScheduleAppointments.DoctorSchedules.Commands;

namespace Spectra.Application.ScheduleAppointments.DoctorSchedules.DTO
{
    public class CreateDoctorScheduleDto
    {
        public List<CreateDoctorScheduleCommand> CreateDoctorScheduleCommands { get; set; }
    }
}
