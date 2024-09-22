using MediatR;
using Spectra.Application.MedicalStaff.Specialists;
using Spectra.Domain.MedicalStaff.Specialists;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MedicalStaff.Specialists.Queries
{
    public class GetSpecialistByIdQuery : IRequest<OperationResult<Specialist>>
    {
        public string Id { get; set; }
    }

    public class GetSpecialistByIdQueryHandler : IRequestHandler<GetSpecialistByIdQuery, OperationResult<Specialist>>
    {
        private readonly ISpecialistRepository _specialistRepository;

        public GetSpecialistByIdQueryHandler(ISpecialistRepository specialistRepository)
        {
            _specialistRepository = specialistRepository;
        }

        public async Task<OperationResult<Specialist>> Handle(GetSpecialistByIdQuery request, CancellationToken cancellationToken)
        {


            var specialist = await _specialistRepository.GetByIdAsync(request.Id);




            return OperationResult<Specialist>.Success(specialist);
        }
    }
}
