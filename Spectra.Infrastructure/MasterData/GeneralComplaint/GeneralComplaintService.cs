using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Application.MasterData.GeneralComplaintsM.Queries;
using Spectra.Application.MasterData.GeneralComplaintsM.Services;
using Spectra.Application.MasterData.UploadExcel.Command;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.MasterData.GeneralComplaint
{
    public class GeneralComplaintService : IGeneralComplaintService
    {
        private readonly IMediator _mediator;
        private readonly IExcelProcessingService _excelProcessingService;
        public GeneralComplaintService(IMediator mediator, IExcelProcessingService excelProcessingService)
        {

            _mediator = mediator;
            _excelProcessingService = excelProcessingService;
        }
        public async Task<OperationResult> CreateGeneralComplaints(CreateGeneralComplaintsCommand input)
        {
            return await _mediator.Send(input);
        }
        public async Task CreateFromExcel(IFormFile input)
        {
            List<CreateGeneralComplaintsCommand> data = await _excelProcessingService.ProcessExcelFile(input, (cells) => new CreateGeneralComplaintsCommand
            {
                ComplaintName = cells[0],
                DescriptionOfTheComplaint = cells[1],

            });
            var command = new CreateBulkDataCommand<CreateGeneralComplaintsCommand> { Data = data };

            await _mediator.Send(command);
        }

        public async Task<OperationResult> UpdateGeneralComplaints(UpdateGeneralComplaintsCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> DeleteGeneralComplaints(string id)
        {
            var command = new DeleteGeneralComplaintsCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult> GetGeneralComplaintsById(string id)
        {
            var query = new GetGeneralComplaintsByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult> GetAllGeneralComplaintss(GetAllGeneralComplaintsQuery input)
        {
            return await _mediator.Send(input);
        }
    }
}

