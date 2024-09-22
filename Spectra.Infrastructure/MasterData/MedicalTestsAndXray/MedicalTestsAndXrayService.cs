using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Services;
using Spectra.Application.MasterData.UploadExcel.Command;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.MasterData.MedicalTestsAndXray
{
    public class MedicalTestsAndXrayService : IMedicalTestsAndXrayService
    {
        private readonly IMediator _mediator;
        private readonly IExcelProcessingService _excelProcessingService;

        public MedicalTestsAndXrayService(IMediator mediator, IExcelProcessingService excelProcessingService)
        {

            _mediator = mediator;
            _excelProcessingService = excelProcessingService;
        }

        public async Task<OperationResult<string>> CreateMedicalTestsAndXray(CreateMedicalTestsAndXraysCommand input)
        {

            var command = new CreateMedicalTestsAndXraysCommand
            {
                ScientificName = input.ScientificName,
                Notes = input.Notes,
                ExaminationTypes = input.ExaminationTypes
            };

            return await _mediator.Send(command);
        }
        public async Task CreateFromExcel(IFormFile input)
        {

            List<CreateMedicalTestsAndXraysCommand> data = await _excelProcessingService.ProcessExcelFile(input, (cells) => new CreateMedicalTestsAndXraysCommand
            {

                ScientificName = cells[0],
                Notes = cells[1],
                ExaminationTypes = Enum.TryParse<ExaminationType>(cells[2], true, out var examinationType) ? examinationType : throw new ArgumentException($"Invalid ExaminationType: {cells[2]}")
            });


            var command = new CreateBulkDataCommand<CreateMedicalTestsAndXraysCommand> { Data = data };

            await _mediator.Send(command);

        }

        public async Task<OperationResult<Unit>> UpdateMedicalTestsAndXray(string id, UpdateMedicalTestsAndXraysCommand input)
        {

            var command = new UpdateMedicalTestsAndXraysCommand
            {

                Id = id,
                ScientificName = input.ScientificName,
                Notes = input.Notes,
                ExaminationTypes = input.ExaminationTypes

            };

         return   await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteMedicalTestsAndXray(string id)
        {
            var command = new DeleteMedicalTestsAndXraysCommand { Id = id };
         return   await _mediator.Send(command);
        }

        public async Task<OperationResult<Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray>> GetMedicalTestsAndXrayById(string id)
        {
            var query = new GetMedicalTestsAndXraysByIdQuery { Id = id };

            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<Domain.MasterData.MedicalTestsAndXrays.MedicalTestsAndXray>>> GetAllMedicalTestsAndXray()
        {

            var query = new GetAllMedicalTestsAndXraysQuery();

            return await _mediator.Send(query);

        }

        public async Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllMedicalTestsAndXrayNames()
        {

            var query = new GetAllMedicalTestsAndXrayNamesQuery();

            return await _mediator.Send(query);

        }

    }
}

