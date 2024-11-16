using MediatR;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries
{
    public class GetAllMedicalProviderQuery : QueryPaginationParam, IRequest<OperationResult<IEnumerable<MedicalProvider>>>
    {
        public string? Search { get; set; }
        public JobTypes JobTypes { get; set; }

    }

    public class GetAllMedicalProviderQueryHandler : IRequestHandler<GetAllMedicalProviderQuery, OperationResult<IEnumerable<MedicalProvider>>>
    {
        private readonly IMedicalProviderRepository _MedicalProviderRepository;

        public GetAllMedicalProviderQueryHandler(IMedicalProviderRepository MedicalProviderRepository)
        {
            _MedicalProviderRepository = MedicalProviderRepository;
        }

        public async Task<OperationResult<IEnumerable<MedicalProvider>>> Handle(GetAllMedicalProviderQuery request, CancellationToken cancellationToken)
        {

            var MedicalProvider = await _MedicalProviderRepository.GetAllAsync(x => x.JobType == request.JobTypes);

            return OperationResult<IEnumerable<MedicalProvider>>.Success(MedicalProvider);


        }
    }
}
