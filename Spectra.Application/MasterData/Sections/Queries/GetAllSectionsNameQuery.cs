using MediatR;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Queries
{

    public class GetAllSectionsNameQuery : IRequest<OperationResult<List<BaseMasterDataDto>>>
    {

    }
    public class GetAllSectionsNameQueryHandler : IRequestHandler<GetAllSectionsNameQuery, OperationResult<List<BaseMasterDataDto>>>
    {
        private readonly ISectionsRepository _sectionsRepository;




        public GetAllSectionsNameQueryHandler(ISectionsRepository sectionsRepository)
        {
            _sectionsRepository = sectionsRepository;

        }
        public async Task<OperationResult<List<BaseMasterDataDto>>> Handle(GetAllSectionsNameQuery request, CancellationToken cancellationToken)
        {

            var entity = await _sectionsRepository.GetAllAsync();

            var names = entity.Select(x => new BaseMasterDataDto { Name = x.Name }).ToList();


            return OperationResult<List<BaseMasterDataDto>>.Success(names);




        }
    }
}
