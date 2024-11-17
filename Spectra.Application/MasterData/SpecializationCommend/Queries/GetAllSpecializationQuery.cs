using MediatR;
using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.SpecializationCommend.Queries
{


    public class GetAllSpecializationQuery : IRequest<OperationResult<IEnumerable<Specialization>>>
    {
        public int DoctorCount { get; set; }
    }

    public class GetAllSpecializationQueryHandler : IRequestHandler<GetAllSpecializationQuery, OperationResult<IEnumerable<Specialization>>>
    {
        private readonly ISpecializationsRepository _specializationRepository;

        public GetAllSpecializationQueryHandler(ISpecializationsRepository specializationRepository)
        {
            _specializationRepository = specializationRepository;
        }

        public async Task<OperationResult<IEnumerable<Specialization>>> Handle(GetAllSpecializationQuery request, CancellationToken cancellationToken)
        {



            var entity = await _specializationRepository.GetAllAsync();

            return OperationResult<IEnumerable<Specialization>>.Success(entity);


        }
    }
}
