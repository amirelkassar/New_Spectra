using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectra.Domain.MasterData.Drug;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Application.MasterData.Drug.Services;
using Spectra.Application.MasterData.Drug.Queries;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.UploadExcel.Command;
using Spectra.Application.MasterData.UploadExcel.Services;

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
        public async Task<string> CreateDrug(CreateDrugCommand input)
        {

            var command = new CreateDrugCommand
            {
                DrugsName = input.DrugsName,
                DrugDoncentration = input.DrugDoncentration,
                ActiveIngredient = input.ActiveIngredient,
                Contraindications = input.Contraindications,
                DrugInteractionsWithOtherdrugs = input.DrugInteractionsWithOtherdrugs,
                RecommendedDosage = input.RecommendedDosage,
                ScientificName = input.ScientificName,
                Photo = input.Photo
            };

            return await _mediator.Send(command);
        }
        public async Task CreateFromExcel(IFormFile input)
        {

            List<CreateDrugCommand> data = await _excelProcessingService.ProcessExcelFile(input, (cells) => new CreateDrugCommand
            {
                DrugsName = cells[0],
                DrugDoncentration = cells[1],
                ActiveIngredient = cells[2],
                Contraindications = cells[3],
                DrugInteractionsWithOtherdrugs = cells[4],
                RecommendedDosage = cells[5],
                ScientificName = cells[6],
                Photo = null
            });


            var command = new CreateBulkDataCommand<CreateDrugCommand> { Data = data };

            await _mediator.Send(command);


        }

        public async Task UpdateDrug(string id, UpdateDrugCommand input)
        {

            var command = new UpdateDrugCommand
            {

                Id = id,
                DrugsName = input.DrugsName,
                DrugDoncentration = input.DrugDoncentration,
                ActiveIngredient = input.ActiveIngredient,
                Contraindications = input.Contraindications,
                DrugInteractionsWithOtherdrugs = input.DrugInteractionsWithOtherdrugs,
                RecommendedDosage = input.RecommendedDosage,
                ScientificName = input.ScientificName,
                Attachment = input.Attachment


            };

            await _mediator.Send(command);
        }

        public async Task DeleteDrug(string id)
        {
            var command = new DeleteDrugCommand { Id = id };
            await _mediator.Send(command);
        }

        public async Task<Drugs> GetDrugById(string id)
        {
            var query = new GetDrugsByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<IEnumerable<Drugs>> GetAllDrugs()
        {
            var query = new GetAllDrugQuery();
            return await _mediator.Send(query);
        }


    }
}

