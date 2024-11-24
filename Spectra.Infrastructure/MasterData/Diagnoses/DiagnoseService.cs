using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Application.MasterData.DiagnoseCommend.DTO;
using Spectra.Application.MasterData.DiagnoseCommend.Queries;
using Spectra.Application.MasterData.DiagnoseCommend.Services;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Infrastructure.MasterData.Diagnoses
{
    public class DiagnosesService : IDiagnosesService
    {

        private readonly IMediator _mediator;
        private readonly IExcelProcessingService _excelProcessingService;


        public DiagnosesService(IMediator mediator, IExcelProcessingService excelProcessingService
            )
        {
            _mediator = mediator;
            _excelProcessingService = excelProcessingService;
        }


        public async Task<OperationResult> CreateDiagnoses(CreateDiagnoseCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task CreateFromExcel(IFormFile input)
        {
            ICollection<DiagnoseReadDto> data = await _excelProcessingService.ProcessExcelFile(input, (cells) => new DiagnoseReadDto
            {
                Name = cells[0],
                Description = cells[1],
                Code1 = cells[2],
                Code2 = cells[3],
                Code3 = cells[4]
            });
            var command = new CreateDiagnoseFormExcelCommand { Data = data };

            await _mediator.Send(command);
        }
        public async Task<OperationResult> UpdateDiagnoses(UpdateDiagnoseCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> GetDiagnosesById(string id)
        {
            var query = new GetDiagnoseByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult> DeleteDiagnoses(DeleteDiagnoseCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> GetAllDiagnosess(GetAllDiagnoseQuery input)
        {
            return await _mediator.Send(input);
        }
    }
}

