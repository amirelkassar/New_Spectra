using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees.ScheduleTimes;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.ScheduleTimes.Commands
{
    public class UpdateScheduleTimeCommand : IRequest<OperationResult>
    {
        public DayOfWeek Day { get; private set; }
        public TimeSpan From { get; set; }
        public TimeSpan To { get; set; }

        public class UpdateScheduleTimeCommandHandler(ICurrentUser currentUser, IBaseMongoDbRepository<ScheduleTime> scheduleTimeRepository) : IRequestHandler<UpdateScheduleTimeCommand, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<ScheduleTime> _scheduleTimeRepository = scheduleTimeRepository;
            public async Task<OperationResult> Handle(UpdateScheduleTimeCommand request, CancellationToken cancellationToken)
            {
                if (!await _scheduleTimeRepository.Exists(s => s.UserId == _currentUser.Id && s.Day == request.Day))
                    throw new NotFoundException(nameof(ScheduleTime), request.Day.ToString());

                var scheduleTime = await _scheduleTimeRepository.GetAsync(s => s.UserId == _currentUser.Id && s.Day == request.Day);

                scheduleTime.From = request.From;
                scheduleTime.To = request.To;

                await _scheduleTimeRepository.UpdateAsync(scheduleTime);

                return OperationResult.Success();
            }
        }
    }
}
