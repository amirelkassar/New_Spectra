using MediatR;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.Queries;
using Spectra.Application.Contracts.Services;
using Spectra.Domain.Contracts;
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

        public async Task<OperationResult<string>> CreateContractSendORSave(CreateContractCommand input, bool CheckSendContract)
        {
            var command = new CreateContractCommand
            {
                Freelancer = input.Freelancer,
                HoursOfWork = input.HoursOfWork,
                SpectraTeam = input.SpectraTeam,
                DaysOfWork = input.DaysOfWork,
                MinutesOfWork = input.MinutesOfWork,
                SendContract = CheckSendContract
            };

            return await _mediator.Send(command);
        }

        public async Task<OperationResult<Unit>> DeleteContract(string id)
        {
            var command = new DeleteContractCommand { Id = id };
            return await _mediator.Send(command);
        }

        public async Task<OperationResult<IEnumerable<EmploymentContract>>> GetAllContracts()
        {
            var query = new GetAllContactrQuery();
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
                Freelancer = input.Freelancer,
                HoursOfWork = input.HoursOfWork,
                SpectraTeam = input.SpectraTeam,
                DaysOfWork = input.DaysOfWork,
                MinutesOfWork = input.MinutesOfWork

            };


            return await _mediator.Send(command);
        }


    }
}

