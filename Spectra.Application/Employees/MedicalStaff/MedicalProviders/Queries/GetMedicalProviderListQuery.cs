using MediatR;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries
{
    public class GetMedicalProviderListQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }

        public class GetMedicalProviderListQueryHandler(IBaseMongoDbRepository<MedicalProvider, string> doctorRepository) : IRequestHandler<GetMedicalProviderListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<MedicalProvider, string> _doctorRepository = doctorRepository;

            public async Task<OperationResult> Handle(GetMedicalProviderListQuery request, CancellationToken cancellationToken)
            {
                request.Search ??= request.Search.ToLower();
                var (entities, total) = await _doctorRepository.GetAllAsync(s => s.Name.FirstName.ToLower().StartsWith(request.Search)
                || s.EmailAddress.Emailaddress.ToLower().StartsWith(request.Search)
                || s.MainSpecializationName.ToLower().StartsWith(request.Search)
                || s.SectionName.ToLower().StartsWith(request.Search)
                || s.LicenseNumber.ToLower().StartsWith(request.Search)
                || s.SectionId.ToLower()==request.Search
                || s.MainSpecializationId.ToLower() == request.Search
                || s.Specializations.Any(sp=>sp.Name.ToLower().StartsWith(request.Search) || sp.Id.ToLower()==request.Search)
                || s.Services.Any(ser => ser.Name.ToLower().StartsWith(request.Search) || ser.Id.ToLower()==request.Search),
                    null,
                    request.SkipCount,
                    request.MaxCount);

                return OperationResult<PaginatedResult<MedicalProvider>>.Success(new PaginatedResult<MedicalProvider>(entities, total, request.MaxCount));
            }
        }
    }
}
