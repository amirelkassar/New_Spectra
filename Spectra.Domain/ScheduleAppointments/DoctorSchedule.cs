using Spectra.Domain.Shared.Enums;
using System;

namespace Spectra.Domain.ScheduleAppointments
{
    public class DoctorSchedule : BassAppoitments
    {
        public DaysOfWeeks Days { get; set; }
        protected DoctorSchedule() { }

        private DoctorSchedule(string id, string doctorId, TimeOnly from, MoringOrNight fromMoringOrNight, TimeOnly to, MoringOrNight toMoringOrNight, DaysOfWeeks days)
            : base(id, doctorId, from, fromMoringOrNight, to, toMoringOrNight)
        {
            Id = id;
            DoctorId = doctorId;
            From = from;
            FromMoringOrNight = fromMoringOrNight;
            To = to;
            ToMoringOrNight = toMoringOrNight;
            Days = days;
        }
        public static DoctorSchedule Create(string id, string doctorId, TimeOnly from, MoringOrNight fromMoringOrNight, TimeOnly to, MoringOrNight toMoringOrNight, DaysOfWeeks days)
        {
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(doctorId, nameof(doctorId));
            ArgumentNullException.ThrowIfNull(from, nameof(from));
            ArgumentNullException.ThrowIfNull(fromMoringOrNight, nameof(fromMoringOrNight));
            ArgumentNullException.ThrowIfNull(to, nameof(to));
            ArgumentNullException.ThrowIfNull(toMoringOrNight, nameof(toMoringOrNight));
            ArgumentNullException.ThrowIfNull(days, nameof(days));

            return new DoctorSchedule(id, doctorId, from, fromMoringOrNight, to, toMoringOrNight, days);

        }

    }

}
