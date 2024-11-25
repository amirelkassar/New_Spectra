using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Services;
using Spectra.Application.MasterData.UploadExcel.Command;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.MasterData.MedicalTestsAndXray
{
    public class MedicalTestsAndXrayService(IMediator mediator, IExcelProcessingService excelProcessingService) : IMedicalTestsAndXrayService
    {
        private readonly IMediator _mediator = mediator;
        private readonly IExcelProcessingService _excelProcessingService = excelProcessingService;

        public async Task<OperationResult> CreateMedicalTestsAndXray(CreateMedicalTestsAndXraysCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> UpdateMedicalTestsAndXray(UpdateMedicalTestsAndXraysCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> DeleteMedicalTestsAndXray(string id)
        {
            var command = new DeleteMedicalTestsAndXraysCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult> GetMedicalTestsAndXrayById(string id)
        {
            var query = new GetMedicalTestsAndXraysByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult> GetAllMedicalTestsAndXray(GetAllMedicalTestsAndXraysQuery input)
        {
            return await _mediator.Send(input);
        }

        public async Task CreateFromExcel(IFormFile input)
        {
            List<CreateMedicalTestsAndXraysCommand> data = await _excelProcessingService.ProcessExcelFile(input, (cells) => new CreateMedicalTestsAndXraysCommand
            {
                Name = cells[0],
                ExaminationTypes = Enum.TryParse<ExaminationType>(cells[1], true, out var examinationType) ? examinationType : throw new ArgumentException($"Invalid ExaminationType: {cells[2]}"),
                Code = cells[2],
            });
            var command = new CreateBulkDataCommand<CreateMedicalTestsAndXraysCommand> { Data = data };

            await _mediator.Send(command);
        }
    }
}

