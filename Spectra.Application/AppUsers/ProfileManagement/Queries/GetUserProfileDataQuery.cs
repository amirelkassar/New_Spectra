using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Spectra.Application.AppUsers.ProfileManagement.Dtos;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppUsers.ProfileManagement.Queries
{
    public class GetUserProfileDataQuery : IRequest<OperationResult>
    {

        public class GetUserProfileDataQueryHandler(ICurrentUser currentUser,
            UserManager<AppUser> identityService,
            IBaseMongoDbRepository<Employee> employeeRepository,
            IWebHostEnvironment webHostEnvironment,
            IHttpContextAccessor httpContextAccessor) : IRequestHandler<GetUserProfileDataQuery, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly UserManager<AppUser> _identityService = identityService;
            private readonly IBaseMongoDbRepository<Employee> _employeeRepository = employeeRepository;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;

            public async Task<OperationResult> Handle(GetUserProfileDataQuery request, CancellationToken cancellationToken)
            {
                var user = await _identityService.FindByIdAsync(_currentUser.Id);
                Employee emp = null;
                ProfileReadDto userDto = null;

                switch (_currentUser.Role)
                {
                    case Roles.CustomerSupport:
                    case Roles.Doctor:
                    case Roles.ServiceHead:
                    case Roles.DepartmentHead:
                    case Roles.Accountant:
                    case Roles.Specialist:
                        emp = await _employeeRepository.GetAsync(e => e.UserId == user.Id);
                        break;
                }

                if (emp is not null)
                {
                    userDto = emp.Adapt<ProfileReadDto>(ProfileReadDto.GetEmployeeConfiguration());
                    foreach (var attachment in userDto.Attachments.Where(a => !string.IsNullOrWhiteSpace(a.Path)).ToArray())
                    {
                        attachment.Path = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, attachment.Path), _currentUser.Id, EndPointsRoutes.Users, _httpContextAccessor);
                    }
                }
                else
                {
                    userDto = user.Adapt<ProfileReadDto>(ProfileReadDto.GetUserConfiguration());
                }

                if (user is not null && user.UserImage is not null)
                    userDto.UserImage = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, user.UserImage), _currentUser.Id, EndPointsRoutes.Users, _httpContextAccessor);

                userDto.Created = user.Created;
                return OperationResult<ProfileReadDto>.Success(userDto);
            }
        }
    }
}
