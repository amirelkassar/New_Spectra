using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.SpecializationCommend.Queries
{


    public class GetAllSpecializationNamesQuery : IQuery<OperationResult<IEnumerable<BassMasterDataDto>>>
    {



        public class GetAllSpecializationNamesQueryHandler : IRequestHandler<GetAllSpecializationNamesQuery, OperationResult<IEnumerable<BassMasterDataDto>>>
        {
            private readonly ISpecializationsRepository _specializationRepository;

            public GetAllSpecializationNamesQueryHandler(ISpecializationsRepository specializationRepository)
            {
                _specializationRepository = specializationRepository;
            }

            public async Task<OperationResult<IEnumerable<BassMasterDataDto>>> Handle(GetAllSpecializationNamesQuery request, CancellationToken cancellationToken)
            {


                var specialization = await _specializationRepository.GetAllAsync();

                var AllspecializationNames = specialization.Select(x => new BassMasterDataDto { Name = x.Name, Id = x.Id });

                return OperationResult<IEnumerable<BassMasterDataDto>>.Success(AllspecializationNames);


            }
        }
    }
}
