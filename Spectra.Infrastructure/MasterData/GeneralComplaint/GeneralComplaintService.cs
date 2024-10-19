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
        public async Task<OperationResult<string>> CreateGeneralComplaints(CreateGeneralComplaintsCommand input)
        {

            var command = new CreateGeneralComplaintsCommand
            {
                Code1 = input.Code1,
                ComplaintName = input.ComplaintName,
                DescriptionOfTheComplaint = input.DescriptionOfTheComplaint

            };

            return await _mediator.Send(command);
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

        public async Task<OperationResult<Unit>> UpdateGeneralComplaints(string id, UpdateGeneralComplaintsCommand input)
        {

            var command = new UpdateGeneralComplaintsCommand
            {

                Id = id,
                Code1 = input.Code1,
                ComplaintName = input.ComplaintName,
                DescriptionOfTheComplaint = input.DescriptionOfTheComplaint

            };

            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteGeneralComplaints(string id)
        {
            var command = new DeleteGeneralComplaintsCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Domain.MasterData.GeneralComplaints.GeneralComplaint>> GetGeneralComplaintsById(string id)
        {
            var query = new GetGeneralComplaintsByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<Domain.MasterData.GeneralComplaints.GeneralComplaint>>> GetAllGeneralComplaintss()
        {
            var query = new GetAllGeneralComplaintsQuery();
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<IEnumerable<BassMasterDataDto>>> GetAllGeneralComplaintNames()
        {
            var query = new GetAllGeneralComplaintNameQuery();

            return await _mediator.Send(query);

        }
    }
}

