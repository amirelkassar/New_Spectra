using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Application.MasterData.DiagnoseCommend.Queries;
using Spectra.Application.MasterData.DiagnoseCommend.Services;
using Spectra.Application.MasterData.UploadExcel.Command;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Domain.MasterData.Diagnoses;
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


        public async Task<OperationResult<string>> CreateDiagnoses(CreateDiagnoseCommand input)
        {

            var command = new CreateDiagnoseCommand
            {

                Code1 = input.Code1,
                Code2 = input.Code2,
                Code3 = input.Code3,
                Description = input.Description,
                Name = input.Name

            };


            return await _mediator.Send(command);
        }

        public async Task CreateFromExcel(IFormFile input)
        {
            List<CreateDiagnoseCommand> data = await _excelProcessingService.ProcessExcelFile(input, (cells) => new CreateDiagnoseCommand
            {
                Name = cells[0],
                Description = cells[1],
                Code1 = cells[2],
                Code2 = cells[3],
                Code3 = cells[4]
            });


            var command = new CreateBulkDataCommand<CreateDiagnoseCommand> { Data = data };

            await _mediator.Send(command);


        }
        public async Task<OperationResult<Unit>> UpdateDiagnoses(string id, UpdateDiagnoseCommand input)
        {

            var command = new UpdateDiagnoseCommand
            {

                Id = id,
                Code1 = input.Code1,
                Code2 = input.Code2,
                Code3 = input.Code3,
                Description = input.Description,
                Name = input.Name

            };

            return await _mediator.Send(command);

        }

        public async Task<OperationResult<Unit>> DeleteDiagnoses(string id)
        {
            var command = new DeleteDiagnoseCommand { Id = id };
            return await _mediator.Send(command);

        }


        public async Task<OperationResult<Diagnose>> GetDiagnosesById(string id)
        {
            var query = new GetDiagnoseByIdQuery { Id = id };
            return await _mediator.Send(query);
        }


        public async Task<OperationResult<IEnumerable<Diagnose>>> GetAllDiagnosess()
        {
            var query = new GetAllDiagnoseQuery();
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllDiagnosesNames()
        {
            var query = new GetAllDiagnoseNamesQuery();

            return await _mediator.Send(query);

        }
    }
}

