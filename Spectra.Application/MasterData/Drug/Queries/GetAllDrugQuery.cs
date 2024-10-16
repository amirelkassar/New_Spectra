using MediatR;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Queries
{

    public class GetAllDrugQuery : IRequest<OperationResult<IEnumerable<DrugMD>>>
    {

    }
    public class GetAllDrugeQueryHandler : IRequestHandler<GetAllDrugQuery, OperationResult<IEnumerable<DrugMD>>>
    {
        private readonly IDrugRepository _drugRepository;

        public GetAllDrugeQueryHandler(IDrugRepository drugRepository)
        {
            _drugRepository = drugRepository;
        }
        public async Task<OperationResult<IEnumerable<DrugMD>>> Handle(GetAllDrugQuery request, CancellationToken cancellationToken)
        {
         
         
                var drugs = await _drugRepository.GetAllAsync();


                return OperationResult<IEnumerable<DrugMD>>.Success(drugs);
         
   

        }
    }
}
