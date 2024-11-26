using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Application.MasterData.Drug.Queries;
using Spectra.Application.MasterData.Drug.Services;
using Spectra.Application.MasterData.UploadExcel.Command;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.MasterData.Drug
{
    public class DrugService : IDrugService
    {
        private readonly IMediator _mediator;
        private readonly IExcelProcessingService _excelProcessingService;
        public DrugService(IMediator mediator, IExcelProcessingService excelProcessingService)
        {

            _mediator = mediator;
            _excelProcessingService = excelProcessingService;
        }
        public async Task<OperationResult> CreateDrug(CreateDrugCommand input)
        {
            return await _mediator.Send(input);
        }
        public async Task<OperationResult> CreateFromExcel(IFormFile input)
        {

            List<CreateDrugCommand> data = await _excelProcessingService.ProcessExcelFile(input, (cells) => new CreateDrugCommand
            {
                Name = cells[0],
                Doncentration = cells[1],
                ActiveIngredient = cells[2],
                Contraindications = cells[3],
                InteractionsWithOtherdrugs = cells[4],
                RecommendedDosage = cells[5],
                ScientificName = cells[6],
                Photo = null,
                Type = cells[7],
                Nots = cells[8],
                Code = cells[9]
            });


            var command = new CreateBulkDataCommand<CreateDrugCommand> { Data = data };

            await _mediator.Send(command);

            return OperationResult.Success();
        }

        public async Task<OperationResult> UpdateDrug(UpdateDrugCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> DeleteDrug(string id)
        {
            var command = new DeleteDrugCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult> GetDrugById(string id)
        {
            var query = new GetDrugsByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult> GetAllDrugNames(GetAllDrugNamesQuery input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> GetAllDrugs(GetAllDrugQuery input)
        {
            return await _mediator.Send(input);
        }
    }
}

