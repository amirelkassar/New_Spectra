using MediatR;
using Spectra.Application.Messaging;

using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.DiagnoseCommend.Queries
{


    public class GetAllDiagnoseNamesQuery : IQuery<OperationResult<IEnumerable<BaseMasterDataDto>>>
    {

        public class GetAllSpecializationNamesQueryHandler : IRequestHandler<GetAllDiagnoseNamesQuery, OperationResult<IEnumerable<BaseMasterDataDto>>>
        {
            private readonly IDiagnoseRepository _diagnoseRepository;

            public GetAllSpecializationNamesQueryHandler(IDiagnoseRepository diagnoseRepository)
            {
                _diagnoseRepository = diagnoseRepository;
            }

            public async Task<OperationResult<IEnumerable<BaseMasterDataDto>>> Handle(GetAllDiagnoseNamesQuery request, CancellationToken cancellationToken)
            {


                var diagnoses = await _diagnoseRepository.GetAllAsync();

                var diagnose = diagnoses.Select(x => new BaseMasterDataDto { Name = x.Name, Id = x.Id });


                return OperationResult<IEnumerable<BaseMasterDataDto>>.Success(diagnose);


            }
        }
    }
}
