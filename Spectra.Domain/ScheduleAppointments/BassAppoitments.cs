using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;

namespace Spectra.Domain.ScheduleAppointments
{
    public abstract class BassAppoitments : BaseAuditableEntity<string>
    {
        public string DoctorId { get; set; }
        public TimeOnly From { get; set; }
        public MoringOrNight FromMoringOrNight { get; set; }
        public TimeOnly To { get; set; }
        public MoringOrNight ToMoringOrNight { get; set; }


        protected BassAppoitments() { }
        public BassAppoitments(string id, string doctorId, TimeOnly from, MoringOrNight fromMoringOrNight, TimeOnly to, MoringOrNight toMoringOrNight) : base(id)
        {
            Id = id;
            DoctorId = doctorId;
            From = from;
            FromMoringOrNight = fromMoringOrNight;
            To = to;
            ToMoringOrNight = toMoringOrNight;
        }
    }


}
