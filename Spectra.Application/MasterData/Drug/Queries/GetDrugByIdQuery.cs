using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.Drug.Queries
{

    public class GetDrugsByIdQuery : IRequest<OperationResult<Domain.MasterData.Drug.Drug>>
    {
        public string Id { get; set; }
    }

    public class GetDrugsByIdQueryHandler : IRequestHandler<GetDrugsByIdQuery, OperationResult<Domain.MasterData.Drug.Drug>>
    {
        private readonly IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> _drugRepository;

        public GetDrugsByIdQueryHandler(IBaseMongoDbRepository<Domain.MasterData.Drug.Drug> drugRepository)
        {
            _drugRepository = drugRepository;
        }

        public async Task<OperationResult<Domain.MasterData.Drug.Drug>> Handle(GetDrugsByIdQuery request, CancellationToken cancellationToken)
        {
            var entitiy = await _drugRepository.GetByIdAsync(request.Id);
            return entitiy == null
                ? throw new NotFoundException("Drugs", request.Id)
                : OperationResult<Domain.MasterData.Drug.Drug>.Success(entitiy);
        }
    }
}
