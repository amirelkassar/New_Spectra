using MediatR;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Application.MasterData.ServicesMD.Commands;
using Spectra.Application.MasterData.ServicesMD.Queries;
using Spectra.Application.MasterData.ServicesMD.Services;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Infrastructure.MasterData.Services;

namespace Spectra.Infrastructure.MasterData.ServicesMD
{
    public class ServiceMDService : IServiceMDService
    {
        private readonly IMediator _mediator;
        private readonly IExcelProcessingService _excelProcessingService;



        public ServiceMDService(IMediator mediator, IExcelProcessingService excelProcessingService)
        {

            _mediator = mediator;
            _excelProcessingService = excelProcessingService;
        }

        public async Task<OperationResult<string>> CreateServicesM(CreateServicesMCommand input)
        {

         

            var command = new CreateServicesMCommand
            {
                ServicesName = input.ServicesName,
                DefinitionServices = input.DefinitionServices,
                AvailableSrvices = input.AvailableSrvices,
                Price = input.Price,
                TermsAndConditions = input.TermsAndConditions,
                ServiceAddress = input.ServiceAddress,
                Content = input.Content,
                Secations = input.Secations,
                Photo = input.Photo

            };

            return await _mediator.Send(command);
        }
        //public async Task CreateFromExcel(IFormFile input)
        //{

        //    List<CreateServicesMCommand> data = await _excelProcessingService.ProcessExcelFile(input, (cells) => new CreateServicesMCommand
        //    {

        //        ScientificName = cells[0],
        //        Notes = cells[1],
        //        ExaminationTypes = Enum.TryParse<ExaminationType>(cells[2], true, out var examinationType) ? examinationType = throw new ArgumentException($"Invalid ExaminationType= {cells[2]}")
        //    });


        //    var command = new CreateBulkDataCommand<CreateServicesMCommand> { Data = data };

        //    await _mediator.Send(command);


        //}

        public async Task<OperationResult<Unit>> Updateservices(string id, UpdateServicesMCommand input)
        {

            var command = new UpdateServicesMCommand
            {

                Id = id,
                ServicesName = input.ServicesName,
                DefinitionServices = input.DefinitionServices,
                AvailableSrvices = input.AvailableSrvices,
                Price = input.Price,
                TermsAndConditions = input.TermsAndConditions,
                Address = input.Address,
                Content = input.Content,
                Secations = input.Secations,
                Photo = input.Photo

            };

         return   await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteMedicalTestsAndXray(string id)
        {
            var command = new DeleteServicesMCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<MasterDataServices>> GetServicesMById(string id)
        {
            var query = new GetServicesMDByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async  Task<OperationResult <IEnumerable<MasterDataServices>>> GetAllServicesM()
        {
            var query = new GetAllServicesMDQuery();
            return await _mediator.Send(query);
        }
        public async Task<OperationResult<IEnumerable<ServicesDto>>> GetAllNameAndTermsAndConditions()
        {
            var query = new GetAllNameAndTermServicesQuery();
            return await _mediator.Send(query);
        }


    }
}

