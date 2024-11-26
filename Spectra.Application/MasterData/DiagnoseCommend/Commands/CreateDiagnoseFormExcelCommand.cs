using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.DiagnoseCommend.DTO;
using Spectra.Application.MasterData.UploadExcel.Command;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.DiagnoseCommend.Commands
{
    public class CreateDiagnoseFormExcelCommand : CreateBulkDataCommand<DiagnoseReadDto>
    {
        public class CreateDiagnoseFormExcelCommandHandler(IBaseMongoDbRepository<Diagnose> diagnoseRepository) : IRequestHandler<CreateDiagnoseFormExcelCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Diagnose> _diagnoseRepository = diagnoseRepository;

            public async Task<OperationResult> Handle(CreateDiagnoseFormExcelCommand request, CancellationToken cancellationToken)
            {
                foreach (var item in request.Data)
                {
                    var entity = Diagnose.Create(
                Ulid.NewUlid().ToString(),
                item.Code1, item.Name);

                    await _diagnoseRepository.AddAsync(entity);
                }
                return OperationResult.Success();
            }
        }
    }
}
