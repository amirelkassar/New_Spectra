using Mapster;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.DiagnoseCommend.DTO;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.DiagnoseCommend.Queries
{

    public class GetDiagnoseByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }
    }

    public class GetDiagnoseByIdQueryHandler : IRequestHandler<GetDiagnoseByIdQuery, OperationResult>
    {
        private readonly IBaseMongoDbRepository<Diagnose> _diagnoseRepository;

        public GetDiagnoseByIdQueryHandler(IBaseMongoDbRepository<Diagnose> diagnoseRepository)
        {
            _diagnoseRepository = diagnoseRepository;
        }
        public async Task<OperationResult> Handle(GetDiagnoseByIdQuery request, CancellationToken cancellationToken)
        {

            var diagnose = await _diagnoseRepository.GetByIdAsync(request.Id);
            if (diagnose == null)
            {
                throw new NotFoundException("Diagnoses", request.Id);
            }
            var dto = diagnose.Adapt<DiagnoseReadDto>();
            return OperationResult<DiagnoseReadDto>.Success(dto);


        }
    }
}
