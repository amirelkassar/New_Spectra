using MediatR;
using Spectra.Domain.Settings.MedicalSpecialties;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.ShowMedicalProvider.Queries
{

    public class GetAllShowSpecialltionQuery : IRequest<OperationResult<IEnumerable<MedicalSpecialt>>>
    {

    }
    public class GetAllMedicalSpecialtQueryHandler : IRequestHandler<GetAllShowSpecialltionQuery, OperationResult<IEnumerable<MedicalSpecialt>>>
    {
        private readonly IShowSpecialltionRepository _entityRepository;

        public GetAllMedicalSpecialtQueryHandler(IShowSpecialltionRepository entityRepository)
        {
            _entityRepository = entityRepository;
        }
        public async Task<OperationResult<IEnumerable<MedicalSpecialt>>> Handle(GetAllShowSpecialltionQuery request, CancellationToken cancellationToken)
        {
            var entitiy = await _entityRepository.GetAllAsync();
            return null;
        }
    }
}
