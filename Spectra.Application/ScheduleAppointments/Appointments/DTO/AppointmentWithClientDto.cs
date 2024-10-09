using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.ScheduleAppointments.Appointments.DTO
{
    public class AppointmentWithClientDto
    {
        public string ClientName { get; set; }
        public List<string> PatientNames { get; set; }
        public int PatientCount { get; set; }
        public IEnumerable<AppointmentDetailDto> Appointments { get; set; }
    }
}
