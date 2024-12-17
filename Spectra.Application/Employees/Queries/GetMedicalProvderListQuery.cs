using System.Linq.Expressions;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using MongoDB.Driver;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Helpers;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.Queries
{
    public class GetMedicalProvderListQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
        public JobTypes JobType { get; set; }
        public string? MainSpecializationId { get; set; }

        public class GetMedicalProvderListQueryHandler(IBaseMongoDbRepository<Employee> doctorRepository,
            IWebHostEnvironment webHostEnvironment,
            IHttpContextAccessor httpContextAccessor) : IRequestHandler<GetMedicalProvderListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee> _doctorRepository = doctorRepository;
            private readonly IWebHostEnvironment _webHostEnvironment = webHostEnvironment;
            private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;

            public async Task<OperationResult> Handle(GetMedicalProvderListQuery request, CancellationToken cancellationToken)
            {
                var collection = await _doctorRepository.GetCollectionAsync();
                var filterBuilder = Builders<Employee>.Filter;
                var filter = filterBuilder.Empty;

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
