using MediatR;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Contracts.Services;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Contracts
{

    public class ContractService : IContractService
    {
        private readonly IMediator _mediator;

        public ContractService(IMediator mediator)
        {
            _mediator = mediator;

        }

        public async Task<OperationResult<string>> CreateContractSendORSave(CreateContractCommand input)
        {
            if (input.ContractCase != ContractCases.SAVE && input.ContractCase != ContractCases.SENDTOADMIN)
            {
                throw new RequestErrorException("You can only Send or Save your Contract.");

            }
                var command = new CreateContractCommand
                {
                    HoursOfWork = input.HoursOfWork,
                    DaysOfWork = input.DaysOfWork,
                    ContractCase = input.ContractCase,
                    EmployeeId = input.EmployeeId,
                    Titel = input.Titel,
                    Freelance = input.Freelance,
                    SpectraTeam = input.SpectraTeam,
                };




                return await _mediator.Send(command);
            
           
        }

        public async Task<OperationResult<Unit>> DeleteContract(string id)
        {
            var command = new DeleteContractCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<IEnumerable<GetAllCopiesWithDataDto>>> GetAllCopiesOfContract(GetAllCopiesOFContractQuery input)
        {
            // Create the query and pass pagination parameters
            var query = new GetAllCopiesOFContractQuery
            {
                EmployeeId = input.EmployeeId
            };
            return await _mediator.Send(query);
        }

        public async Task<OperationResult<GetServicesContractQuery>> GetAllContractData()
        {

            var query = new GetServicesContractQuery();

            return await _mediator.Send(query);
        }


        public async Task<OperationResult<EmploymentContract>> GetContractById(string id)
        {
            var query = new GetContractByIdQuery { Id = id };
            return await _mediator.Send(query);
        }


        public async Task<OperationResult<Unit>> UpdateContract(string id, UpdateContractCommand input)
        {
            var command = new UpdateContractCommand
            {
                id = id,
                Discount = input.Discount,
                HoursOfWork = input.HoursOfWork,
                DaysOfWork = input.DaysOfWork,
                ContractCase = input.ContractCase,
                EmployeeId = input.EmployeeId,
                Titel = input.Titel,
                Duration = input.Duration,

            };


            return await _mediator.Send(command);
        }


    }
}

