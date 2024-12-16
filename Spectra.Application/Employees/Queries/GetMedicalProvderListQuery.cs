using System.Linq.Expressions;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees;
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
                IEnumerable<Employee> employees = null;
                long totalCount = 0;
                Expression<Func<Employee, bool>> condition = e => e.Id == e.Id;
                if (!string.IsNullOrWhiteSpace(request.Search))
                {
                    condition.And(s => s.Name.FirstName.ToLower().StartsWith(request.Search)
                       || s.EmailAddress.Emailaddress.ToLower().StartsWith(request.Search)
                       || s.MainSpecializationEnName.ToLower().StartsWith(request.Search)
                       || s.MainSpecializationArName.StartsWith(request.Search)
                       || s.SectionEnName.ToLower().StartsWith(request.Search)
                       || s.SectionArEnName.StartsWith(request.Search)
                       || s.LicenseNumber.ToLower().StartsWith(request.Search)
                       || s.SectionId.ToLower() == request.Search
                       || s.MainSpecializationId.ToLower() == request.Search
                       || s.Specializations.Any(sp => sp.EnName.ToLower().StartsWith(request.Search) || sp.Id.ToLower() == request.Search)
                       || s.Services.Any(ser => ser.EnName.ToLower().StartsWith(request.Search) || ser.Id.ToLower() == request.Search));
                }

                if(!string.IsNullOrWhiteSpace(request.MainSpecializationId))
                {
                    condition.And(e => e.MainSpecializationId == request.MainSpecializationId);
                }

                if (request.JobType !=null)
                {
                    condition.And(e => e.JobType == request.JobType);
                }
                else
                {
                    condition.And(e => e.JobType == JobTypes.Specialist || e.JobType==JobTypes.Doctor);
                }

                var (entities, total) = await _doctorRepository.GetAllAsync(condition,
                  null,
                  request.SkipCount,
                  request.MaxCount);
                employees = entities;
                totalCount = total;
                var dtos = employees.Adapt<IReadOnlyCollection<EmployeeListDto>>(EmployeeListDto.GetConfigurations());
                foreach (var dto in dtos.Where(e => e.UserImage is not null).ToArray())
                {
                    dto.UserImage = EndPointsHelper.GetFileUrl(Path.Combine(_webHostEnvironment.WebRootPath, dto.UserImage), dto.UserId, EndPointsRoutes.Users, _httpContextAccessor);
                }

                return OperationResult<PaginatedResult<EmployeeListDto>>.Success(new PaginatedResult<EmployeeListDto>(dtos, totalCount, request.MaxCount));
            }
        }
    }
}
