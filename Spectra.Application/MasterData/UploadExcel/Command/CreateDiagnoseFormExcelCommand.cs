using MediatR;
using Spectra.Application.MasterData.DiagnoseCommend;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.UploadExcel.Command
{
    public class CreateDiagnoseFormExcelCommand
    {


        public class CreateBulkDataCommandHandler : IRequestHandler<CreateBulkDataCommand<CreateDiagnoseCommand>, OperationResult<Unit>>
        {
            private readonly IDiagnoseRepository _diagnoseRepository;

            public CreateBulkDataCommandHandler(IDiagnoseRepository diagnoseRepository)
            {
                _diagnoseRepository = diagnoseRepository;
            }

            public async Task<OperationResult<Unit>> Handle(CreateBulkDataCommand<CreateDiagnoseCommand> request, CancellationToken cancellationToken)
            {

                foreach (var item in request.Data)
                {
                    var entity = Diagnose.Create(
                Ulid.NewUlid().ToString(),
                item.Code1,
                item.Code2,
                item.Code3,
                item.Description, item.Name);

                    await _diagnoseRepository.AddAsync(entity);
                }
                return OperationResult<Unit>.Success(Unit.Value);

            }

        }
    }


}
