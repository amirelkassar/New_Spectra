using MediatR;
using Spectra.Application.MasterData.SpecializationCommend.DTO;
using Spectra.Application.Messaging;

using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.DiagnoseCommend.Queries
{


    public class GetAllDiagnoseNamesQuery : IQuery<OperationResult<IEnumerable<BassMasterDataDto>>>
    {



        public class GetAllSpecializationNamesQueryHandler : IRequestHandler<GetAllDiagnoseNamesQuery, OperationResult<IEnumerable<BassMasterDataDto>>>
        {
            private readonly IDiagnoseRepository _diagnoseRepository;

            public GetAllSpecializationNamesQueryHandler(IDiagnoseRepository diagnoseRepository)
            {
                _diagnoseRepository = diagnoseRepository;
            }

            public async Task<OperationResult<IEnumerable<BassMasterDataDto>>> Handle(GetAllDiagnoseNamesQuery request, CancellationToken cancellationToken)
            {


                var diagnoses = await _diagnoseRepository.GetAllAsync();

                var diagnose = diagnoses.Select(x => new BassMasterDataDto { Name = x.Name });


                return OperationResult<IEnumerable<BassMasterDataDto>>.Success(diagnose);


            }
        }
    }
}
