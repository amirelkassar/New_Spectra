using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Contracts.DomainEvents;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Commands
{
    public class CancelContractCommand : IRequest<OperationResult>
    {
        public string Id { get; set; }
        public string? Reason { get; set; }

        public class ChangeContractStateCommandHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository,
            ICurrentUser currentUser) : IRequestHandler<CancelContractCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;
            private readonly ICurrentUser _currentUser = currentUser;

            public async Task<OperationResult> Handle(CancelContractCommand request, CancellationToken cancellationToken)
            {
                EmploymentContract contract = null;
                var role = _currentUser.Role;
                var response = OperationResult.Success();
                if (role.Equals(Roles.SystemAdmin))
                {
                    contract = await _contractRepository.GetAsync(c => c.Id == request.Id)
                            ?? throw new NotFoundException("Contracts", request.Id);
                    response.AddDomainEvent(new ContractCancelationEvent(contract, ContractChangeType.Admin));
                }
                else
                {
                    contract = await _contractRepository.GetAsync(c => c.Id == request.Id && c.EmployeeUserId == _currentUser.Id)
                        ?? throw new NotFoundException("Contracts", request.Id);
                    response.AddDomainEvent(new ContractCancelationEvent(contract, ContractChangeType.Doctor));
                }

                contract.Cancel(_currentUser.Id, _currentUser.Name, request.Reason);
                await _contractRepository.UpdateAsync(contract);

                return response;
            }
        }
    }
}
