using Mapster;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Dtos;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries
{
    public class GetMedicalTestsAndXraysByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }
    }

    public class GetDiagnoseByIdQueryHandler(IBaseMongoDbRepository<MedicalTestAndXray> medicalTestsAndXrayRepository) : IRequestHandler<GetMedicalTestsAndXraysByIdQuery, OperationResult>
    {
        private readonly IBaseMongoDbRepository<MedicalTestAndXray> _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
        public async Task<OperationResult> Handle(GetMedicalTestsAndXraysByIdQuery request, CancellationToken cancellationToken)
        {
            var entitiy = await _medicalTestsAndXrayRepository.GetByIdAsync(request.Id); ;
            if (entitiy == null)
            {
                throw new NotFoundException("medicalTestsAndXray", request.Id);
            }
            var dto = entitiy.Adapt<MedicalTestsAndXrayReadDto>();
            return OperationResult<MedicalTestsAndXrayReadDto>.Success(dto);
        }
    }
}
