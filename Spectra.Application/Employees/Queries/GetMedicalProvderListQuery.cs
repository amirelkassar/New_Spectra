using MediatR;
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
                request.Search ??= request.Search.ToLower();
                var (entities, total) = await _doctorRepository.GetAllAsync(s => (s.JobType == JobTypes.Specialist || s.JobType == JobTypes.Doctor)
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
