using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.SpecializationCommend.Queries
{


    public class GetAllSpecializationNamesQuery : IQuery<OperationResult<IEnumerable<BaseMasterDataDto>>>
    {



        public class GetAllSpecializationNamesQueryHandler : IRequestHandler<GetAllSpecializationNamesQuery, OperationResult<IEnumerable<BaseMasterDataDto>>>
        {
            private readonly ISpecializationsRepository _specializationRepository;

            public GetAllSpecializationNamesQueryHandler(ISpecializationsRepository specializationRepository)
            {
                _specializationRepository = specializationRepository;
            }

            public async Task<OperationResult<IEnumerable<BaseMasterDataDto>>> Handle(GetAllSpecializationNamesQuery request, CancellationToken cancellationToken)
            {


                var specialization = await _specializationRepository.GetAllAsync();

                var AllspecializationNames = specialization.Select(x => new BaseMasterDataDto { Name = x.Name, Id = x.Id });

                return OperationResult<IEnumerable<BaseMasterDataDto>>.Success(AllspecializationNames);


            }
        }
    }
}
