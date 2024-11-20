using MediatR;
using MongoDB.Driver;
using Spectra.Application.Contracts.Repository;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries
{
    public class GetAllMedicalProviderEarlyDetectionQuery : QueryPaginationParam, IRequest<OperationResult<IEnumerable<MedicalProvider>>>
    {

    }

    public class GetAllMedicalProviderEarlyDetectionQueryHandler : IRequestHandler<GetAllMedicalProviderEarlyDetectionQuery, OperationResult<IEnumerable<MedicalProvider>>>
    {
        private readonly IContractRepository _contractRepository;
        private readonly IMedicalProviderRepository _MedicalProviderRepository;

        public GetAllMedicalProviderEarlyDetectionQueryHandler(IContractRepository contractRepository, IMedicalProviderRepository MedicalProviderRepository)
        {
            _contractRepository = contractRepository;
            _MedicalProviderRepository = MedicalProviderRepository;
        }

        public async Task<OperationResult<IEnumerable<MedicalProvider>>> Handle(GetAllMedicalProviderEarlyDetectionQuery request, CancellationToken cancellationToken)
        {

           //         var MedicalProvidersWithContract =
           // await _contractRepository.GetAllAsync(c =>
           // c.Titel == "MedicalProvider" &&
           // c.ContractCase == ContractCases.ACTIVE,
           //    new FindOptions()
           //);

           // var MedicalProviderIds = MedicalProvidersWithContract.Select(c => c.EmployeeId).ToList();

           // // Fetch the MedicalProvider entities using the EmployeeId
           // var MedicalProviders = await _MedicalProviderRepository.GetAllAsync(d => MedicalProviderIds.Contains(d.Id));

           // return OperationResult<IEnumerable<MedicalProvider>>.Success(MedicalProviders);

            throw new NotImplementedException();

        }
    }
}
