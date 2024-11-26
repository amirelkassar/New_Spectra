using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.Queries
{
    public class GetEmployeeListQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }

        public class GetEmployeeListQueryHandler(IBaseMongoDbRepository<Employee> doctorRepository) : IRequestHandler<GetEmployeeListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee> _doctorRepository = doctorRepository;

            public async Task<OperationResult> Handle(GetEmployeeListQuery request, CancellationToken cancellationToken)
            {
                request.Search ??= request.Search.ToLower();
                var (entities, total) = await _doctorRepository.GetAllAsync(s => (s.JobType == JobTypes.Secretary || s.JobType == JobTypes.Accountant)
                && (s.Name.FirstName.ToLower().StartsWith(request.Search)
                || s.EmailAddress.Emailaddress.ToLower().StartsWith(request.Search)
                || s.MainSpecializationName.ToLower().StartsWith(request.Search)
                || s.SectionName.ToLower().StartsWith(request.Search)
                || s.LicenseNumber.ToLower().StartsWith(request.Search)
                || s.SectionId.ToLower() == request.Search
                || s.MainSpecializationId.ToLower() == request.Search
                || s.Specializations.Any(sp => sp.Name.ToLower().StartsWith(request.Search) || sp.Id.ToLower() == request.Search)
                || s.Services.Any(ser => ser.Name.ToLower().StartsWith(request.Search) || ser.Id.ToLower() == request.Search)),
                    null,
                    request.SkipCount,
                    request.MaxCount);

                return OperationResult<PaginatedResult<Employee>>.Success(new PaginatedResult<Employee>(entities, total, request.MaxCount));
            }
        }
    }
}
