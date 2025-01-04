using MediatR;
using Spectra.Domain.Settings.MedicalSpecialties;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.MedicalSpecialties.Queries
{

    public class GetMedicalSpecialtByIdQuery : IRequest<OperationResult<MedicalSpecialt>>
    {
        public string Id { get; set; }
    }

    public class GetMedicalSpecialtByIdQueryHandler : IRequestHandler<GetMedicalSpecialtByIdQuery, OperationResult<MedicalSpecialt>>
    {
        private readonly IMedicalSpecialtiesRepository _entityRepository;


        public GetMedicalSpecialtByIdQueryHandler(IMedicalSpecialtiesRepository entityRepository)
        {
            _entityRepository = entityRepository;

        }

        public async Task<OperationResult<MedicalSpecialt>> Handle(GetMedicalSpecialtByIdQuery request, CancellationToken cancellationToken)
        {

            var entitiy = await _entityRepository.GetByIdAsync(request.Id);

            return OperationResult<MedicalSpecialt>.Success(entitiy);


        }
    }
}
