using MediatR;
using Spectra.Application.Settings.MedicalSpecialties;
using Spectra.Domain.Settings.MedicalSpecialties;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Settings.ShowMedicalProvider.Queries
{

    public class GetShowSpecialltionByIdQuery : IRequest<OperationResult<MedicalSpecialt>>
    {
        public string Id { get; set; }
    }

    public class GetMedicalSpecialtByIdQueryHandler : IRequestHandler<GetShowSpecialltionByIdQuery, OperationResult<MedicalSpecialt>>
    {
        private readonly IShowSpecialltionRepository _entityRepository;


        public GetMedicalSpecialtByIdQueryHandler(IShowSpecialltionRepository entityRepository)
        {
            _entityRepository = entityRepository;
        }

        public async Task<OperationResult<MedicalSpecialt>> Handle(GetShowSpecialltionByIdQuery request, CancellationToken cancellationToken)
        {

            var entitiy = await _entityRepository.GetByIdAsync(request.Id);
            return null;
           // return OperationResult<MedicalSpecialt>.Success(entitiy);
        }
    }
}
