using Mapster;
using MediatR;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.Queries
{
    public class GetMedicalProvderListQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }

        public class GetMedicalProvderListQueryHandler(IBaseMongoDbRepository<Employee> doctorRepository) : IRequestHandler<GetMedicalProvderListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee> _doctorRepository = doctorRepository;

            public async Task<OperationResult> Handle(GetMedicalProvderListQuery request, CancellationToken cancellationToken)
            {
                IEnumerable<Employee> employees = null;
                long totalCount = 0;
                if (!string.IsNullOrWhiteSpace(request.Search))
                {
                    var (entities, total) = await _doctorRepository.GetAllAsync(s => (s.JobType == JobTypes.Doctor || s.JobType == JobTypes.Specialist)
               && (s.Name.FirstName.ToLower().StartsWith(request.Search)
               || s.EmailAddress.Emailaddress.ToLower().StartsWith(request.Search)
               || s.MainSpecializationEnName.ToLower().StartsWith(request.Search)
               || s.MainSpecializationArName.StartsWith(request.Search)
               || s.SectionEnName.ToLower().StartsWith(request.Search)
               || s.SectionArEnName.StartsWith(request.Search)
               || s.LicenseNumber.ToLower().StartsWith(request.Search)
               || s.SectionId.ToLower() == request.Search
               || s.MainSpecializationId.ToLower() == request.Search
               || s.Specializations.Any(sp => sp.EnName.ToLower().StartsWith(request.Search) || sp.Id.ToLower() == request.Search)
               || s.Services.Any(ser => ser.EnName.ToLower().StartsWith(request.Search) || ser.Id.ToLower() == request.Search)),
                   null,
                   request.SkipCount,
                   request.MaxCount);

                    employees = entities;
                    totalCount = total;
                }
                else
                {
                    var (entities, total) = await _doctorRepository.GetAllAsync(s => s.JobType == JobTypes.Secretary || s.JobType == JobTypes.Accountant,
                   null,
                   request.SkipCount,
                   request.MaxCount);
                    employees = entities;
                    totalCount = total;
                }

                var dtos = employees.Adapt<IReadOnlyCollection<EmployeeListDto>>();

                return OperationResult<PaginatedResult<EmployeeListDto>>.Success(new PaginatedResult<EmployeeListDto>(dtos, totalCount, request.MaxCount));
            }
        }
    }
}
