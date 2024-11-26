using MediatR;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.UploadExcel.Command
{
    public class CreateMedicalTestsAndXraysFormExcelCommand
    {
        public class CreateBulkDataCommandHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository) : IRequestHandler<CreateBulkDataCommand<CreateMedicalTestsAndXraysCommand>, OperationResult>
        {
            private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;

            public async Task<OperationResult> Handle(CreateBulkDataCommand<CreateMedicalTestsAndXraysCommand> request, CancellationToken cancellationToken)
            {
                foreach (var item in request.Data)
                {
                    var entity = MedicalTestAndXray.Create(Ulid.NewUlid().ToString(), 
                        item.Name, item.ExaminationTypes);
                    entity.Code= item.Code;
                    await _medicalTestsAndXrayRepository.AddAsync(entity);
                }
                return OperationResult<Unit>.Success(Unit.Value);
            }
        }

    }
}