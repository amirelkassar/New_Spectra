using MediatR;
using Spectra.Domain.MasterData.Drug;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Application.MasterData.Drug.Services;
using Spectra.Application.MasterData.Drug.Queries;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.UploadExcel.Command;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Application.MasterData;

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
        public async Task<OperationResult<string>> CreateDrug(CreateDrugCommand input)
        {

            var command = new CreateDrugCommand
            {
                Name = input.Name,
                Doncentration = input.Doncentration,
                ActiveIngredient = input.ActiveIngredient,
                Contraindications = input.Contraindications,
                DrugInteractionsWithOtherdrugs = input.DrugInteractionsWithOtherdrugs,
                RecommendedDosage = input.RecommendedDosage,
                ScientificName = input.ScientificName,
                Photo = input.Photo,
                Type = input.Type,
                Nots = input.Nots,
                Code = input.Code

            };

            return await _mediator.Send(command);
        }
        public async Task CreateFromExcel(IFormFile input)
        {

            List<CreateDrugCommand> data = await _excelProcessingService.ProcessExcelFile(input, (cells) => new CreateDrugCommand
            {
                Name = cells[0],
                Doncentration = cells[1],
                ActiveIngredient = cells[2],
                Contraindications = cells[3],
                DrugInteractionsWithOtherdrugs = cells[4],
                RecommendedDosage = cells[5],
                ScientificName = cells[6],
                Photo = null,
                Type = cells[7],
                Nots = cells[8],
                Code = cells[9]
            });


            var command = new CreateBulkDataCommand<CreateDrugCommand> { Data = data };

            await _mediator.Send(command);


        }

        public async Task<OperationResult<Unit>> UpdateDrug(string id, UpdateDrugCommand input)
        {

            var command = new UpdateDrugCommand
            {

                Id = id,
                Name = input.Name,
                Doncentration = input.Doncentration,
                ActiveIngredient = input.ActiveIngredient,
                Contraindications = input.Contraindications,
                DrugInteractionsWithOtherdrugs = input.DrugInteractionsWithOtherdrugs,
                RecommendedDosage = input.RecommendedDosage,
                ScientificName = input.ScientificName,
                Attachment = input.Attachment,
                Type = input.Type,
                Nots = input.Nots,
                Code = input.Code
            };

            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteDrug(string id)
        {
            var command = new DeleteDrugCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<DrugMD>> GetDrugById(string id)
        {
            var query = new GetDrugsByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<DrugMD>>> GetAllDrugs()
        {
            var query = new GetAllDrugQuery();
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllDrugsNames()
        {
            var query = new GetAllDrugNamesQuery();

            return await _mediator.Send(query);

        }

        public Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllDrugNames()
        {
            throw new NotImplementedException();
        }
    }
}

