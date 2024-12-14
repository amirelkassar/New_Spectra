using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.Queries
{
    public class GetDoctorAttchmentListByUserId : IRequest<OperationResult>
    {
        public class GetDoctorAttchmentListByUserIdHandler(IBaseMongoDbRepository<Employee> doctorRepository,
            IWebHostEnvironment webHostEnvironment,
            IHttpContextAccessor httpContextAccessor,
            UserManager<AppUser> identityService,
            ICurrentUser currentUser) : IRequestHandler<GetDoctorAttchmentListByUserId, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee> _doctorRepository = doctorRepository;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
            private readonly UserManager<AppUser> _identityService = identityService;
            private readonly ICurrentUser _currentUser = currentUser;

            public async Task<OperationResult> Handle(GetDoctorAttchmentListByUserId request, CancellationToken cancellationToken)
            {
                Employee emp = await _doctorRepository.GetAsync(e => e.UserId == _currentUser.Id);
                var dto = emp.Adapt<EmployeeByIdDto>(EmployeeByIdDto.GetConfiguration());
                foreach (var attachment in dto.Attachments)
                {
                    if (attachment.Path is not null)
                    {
                        attachment.Path = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, attachment.Path), emp.UserId, EndPointsRoutes.Users, _httpContextAccessor);
                    }
                }
                return OperationResult<ICollection<EmployeeAttachment>>.Success(dto.Attachments);
            }
        }
    }
}
