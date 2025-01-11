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
    public class CreateScheduleTimeCommand : IRequest<OperationResult>
    {
        public DayOfWeek Day { get; private set; }
        public TimeSpan From { get; set; }
        public TimeSpan To { get; set; }
        public class CreateScheduleTimeCommandHandler(ICurrentUser currentUser, IBaseMongoDbRepository<ScheduleTime> scheduleTimeRepository) : IRequestHandler<CreateScheduleTimeCommand, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<ScheduleTime> _scheduleTimeRepository = scheduleTimeRepository;

            public async Task<OperationResult> Handle(CreateScheduleTimeCommand request, CancellationToken cancellationToken)
            {
                if (await _scheduleTimeRepository.Exists(s => s.UserId == _currentUser.Id && s.Day == request.Day))
                    throw new AlreadyExistException(nameof(ScheduleTime), request.Day.ToString());

                var scheduleTime = new ScheduleTime(Ulid.NewUlid().ToString(),
                    _currentUser.EmployeeId,
                    _currentUser.Id,
                    request.Day,
                    request.From,
                    request.To);

                await _scheduleTimeRepository.AddAsync(scheduleTime);

                return OperationResult<string>.Success(scheduleTime.Id);
            }
        }
    }
}
