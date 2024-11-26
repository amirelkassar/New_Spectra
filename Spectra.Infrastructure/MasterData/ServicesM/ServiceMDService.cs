using MediatR;
using Spectra.Application.MasterData.ServicesMD;
using Spectra.Application.MasterData.ServicesMD.Commands;
using Spectra.Application.MasterData.ServicesMD.Queries;
using Spectra.Application.MasterData.ServicesMD.Services;
using Spectra.Application.MasterData.UploadExcel.Services;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Wrappers;

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

        public async Task<OperationResult> CreateServicesM(CreateServicesMCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> Updateservices(UpdateServicesMCommand input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> DeleteMedicalTestsAndXray(string id)
        {
            var command = new DeleteServicesMCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult> GetServicesMById(string id)
        {
            var query = new GetServicesMDByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult> GetAllForListing(GetAllServiceForListingQuery input)
        {
            return await _mediator.Send(input);
        }

        public async Task<OperationResult> GetAllServices(GetAllServicesMDQuery input)
        {
            return await _mediator.Send(input);
        }
    }
}

