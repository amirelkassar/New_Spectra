using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using MongoDB.Driver;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.Queries
{
    public class GetEmployeeListByHeadDepartmentQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
        public JobTypes? JobType { get; set; }
        public string? MainSpecializationId { get; set; }
        public class GetEmployeeListByHeadDepartmentQueryHandler(ICurrentUser currentUser,
            IBaseMongoDbRepository<Employee> employeeRepository,
             IWebHostEnvironment webHostEnvironment,
            IHttpContextAccessor httpContextAccessor,
            IBaseMongoDbRepository<Section> sectionRepository) : IRequestHandler<GetEmployeeListByHeadDepartmentQuery, OperationResult>
        {
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IBaseMongoDbRepository<Employee> _employeeRepository = employeeRepository;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
            private readonly IBaseMongoDbRepository<Section> _sectionRepository = sectionRepository;

            public async Task<OperationResult> Handle(GetEmployeeListByHeadDepartmentQuery request, CancellationToken cancellationToken)
            {
                var userEmployee = await _employeeRepository.GetAsync(e => e.UserId == _currentUser.Id);
                var (sectionData, sectionTotal) = await _sectionRepository.GetAllAsync(s => s.HeadDoctorId == userEmployee.Id);
                if (sectionTotal <= 0)
                    return OperationResult<PaginatedResult<EmployeeListDto>>.Success(new PaginatedResult<EmployeeListDto>());

                var collection = await _employeeRepository.GetCollectionAsync();
                var filterBuilder = Builders<Employee>.Filter;
                var filter = filterBuilder.In(e => e.SectionId, sectionData.Select(s => s.Id).ToArray());

                if (!string.IsNullOrWhiteSpace(request.Search))
                {
                    var searchLower = request.Search.ToLower().Trim();
                    var searchFilter = filterBuilder.Or(
                       filterBuilder.Regex(s => s.Name.FirstName, new MongoDB.Bson.BsonRegularExpression($"^{searchLower}", "i")),
                       filterBuilder.Regex(s => s.Name.LastName, new MongoDB.Bson.BsonRegularExpression($"^{searchLower}", "i")),
                       filterBuilder.Regex(s => s.EmailAddress.Emailaddress, new MongoDB.Bson.BsonRegularExpression($"^{searchLower}", "i")),
                       filterBuilder.Regex(s => s.MobileNumber.PhoneNumbers, new MongoDB.Bson.BsonRegularExpression($"^{searchLower}", "i")),
                       filterBuilder.Regex(s => s.MainSpecializationEnName, new MongoDB.Bson.BsonRegularExpression($"^{searchLower}", "i")),
                       filterBuilder.Regex(s => s.MainSpecializationArName, new MongoDB.Bson.BsonRegularExpression($"^{searchLower}", "i")),
                       filterBuilder.Regex(s => s.SectionEnName, new MongoDB.Bson.BsonRegularExpression($"^{searchLower}", "i")),
                       filterBuilder.Regex(s => s.SectionArEnName, new MongoDB.Bson.BsonRegularExpression($"^{searchLower}", "i")),
                       filterBuilder.Regex(s => s.LicenseNumber, new MongoDB.Bson.BsonRegularExpression($"^{searchLower}", "i")),
                       filterBuilder.Regex(s => s.SectionId, new MongoDB.Bson.BsonRegularExpression($"^{searchLower}", "i")));
                    filter &= searchFilter;
                }
                if (!string.IsNullOrWhiteSpace(request.MainSpecializationId))
                {
                    filter &= filterBuilder.Regex(s => s.MainSpecializationId, new MongoDB.Bson.BsonRegularExpression($"^{request.MainSpecializationId}", "i"));
                }
                if (request.JobType.HasValue)
                {
                    filter &= filterBuilder.Eq(s => s.JobType, request.JobType.Value);
                }

                var total = await collection.CountDocumentsAsync(filter);
                var data = await collection.Find(filter)
                    .SortByDescending(s => s.Id)
                    .Skip(request.SkipCount)
                    .Limit(request.MaxCount)
                    .ToListAsync(cancellationToken);
                var dtos = data.Adapt<IReadOnlyCollection<EmployeeListDto>>(EmployeeListDto.GetConfigurations());
                foreach (var dto in dtos.Where(e => e.UserImage is not null).ToArray())
                {
                    dto.UserImage = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, dto.UserImage), dto.UserId, EndPointsRoutes.Users, _httpContextAccessor);
                }

                return OperationResult<PaginatedResult<EmployeeListDto>>.Success(new PaginatedResult<EmployeeListDto>(dtos, total, request.MaxCount));

            }
        }
    }
}
