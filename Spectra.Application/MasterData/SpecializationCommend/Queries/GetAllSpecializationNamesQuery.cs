using MediatR;
using Spectra.Application.MasterData.SpecializationCommend.DTO;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.SpecializationCommend.Queries
{


    public class GetAllSpecializationNamesQuery : IQuery<OperationResult<IEnumerable<GetAllDiagnoseNamesDto>>>
    {



        public class GetAllSpecializationNamesQueryHandler : IRequestHandler<GetAllSpecializationNamesQuery, OperationResult<IEnumerable<GetAllDiagnoseNamesDto>>>
        {
            private readonly ISpecializationsRepository _specializationRepository;

            public GetAllSpecializationNamesQueryHandler(ISpecializationsRepository specializationRepository)
            {
                _specializationRepository = specializationRepository;
            }

            public async Task<OperationResult<IEnumerable<GetAllDiagnoseNamesDto>>> Handle(GetAllSpecializationNamesQuery request, CancellationToken cancellationToken)
            {


                var specialization = await _specializationRepository.GetAllAsync();

                var AllspecializationNames = specialization.Select(x => new GetAllDiagnoseNamesDto { SpecializationName = x.Name });

                return OperationResult<IEnumerable<GetAllDiagnoseNamesDto>>.Success(AllspecializationNames);


            }
        }
    }
}
