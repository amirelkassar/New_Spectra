using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using MongoDB.Driver;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.AppUser;
using Spectra.Domain.Employees;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.Queries
{
    public class GetEmployeeForSectionHeadByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }

        public class GetEmployeeForSectionHeadByIdQueryHandler(ICurrentUser currentUser,
            IBaseMongoDbRepository<Employee> employeeRepository,
             IWebHostEnvironment webHostEnvironment,
            IHttpContextAccessor httpContextAccessor,
            IBaseMongoDbRepository<Section> sectionRepository,
            UserManager<AppUser> identityService) : IRequestHandler<GetEmployeeForSectionHeadByIdQuery, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<Employee> _employeeRepository = employeeRepository;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
            private readonly IBaseMongoDbRepository<Section> _sectionRepository = sectionRepository;
            private readonly UserManager<AppUser> _identityService = identityService;

            public async Task<OperationResult> Handle(GetEmployeeForSectionHeadByIdQuery request, CancellationToken cancellationToken)
            {
                var userEmployee = await _employeeRepository.GetAsync(e => e.UserId == _currentUser.Id);
                var (sectionData, sectionTotal) = await _sectionRepository.GetAllAsync(s => s.HeadDoctorId == userEmployee.Id);
                var collection = await _employeeRepository.GetCollectionAsync();
                var filterBuilder = Builders<Employee>.Filter;
                var filter = filterBuilder.In(e => e.SectionId, sectionData.Select(s => s.Id).ToArray());
                filter &= filterBuilder.Eq(e => e.Id, request.Id);

                var employee = await collection.Find(filter).FirstOrDefaultAsync() ?? throw new NotFoundException("Employees", request.Id);

                var dto = employee.Adapt<EmployeeByIdDto>(EmployeeByIdDto.GetConfiguration());
                var user = await _identityService.FindByIdAsync(dto.UserId);
                foreach (var attachment in dto.Attachments)
                {
                    if (attachment.Path is not null)
                    {
                        attachment.Path = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, attachment.Path), employee.UserId, EndPointsRoutes.Users, _httpContextAccessor);
                    }
                }

                if (user is not null && user.UserImage is not null)
                {
                    dto.UserImage = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, user.UserImage), employee.UserId, EndPointsRoutes.Users, _httpContextAccessor);
                }

                return OperationResult<EmployeeByIdDto>.Success(dto);
            }
        }
    }
}
