using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;

using Spectra.Domain.MasterData.Diagnoses;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Application.MasterData.DiagnoseCommend.Services;
using Spectra.Application.MasterData.DiagnoseCommend.Queries;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.UploadExcel.Command;
using Spectra.Application.MasterData.UploadExcel.Services;


namespace Spectra.Infrastructure.MasterData.Diagnoses
{
    public class DiagnosesService : IDiagnosesService
    {

        private readonly IMediator _mediator;
        private readonly IExcelProcessingService _excelProcessingService;

      

        public DiagnosesService(IMediator mediator, IExcelProcessingService excelProcessingService)
        {

            _mediator = mediator;
            _excelProcessingService = excelProcessingService;
        }
    

        public async Task<string> CreateDiagnoses(CreateDiagnoseCommand input)
        {

            var command = new CreateDiagnoseCommand
            {
                Code1 = input.Code1,
                Code2 = input.Code2,
                Code3 = input.Code3,
                DiagnosisDescription = input.DiagnosisDescription,
                DiagnosisName = input.DiagnosisName
            };

            return await _mediator.Send(command);
        }

        public async Task CreateFromExcel(IFormFile input)
        {
            List<CreateDiagnoseCommand> data = await _excelProcessingService.ProcessExcelFile(input, (cells) => new CreateDiagnoseCommand
            {
                DiagnosisName = cells[0],
                DiagnosisDescription = cells[1],
                 Code1 = cells[2],
                Code2 = cells[3],
                Code3 = cells[4]
            });


            var command = new CreateBulkDataCommand<CreateDiagnoseCommand> { Data = data };

            await _mediator.Send(command);


        }
        public async Task UpdateDiagnoses(string id, UpdateDiagnoseCommand input)
        {

            var command = new UpdateDiagnoseCommand
            {
                Id = id,
                Code1 = input.Code1,
                Code2 = input.Code2,
                Code3 = input.Code3,
                DiagnosisDescription = input.DiagnosisDescription,
                DiagnosisName = input.DiagnosisName
            };

            await _mediator.Send(command);
        }

        public async Task DeleteDiagnoses(string id)
        {
            var command = new DeleteDiagnoseCommand { Id = id };
            await _mediator.Send(command);
        }


        public async Task<Diagnose> GetDiagnosesById(string id)
        {
            var query = new GetDiagnoseByIdQuery { Id = id };
            return await _mediator.Send(query);
        }


        public async Task<IEnumerable<Diagnose>> GetAllDiagnosess()
        {
            var query = new GetAllDiagnoseQuery();
            return await _mediator.Send(query);
        }


    }
}

