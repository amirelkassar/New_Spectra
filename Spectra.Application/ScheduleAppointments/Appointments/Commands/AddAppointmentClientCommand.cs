//using MediatR;
//using Spectra.Application.Messaging;
//using Spectra.Application.ScheduleAppointments.Appointments;
//using Spectra.Domain.Shared.Enums;
//using Spectra.Domain.Shared.Wrappers;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace Spectra.Application.ScheduleAppointments.Appointments.Commands
//{
//    public class AddAppointmentClientCommand : ICommand<OperationResult<Unit>>
//    {
//        public string ClientId { get; set; }
//        public string Id { get; set; }
//    }

//    public class AddAppointmentClientCommandHandler : IRequestHandler<AddAppointmentClientCommand, OperationResult<Unit>>
//    {
//        private readonly IAppointmentRepository _appointmentRepository;
//        public AddAppointmentClientCommandHandler(IAppointmentRepository appointmentRepository)
//        {
//            _appointmentRepository = appointmentRepository;
//        }

//        public async Task<OperationResult<Unit>> Handle(AddAppointmentClientCommand request, CancellationToken cancellationToken)
//        {

//            var appointment = await _appointmentRepository.GetByIdAsync(request.Id);

//            appointment.Status = AppointmentStatus.Booked;
//            appointment.ClientId = request.ClientId;

//            await _appointmentRepository.UpdateAsync(appointment);
//            return OperationResult<Unit>.Success(Unit.Value);


//        }
//    }
//}

