using MediatR;
using Spectra.Application.MasterData.ServicesMD.Commands;
using Spectra.Application.MasterData.ServicesMD.Queries;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Domain.MasterData.ServicesMD;
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

        public async Task<string> CreateServicesM(CreateServicesMCommand input)
        {

         

            var command = new CreateServicesMCommand
            {
                ServicesName = input.ServicesName,
                DefinitionServices = input.DefinitionServices,
                AvailableSrvices = input.AvailableSrvices,
                ServicePrice = input.ServicePrice,
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

        public async Task Updateservices(string id, UpdateServicesMCommand input)
        {

            var command = new UpdateServicesMCommand
            {

                Id = id,
                ServicesName = input.ServicesName,
                DefinitionServices = input.DefinitionServices,
                AvailableSrvices = input.AvailableSrvices,
                ServicePrice = input.ServicePrice,
                TermsAndConditions = input.TermsAndConditions,
                ServiceAddress = input.ServiceAddress,
                Content = input.Content,
                Secations = input.Secations,
                Photo = input.Photo

            };

            await _mediator.Send(command);
        }

        public async Task DeleteMedicalTestsAndXray(string id)
        {
            var command = new DeleteServicesMCommand { Id = id };
            await _mediator.Send(command);
        }

        public async Task<MasterDataServices> GetServicesMById(string id)
        {
            var query = new GetServicesMDByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<IEnumerable<MasterDataServices>> GetAllServicesM()
        {
            var query = new GetAllServicesMDQuery();
            return await _mediator.Send(query);
        }


    }
}

