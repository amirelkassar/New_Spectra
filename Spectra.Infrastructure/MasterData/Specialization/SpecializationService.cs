using DocumentFormat.OpenXml.Spreadsheet;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.SpecializationCommend.Commands;
using Spectra.Application.MasterData.SpecializationCommend.Queries;
using Spectra.Application.MasterData.SpecializationCommend.Services;
using Spectra.Application.MasterData.UploadExcel.Command;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Domain.MasterData.DoctorsSpecialization;

namespace Spectra.Infrastructure.MasterData.Specialization
{

    public class SpecializationService : ISpecializationService
    {

        private readonly IMediator _mediator;
        private readonly IExcelProcessingService _excelProcessingService;

        private readonly IValidator<UpdateSpecializationCommand> _updateValidator;

        public SpecializationService(IMediator mediator, IValidator<UpdateSpecializationCommand> updateValidator, IExcelProcessingService excelProcessingService)
        {

            _mediator = mediator;
            _excelProcessingService = excelProcessingService;
            _updateValidator = updateValidator;
        }
        public async Task<string> CreateSpecialization(CreateSpecializationCommand input)
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
            decimal cost;
            List<CreateSpecializationCommand> data = await _excelProcessingService.ProcessExcelFile(input, (cells) => new CreateSpecializationCommand
            {
                SpecializationName = cells[0],
                Description = cells[1],
                ConsultationCost = decimal.TryParse(cells[2], out cost) ? cost : 0m
            });


            var command = new CreateBulkDataCommand<CreateSpecializationCommand> { Data = data };

            await _mediator.Send(command);


        }

        public async Task UpdateSpecialization(string id, UpdateSpecializationCommand input)
            {

                var command = new UpdateSpecializationCommand
                {
                    Id = id,
                    ConsultationCost = input.ConsultationCost,
                    SpecializationName = input.SpecializationName,
                    Description = input.Description
                };

                await _mediator.Send(command);
            }

            public async Task DeleteSpecialization(string id)
            {
                var command = new DeleteSpecializationCommand { Id = id };
                await _mediator.Send(command);
            }

            public async Task<Specializations> GetSpecializationById(string id)
            {
                var query = new GetSpecializationByIdQuery { Id = id };
                return await _mediator.Send(query);
            }

            public async Task<IEnumerable<Specializations>> GetAllSpecializations()
            {
                var query = new GetAllSpecializationQuery();
                return await _mediator.Send(query);
            }


        }

    } 


