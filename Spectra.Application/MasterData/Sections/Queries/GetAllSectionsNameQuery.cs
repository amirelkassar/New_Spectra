using MediatR;
using Spectra.Application.MasterData.Sections;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Sections.Queries
{

    public class GetAllSectionsNameQuery : IRequest<OperationResult<List<BassMasterDataDto>>>
    {

    }
    public class GetAllSectionsNameQueryHandler : IRequestHandler<GetAllSectionsNameQuery, OperationResult<List<BassMasterDataDto>>>
    {
        private readonly ISectionsRepository _sectionsRepository;




        public GetAllSectionsNameQueryHandler(ISectionsRepository sectionsRepository)
        {
            _sectionsRepository = sectionsRepository;

        }
        public async Task<OperationResult<List<BassMasterDataDto>>> Handle(GetAllSectionsNameQuery request, CancellationToken cancellationToken)
        {

            var entity = await _sectionsRepository.GetAllAsync();

            var names = entity.Select(x =>new BassMasterDataDto { Name = x.Name }).ToList();


            return OperationResult<List<BassMasterDataDto>>.Success(names);




        }
    }
}
