using MediatR;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.MasterData.UploadExcel.Command
{
    public class CreateMedicalTestsAndXraysFormExcelCommand
    {
      

        public class CreateBulkDataCommandHandler : IRequestHandler<CreateBulkDataCommand<CreateMedicalTestsAndXraysCommand>, OperationResult<Unit>>
        {
            private readonly IMedicalTestsAndXrayRepository _medicalTestsAndXrayRepository;

            public CreateBulkDataCommandHandler(IMedicalTestsAndXrayRepository medicalTestsAndXrayRepository)
            {

                _medicalTestsAndXrayRepository = medicalTestsAndXrayRepository;
            }



            public async Task<OperationResult<Unit>> Handle(CreateBulkDataCommand<CreateMedicalTestsAndXraysCommand> request, CancellationToken cancellationToken)
            {
               
                foreach (var item in request.Data)
                {
                    var entity = MedicalTestsAndXray.Create(
                Ulid.NewUlid().ToString(), item.ScientificName, item.Notes, item.ExaminationTypes
              );



                    await _medicalTestsAndXrayRepository.AddAsync(entity);
                }
                return OperationResult<Unit>.Success(Unit.Value);

            
               
    }
        }

    }
}