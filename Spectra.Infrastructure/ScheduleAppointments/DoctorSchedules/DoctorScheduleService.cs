using MediatR;
using Spectra.Application.ScheduleAppointments.DoctorSchedules;
using Spectra.Application.ScheduleAppointments.DoctorSchedules.Commands;
using Spectra.Application.ScheduleAppointments.DoctorSchedules.DTO;
using Spectra.Application.ScheduleAppointments.DoctorSchedules.Queries;
using Spectra.Domain.ScheduleAppointments;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.DoctorSchedules.DoctorSchedules
{

    public class DoctorScheduleService : IDoctorScheduleService
    {
        private readonly IMediator _mediator;

        public DoctorScheduleService(IMediator mediator)
        {
            _mediator = mediator;

        }

        public async Task<OperationResult<Unit>> CreateDoctorSchedule(CreateDoctorScheduleDto input)
        {

        
                var command = new CreateDoctorScheduleDto
                {
                    CreateDoctorScheduleCommands = input.CreateDoctorScheduleCommands
                };
            foreach (var cmd in input.CreateDoctorScheduleCommands)
    {
        // Convert the DTO to the command
        var commands = new CreateDoctorScheduleCommand
        {
            DoctorId = cmd.DoctorId,
            From = cmd.From,
            FromMoringOrNight = cmd.FromMoringOrNight,
            To = cmd.To,
            ToMoringOrNight = cmd.ToMoringOrNight,
            Days = cmd.Days
        };

        // Send each command through Mediator
        var result = await _mediator.Send(commands);

        // If the operation fails for any command, return the failure result
        if (!result.SuccessOpration)
        {
            return result;
        }
    }

    // If all commands succeed, return success
    return OperationResult<Unit>.Success(Unit.Value);
}
        


        public async Task<OperationResult<Unit>> DeleteDoctorSchedule(string id)
        {
            var command = new DeleteDoctorScheduleCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<IEnumerable<AppointmentDto>>> GetAllDoctorSchedules(GetAllDoctorSchedulesQuery input)
        {

            var query = new GetAllDoctorSchedulesQuery() { DoctorId = input.DoctorId };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<DoctorSchedule>> GetDoctorScheduleById(string id)
        {
            var query = new GetDoctorScheduleByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<Unit>> UpdateDoctorSchedule(string id, UpdateDoctorScheduleCommand input)
        {
            var command = new UpdateDoctorScheduleCommand
            {
                Id = id,
                ToMoringOrNight = input.ToMoringOrNight,
                FromMoringOrNight = input.FromMoringOrNight,
                DoctorId = input.DoctorId,
                Days = input.Days,
                From = input.From,
                To = input.To
            };

            return await _mediator.Send(command);
        }


    }
}

