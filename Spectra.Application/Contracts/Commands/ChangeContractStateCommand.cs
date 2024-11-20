using MediatR;
using Spectra.Application.Contracts.Repository;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Application.Contracts.Commands
{
    public class ChangeContractStateCommand : IRequest<OperationResult>
    {
        public string Id { get; set; }
        public string EmployeeUserId { get; set; }
        public string CallerUserId { get; set; }
        public string CallerName { get; set; }
        public bool Value { get; set; }
        public ContractStates State { get; set; }
        public string? Reason { get; set; }
        public string ModifierRole { get; set; }

        public class ChangeContractStateCommandHandler(IContractRepository contractRepository) : IRequestHandler<ChangeContractStateCommand, OperationResult>
        {
            private readonly IContractRepository _contractRepository = contractRepository;

            public async Task<OperationResult> Handle(ChangeContractStateCommand request, CancellationToken cancellationToken)
            {
                var contract = await _contractRepository.GetAsync(c => c.Id == request.Id && c.EmployeeUserId == request.EmployeeUserId)
                            ?? throw new NotFoundException("Contracts", request.Id);

                var currentVersion = contract.Versions.First(v => v.State == ContractVersionStates.Active);

                switch (request.ModifierRole)
                {
                    case Roles.SystemAdmin:
                        currentVersion.AcceptedByAdmin = request.Value;
                        break;
                    case Roles.ServiceHead:
                    case Roles.DepartmentHead:
                        contract.AcceptedByDepartmentHead = request.Value;
                        break;
                    default:
                        currentVersion.AcceptedByEmployee = request.Value;
                        break;
                }

                if (request.State == ContractStates.Canceled)
                    contract.Cancel(request.CallerUserId, request.CallerName, request.Reason);
                else if (request.State == ContractStates.Accepted)
                    contract.Accept();

                await _contractRepository.UpdateAsync(contract);

                return OperationResult.Success();
            }
        }
    }
}
