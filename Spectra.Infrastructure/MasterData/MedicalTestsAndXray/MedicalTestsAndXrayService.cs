using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Commands;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Services;
using Spectra.Application.MasterData.MedicalTestsAndXraysMasterData.Queries;
using Spectra.Domain.MasterData.MedicalTestsAndXrays;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.UploadExcel.Command;
using Spectra.Application.MasterData.UploadExcel.Services;

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

        public async Task<string> CreateMedicalTestsAndXray(CreateMedicalTestsAndXraysCommand input)
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

        public async Task UpdateMedicalTestsAndXray(string id, UpdateMedicalTestsAndXraysCommand input)
        {

            var command = new UpdateMedicalTestsAndXraysCommand
            {

                Id = id,
                ScientificName = input.ScientificName,
                Notes = input.Notes,
                ExaminationTypes = input.ExaminationTypes

            };

            await _mediator.Send(command);
        }

        public async Task DeleteMedicalTestsAndXray(string id)
        {
            var command = new DeleteMedicalTestsAndXraysCommand { Id = id };
            await _mediator.Send(command);
        }

        public async Task<MedicalTestsAndXrays> GetMedicalTestsAndXrayById(string id)
        {
            var query = new GetMedicalTestsAndXraysByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<IEnumerable<MedicalTestsAndXrays>> GetAllMedicalTestsAndXray()
        {
            var query = new GetAllMedicalTestsAndXraysQuery();
            return await _mediator.Send(query);
        }


    }
}

