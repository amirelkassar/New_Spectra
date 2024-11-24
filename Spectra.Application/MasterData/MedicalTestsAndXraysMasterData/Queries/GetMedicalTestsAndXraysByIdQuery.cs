using MediatR;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries
{

    public class GetMedicalTestsAndXraysByIdQuery : IRequest<OperationResult<MedicalTestAndXray>>
    {
        public string Id { get; set; }
    }

    public class GetDiagnoseByIdQueryHandler : IRequestHandler<GetMedicalTestsAndXraysByIdQuery, OperationResult<MedicalTestAndXray>>
    {
        private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;

        public GetDiagnoseByIdQueryHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
        {

            _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;

        }
        public async Task<OperationResult<MedicalTestAndXray>> Handle(GetMedicalTestsAndXraysByIdQuery request, CancellationToken cancellationToken)
        {



            var entitiy = await _medicalTestsAndXrayRepository.GetByIdAsync(request.Id); ;
            if (entitiy == null)
            {
                throw new NotFoundException("medicalTestsAndXray", request.Id);
            }

            return OperationResult<MedicalTestAndXray>.Success(entitiy);


        }
    }
}
