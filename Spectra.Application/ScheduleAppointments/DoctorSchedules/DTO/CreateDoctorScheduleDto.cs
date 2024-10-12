using Spectra.Application.ScheduleAppointments.Appointments.Commands;
using Spectra.Application.ScheduleAppointments.DoctorSchedules.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.ScheduleAppointments.DoctorSchedules.DTO
{
    public class CreateDoctorScheduleDto
    {
        public List<CreateDoctorScheduleCommand> CreateDoctorScheduleCommands { get; set; }
    }
}
