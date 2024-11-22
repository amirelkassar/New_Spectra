using MediatR;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.Services;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Infrastructure.Contracts
{

    public class ContractService(IMediator mediator, ICurrentUser currentUser) : IContractService
    {
        private readonly IMediator _mediator = mediator;
        private readonly ICurrentUser _currentUser = currentUser;

        public async Task<OperationResult> CreateAsync(CreateContractCommand input)
        {
            if (_currentUser.Role.Equals(Roles.Doctor))
            {
                input.EmployeeUserId = _currentUser.Id;
            }
            var response = await _mediator.Send(input);
            return response;
        }

        public async Task<OperationResult> DeleteContract(string id)
        {
            var response = await _mediator.Send(new DeleteContractCommand { Id = id });
            return response;
        }

        public async Task<OperationResult> GetContractById(string id)
        {
            throw new NotImplementedException();
        }

        public async Task<OperationResult> UpdateAsync(UpdateContractCommand input)
        {
            if (_currentUser.Role.Equals(Roles.Doctor))
            {
                input.EmployeeUserId = _currentUser.Id;
                input.ModifierRole = _currentUser.Role;
            }
            var response = await _mediator.Send(input);
            return response;
        }

        public async Task<OperationResult> UpdateStateAsync(ChangeContractStateCommand input)
        {
            if (_currentUser.Role.Equals(Roles.Doctor))
            {
                input.EmployeeUserId = _currentUser.Id;
                input.ModifierRole = _currentUser.Role;
            }
            input.CallerUserId = _currentUser.Id;
            input.CallerName = _currentUser.Name;
            var response = await _mediator.Send(input);
            return response;
        }
    }
}

