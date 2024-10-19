using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.SpecializationCommend.Commands;
using Spectra.Application.MasterData.SpecializationCommend.DTO;
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
        public async Task<OperationResult<string>> CreateSpecialization(CreateSpecializationCommand input)
        {


            var command = new CreateSpecializationCommand
            {

                ConsultationCost = input.ConsultationCost,
                SpecializationName = input.SpecializationName,
                Description = input.Description

            };

            return await _mediator.Send(command);
        }
        public async Task CreateFromExcel(IFormFile input)
        {
            double cost;
            List<CreateSpecializationCommand> data = await _excelProcessingService.ProcessExcelFile(input, (cells) => new CreateSpecializationCommand
            {
                SpecializationName = cells[0],
                Description = cells[1],
                ConsultationCost = double.TryParse(cells[2], out cost) ? cost : 0
            });


            var command = new CreateBulkDataCommand<CreateSpecializationCommand> { Data = data };

            await _mediator.Send(command);


        }

        public async Task<OperationResult<Unit>> UpdateSpecialization(string id, UpdateSpecializationCommand input)
        {

            var command = new UpdateSpecializationCommand
            {
                Id = id,
                ConsultationCost = input.ConsultationCost,
                SpecializationName = input.SpecializationName,
                Description = input.Description
            };

            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteSpecialization(string id)
        {
            var command = new DeleteSpecializationCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Domain.MasterData.DoctorsSpecialization.Specialization>> GetSpecializationById(string id)
        {
            var query = new GetSpecializationByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<Domain.MasterData.DoctorsSpecialization.Specialization>>> GetAllSpecializations()
        {
            var query = new GetAllSpecializationQuery();
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<GetAllDiagnoseNamesDto>>> GetAllSpecializationsNames()
        {
            var query = new GetAllSpecializationNamesQuery();
            return await _mediator.Send(query);



        }
    }
}




