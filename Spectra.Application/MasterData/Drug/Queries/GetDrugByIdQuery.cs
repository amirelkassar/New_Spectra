using MediatR;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Queries
{

    public class GetDrugsByIdQuery : IRequest<OperationResult<DrugMD>>
    {
        public string Id { get; set; }


    }

    public class GetDrugsByIdQueryHandler : IRequestHandler<GetDrugsByIdQuery, OperationResult<DrugMD>>
    {
        private readonly IDrugRepository _drugRepository;

        public GetDrugsByIdQueryHandler(IDrugRepository drugRepository)
        {
            _drugRepository = drugRepository;
        }

        public async Task<OperationResult<DrugMD>> Handle(GetDrugsByIdQuery request, CancellationToken cancellationToken)
        {



            var entitiy = await _drugRepository.GetByIdAsync(request.Id);
            if (entitiy == null)
            {
                throw new NotFoundException("Drugs", request.Id);
            }

            return OperationResult<DrugMD>.Success(entitiy);


        }
    }
}
