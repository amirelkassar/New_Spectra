using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Application.UserProfile.Dtos;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.UserProfile.Queries
{
    public class GetEmployeeProfileQuery : IRequest<OperationResult>
    {
        public class GetEmployeeProfileQueryHandler(ICurrentUser currentUser,
            IBaseMongoDbRepository<Employee> employeeRepository,
             IWebHostEnvironment webHostEnvironment,
            IHttpContextAccessor httpContextAccessor) : IRequestHandler<GetEmployeeProfileQuery, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<Employee> _employeeRepository = employeeRepository;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;

            public async Task<OperationResult> Handle(GetEmployeeProfileQuery request, CancellationToken cancellationToken)
            {
                var emp = await _employeeRepository.GetAsync(e => e.UserId == _currentUser.Id) ?? throw new NotFoundException("Employees",_currentUser.Id);

                var dto = emp.Adapt<EmployeeProfileDto>(EmployeeProfileDto.GetConfiguration());

                foreach (var attachment in dto.Attachments)
                {
                    if (attachment.Path is not null)
                    {
                        attachment.Path = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, attachment.Path), emp.UserId, EndPointsRoutes.Users, _httpContextAccessor);
                    }
                }

                return OperationResult< EmployeeProfileDto>.Success(dto);
            }
        }
    }
}
