using MediatR;
using Spectra.Application.MedicalStaff.Specialists;
using Spectra.Domain.MedicalStaff.Specialists;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MedicalStaff.Specialists.Queries
{
    public class GetAllSpecialistQuery : QueryPaginationParam, IRequest<OperationResult<IEnumerable<Specialist>>>
    {

    }

    public class GetAllSpecialistQueryHandler : IRequestHandler<GetAllSpecialistQuery, OperationResult<IEnumerable<Specialist>>>
    {
        private readonly ISpecialistRepository _specialistRepository;

        public GetAllSpecialistQueryHandler(ISpecialistRepository specialistRepository)
        {
            _specialistRepository = specialistRepository;

        }

        public async Task<OperationResult<IEnumerable<Specialist>>> Handle(GetAllSpecialistQuery request, CancellationToken cancellationToken)
        {
            var Specialist = await _specialistRepository.GetAllAsync();

            return OperationResult<IEnumerable<Specialist>>.Success(Specialist);


        }
    }
}
