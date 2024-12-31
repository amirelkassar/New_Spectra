using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Domain.Contracts;
using Spectra.Domain.Contracts.DomainEvents;
using Spectra.Domain.Contracts.Exceptions;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Application.Contracts.Commands
{
    public class ChangeContractByEmployeeCommand : IRequest<OperationResult>
    {
        public bool Value { get; set; }
        public IFormFile? Signature { get; set; }
        public class AcceptContractByEmployeeCommandHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository,
            ICurrentUser currentUser,
            IDocumentHellper documentHellper) : IRequestHandler<ChangeContractByEmployeeCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IDocumentHellper _documentHellper = documentHellper;

            public async Task<OperationResult> Handle(ChangeContractByEmployeeCommand request, CancellationToken cancellationToken)
            {
                var contract = await _contractRepository.GetAsync(c => c.EmployeeUserId == _currentUser.Id)
                            ?? throw new NotFoundException("Contracts", _currentUser.Id);

                var currentVersion = contract.Versions.First(v => v.State == ContractVersionStates.Active);

                if (!string.IsNullOrWhiteSpace(contract.DoctorSignaturePath))
                {
                    await _documentHellper.DeleteAttachment(contract.DoctorSignaturePath);
                }
                if (request.Value && (request.Signature is null || request.Signature.Length <= 0))
                {
                    throw new ContractSignatureNeededException();
                }
                else if (request.Value)
                {
                    var folderPath = Pathes.GetEmployeesPath();

                    contract.DoctorSignaturePath = await _documentHellper.CreateAttachment(request.Signature, folderPath);
                    currentVersion.AcceptedByEmployee = request.Value;
                    currentVersion.ChangedByEmployeeDate = DateTimeOffset.UtcNow;

                    if (currentVersion.AcceptedByAdmin && currentVersion.AcceptedByEmployee && currentVersion.AcceptedByHead)
                        contract.Accept();
                }
                else
                {
                    currentVersion.State = ContractVersionStates.Rejected;
                    currentVersion.AcceptedByEmployee = false;
                }


                await _contractRepository.UpdateAsync(contract);


                var response = OperationResult.Success();

                response.AddDomainEvent(new ContractChangeEvent(contract, ContractChangeType.Doctor, request.Value));

                return response;
            }
        }
    }
}
