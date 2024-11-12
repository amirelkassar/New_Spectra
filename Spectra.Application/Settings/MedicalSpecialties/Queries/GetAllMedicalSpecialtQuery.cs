using MediatR;
using Spectra.Domain.Settings.MedicalSpecialties;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.MedicalSpecialties.Queries
{

    public class GetAllMedicalSpecialtQuery : IRequest<OperationResult<IEnumerable<MedicalSpecialt>>>
    {

    }
    public class GetAllMedicalSpecialtQueryHandler : IRequestHandler<GetAllMedicalSpecialtQuery, OperationResult<IEnumerable<MedicalSpecialt>>>
    {
        private readonly IMedicalSpecialtiesRepository _entityRepository;

        public GetAllMedicalSpecialtQueryHandler(IMedicalSpecialtiesRepository entityRepository)
        {
            _entityRepository = entityRepository;
        }
        public async Task<OperationResult<IEnumerable<MedicalSpecialt>>> Handle(GetAllMedicalSpecialtQuery request, CancellationToken cancellationToken)
        {
            var entitiy = await _entityRepository.GetAllAsync();
            return OperationResult<IEnumerable<MedicalSpecialt>>.Success(entitiy);
        }
    }
}
