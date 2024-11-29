using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.SpecializationCommend.Commands;
using Spectra.Application.MasterData.SpecializationCommend.Queries;
using Spectra.Application.MasterData.SpecializationCommend.Services;
using Spectra.Application.MasterData.UploadExcel.Command;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Domain.Shared.Wrappers;


namespace Spectra.Infrastructure.MasterData.Specialization
{

    public class SpecializationService : ISpecializationService
    {

        private readonly IMediator _mediator;
        private readonly IExcelProcessingService _excelProcessingService;



        public SpecializationService(IMediator mediator, IExcelProcessingService excelProcessingService)
        {

            _mediator = mediator;
            _excelProcessingService = excelProcessingService;

        }
        public async Task<OperationResult> CreateSpecialization(CreateSpecializationCommand input)
        {
            return await _mediator.Send(input);
        }
        public async Task CreateFromExcel(IFormFile input)
        {
            double cost;
            List<CreateSpecializationCommand> data = await _excelProcessingService.ProcessExcelFile(input, (cells) => new CreateSpecializationCommand
            {
                EnName = cells[0],
                ArName = cells[1],
                EnDescription = cells[2],
                ArDescription = cells[3],
                ConsultationCost = double.TryParse(cells[4], out cost) ? cost : 0
            });
            var command = new CreateBulkDataCommand<CreateSpecializationCommand> { Data = data };
            await _mediator.Send(command);
        }

        public async Task<OperationResult> UpdateSpecialization(UpdateSpecializationCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> DeleteSpecialization(string id)
        {
            var command = new DeleteSpecializationCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult> GetSpecializationById(string id)
        {
            var query = new GetSpecializationByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult> GetAllSpecializations(GetAllSpecializationQuery input)
        {
            return await _mediator.Send(input);
        }
    }
}




