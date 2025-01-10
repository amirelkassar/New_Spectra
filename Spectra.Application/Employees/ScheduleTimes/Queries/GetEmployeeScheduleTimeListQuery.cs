using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mapster;
using MediatR;
using Spectra.Application.Employees.ScheduleTimes.Dtos;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees.ScheduleTimes;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.ScheduleTimes.Queries
{
    public class GetEmployeeScheduleTimeListQuery : IRequest<OperationResult>
    {
        public class GetEmployeeScheduleTimeListQueryHandler(ICurrentUser currentUser, IBaseMongoDbRepository<ScheduleTime> scheduleTimeRepository) : IRequestHandler<GetEmployeeScheduleTimeListQuery, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<ScheduleTime> _scheduleTimeRepository = scheduleTimeRepository;
            public async Task<OperationResult> Handle(GetEmployeeScheduleTimeListQuery request, CancellationToken cancellationToken)
            {
                var (scheduleTimes,total) = await _scheduleTimeRepository.GetAllAsync();
                var timesDtos = scheduleTimes.Adapt<ICollection<ScheduleTimeReadDto>>();

                return OperationResult<PaginatedResult<ScheduleTimeReadDto>>.Success(new PaginatedResult<ScheduleTimeReadDto>(timesDtos, total, 100));
            }
        }
    }
}
