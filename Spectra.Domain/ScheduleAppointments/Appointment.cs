﻿using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using System;

namespace Spectra.Domain.ScheduleAppointments
{
    public class Appointment : BaseAuditableEntity<string>
    {

        public DateTime Daysdate { get; set; }
        public string? AppointmentNotes { get; set; }
        public AppointmentStatus Status { get; set; }
        public AppointmentType AppointmentType { get; set; }
        public string DoctorScheduleId { get; set; }
        public string ClientId { get; set; }
        public string DoctorId { get; set; }
        //the time Client Will Appointment  With  Doctor 
        public TimeOnly From { get; set; }
        public MoringOrNight FromMoringOrNight { get; set; }

        public TimeOnly To { get; set; }
        public MoringOrNight ToMoringOrNight { get; set; }
<<<<<<< HEAD
=======
        //public AppointmentServices AppointmentService { get; set; }

>>>>>>> Admin-BackEnd

        protected Appointment() { }

        private Appointment(string id, string doctorId, DateTime daysdate,
            string? appointmentNotes, AppointmentType appointmentType, string doctorScheduleId, string clientId, AppointmentStatus status,
<<<<<<< HEAD
            TimeOnly timeOfAppoinment, TimeOnly to, MoringOrNight toMoringOrNight)
=======
            TimeOnly from, TimeOnly to, MoringOrNight toMoringOrNight ) 
>>>>>>> Admin-BackEnd
        {
            Id = id;
            DoctorId = doctorId;
            Daysdate = daysdate;
            AppointmentNotes = appointmentNotes;
            AppointmentType = appointmentType;
            DoctorScheduleId = doctorScheduleId;
            ClientId = clientId;
            Status = status;
<<<<<<< HEAD
            From = timeOfAppoinment;
            To = to;
            ToMoringOrNight = toMoringOrNight;

        }
        public static Appointment Create(string id, string doctorId, DateTime daysdate,
            string? appointmentNotes, AppointmentType appointmentType, string doctorScheduleId, string clientId, AppointmentStatus status, TimeOnly timeOfAppoinment, TimeOnly to, MoringOrNight toMoringOrNight
   )
        {

=======
             From = from;
            To = to;
            ToMoringOrNight = toMoringOrNight;
      

        }
        public static Appointment Create(string id, string doctorId, DateTime daysdate, 
            string? appointmentNotes, AppointmentType appointmentType, string doctorScheduleId, string clientId, AppointmentStatus status, 
            TimeOnly from, TimeOnly to, MoringOrNight toMoringOrNight)
        {


>>>>>>> Admin-BackEnd
            ArgumentNullException.ThrowIfNull(id, nameof(id));
            ArgumentNullException.ThrowIfNull(doctorId, nameof(doctorId));
            ArgumentNullException.ThrowIfNull(appointmentType, nameof(appointmentType));
            ArgumentNullException.ThrowIfNull(doctorScheduleId, nameof(doctorScheduleId));
            ArgumentNullException.ThrowIfNull(clientId, nameof(clientId));
            ArgumentNullException.ThrowIfNull(daysdate, nameof(daysdate));
            ArgumentNullException.ThrowIfNull(status, nameof(status));
<<<<<<< HEAD
            ArgumentNullException.ThrowIfNull(timeOfAppoinment, nameof(timeOfAppoinment));
            ArgumentNullException.ThrowIfNull(to, nameof(to));
            ArgumentNullException.ThrowIfNull(toMoringOrNight, nameof(toMoringOrNight));






            return new Appointment(id, doctorId, daysdate, appointmentNotes, appointmentType, doctorScheduleId, clientId, status, timeOfAppoinment, to, toMoringOrNight);
=======
            ArgumentNullException.ThrowIfNull(from, nameof(from));
            ArgumentNullException.ThrowIfNull(to, nameof(to));
            ArgumentNullException.ThrowIfNull(toMoringOrNight, nameof(toMoringOrNight));
         



            return new Appointment(id, doctorId, daysdate, appointmentNotes , appointmentType , doctorScheduleId , clientId 
                , status , from, to, toMoringOrNight );
>>>>>>> Admin-BackEnd

        }




    }



}
