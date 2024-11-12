using MediatR;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries
{
    public class GetMedicalProviderByIdQuery : IRequest<OperationResult<MedicalProvider>>
    {
        public string Id { get; set; }
    }

    public class GetMedicalProviderByIdQueryHandler : IRequestHandler<GetMedicalProviderByIdQuery, OperationResult<MedicalProvider>>
    {
        private readonly IMedicalProviderRepository _MedicalProviderRepository;

        public GetMedicalProviderByIdQueryHandler(IMedicalProviderRepository MedicalProviderRepository)
        {
            _MedicalProviderRepository = MedicalProviderRepository;

        }

        public async Task<OperationResult<MedicalProvider>> Handle(GetMedicalProviderByIdQuery request, CancellationToken cancellationToken)
        {

            var MedicalProvider = await _MedicalProviderRepository.GetByIdAsync(request.Id);
            return OperationResult<MedicalProvider>.Success(MedicalProvider);
        }
    }
}
