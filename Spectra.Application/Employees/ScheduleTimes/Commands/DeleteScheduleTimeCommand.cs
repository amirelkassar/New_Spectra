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
    public class DeleteScheduleTimeCommand : IRequest<OperationResult>
    {
        public DayOfWeek Day { get; set; }

        public class DeleteScheduleTimeCommandHandler(ICurrentUser currentUser, IBaseMongoDbRepository<ScheduleTime> scheduleTimeRepository) : IRequestHandler<DeleteScheduleTimeCommand, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<ScheduleTime> _scheduleTimeRepository = scheduleTimeRepository;
            public async Task<OperationResult> Handle(DeleteScheduleTimeCommand request, CancellationToken cancellationToken)
            {
                if (!await _scheduleTimeRepository.Exists(s => s.UserId == _currentUser.Id && s.Day == request.Day))
                    throw new NotFoundException(nameof(ScheduleTime), request.Day.ToString());

                var scheduleTime = await _scheduleTimeRepository.GetAsync(s => s.UserId == _currentUser.Id && s.Day == request.Day);

                await _scheduleTimeRepository.DeleteAsync(scheduleTime.Id);

                return OperationResult.Success();
            }
        }
    }
}
