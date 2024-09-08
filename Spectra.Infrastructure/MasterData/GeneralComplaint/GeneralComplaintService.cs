using DocumentFormat.OpenXml.Spreadsheet;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Application.MasterData.GeneralComplaintsM.Commands;
using Spectra.Application.MasterData.GeneralComplaintsM.Queries;
using Spectra.Application.MasterData.GeneralComplaintsM.Services;
using Spectra.Application.MasterData.UploadExcel.Command;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Domain.MasterData.GeneralComplaints;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
        public async Task<string> CreateGeneralComplaints(CreateGeneralComplaintsCommand input)
        {

            var command = new CreateGeneralComplaintsCommand
            {
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

        public async Task UpdateGeneralComplaints(string id, UpdateGeneralComplaintsCommand input)
        {

            var command = new UpdateGeneralComplaintsCommand
            {

                Id = id,

                ComplaintName = input.ComplaintName,
                DescriptionOfTheComplaint = input.DescriptionOfTheComplaint

            };

            await _mediator.Send(command);
        }

        public async Task DeleteGeneralComplaints(string id)
        {
            var command = new DeleteGeneralComplaintsCommand { Id = id };
            await _mediator.Send(command);
        }

        public async Task<GeneralComplaints> GetGeneralComplaintsById(string id)
        {
            var query = new GetGeneralComplaintsByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<IEnumerable<GeneralComplaints>> GetAllGeneralComplaintss()
        {
            var query = new GetAllGeneralComplaintsQuery();
            return await _mediator.Send(query);
        }


    }
}

