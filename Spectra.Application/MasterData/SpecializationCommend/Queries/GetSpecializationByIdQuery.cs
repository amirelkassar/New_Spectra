using Mapster;
using MediatR;
using Spectra.Application.MasterData.SpecializationCommend.DTO;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.SpecializationCommend.Queries
{
    public class GetSpecializationByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }
    }

    public class GetSpecializationByIdQueryHandler : IRequestHandler<GetSpecializationByIdQuery, OperationResult>
    {
        private readonly ISpecializationsRepository _specializationRepository;

        public GetSpecializationByIdQueryHandler(ISpecializationsRepository specializationRepository)
        {
            _specializationRepository = specializationRepository;
        }
        public async Task<OperationResult> Handle(GetSpecializationByIdQuery request, CancellationToken cancellationToken)
        {
            var Specialization = await _specializationRepository.GetByIdAsync(request.Id);
            if (Specialization == null)
            {
                throw new NotFoundException("Specialization", request.Id);
            }

            var dto = Specialization.Adapt<SpecializationReadDto>();
            return OperationResult<SpecializationReadDto>.Success(dto);
        }
    }

}

