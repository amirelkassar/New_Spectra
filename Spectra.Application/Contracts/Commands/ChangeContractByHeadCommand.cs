using FluentValidation;
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
    public class ChangeContractByHeadCommand : IRequest<OperationResult>
    {
        public string Id { get; set; }
        public bool Value { get; set; }
        public IFormFile? Signature { get; set; }

        public class AcceptContractByHeadCommandHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository,
            ICurrentUser currentUser,
            IDocumentHellper documentHellper) : IRequestHandler<ChangeContractByHeadCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IDocumentHellper _documentHellper = documentHellper;

            public async Task<OperationResult> Handle(ChangeContractByHeadCommand request, CancellationToken cancellationToken)
            {
                var contract = await _contractRepository.GetAsync(c => c.Id == request.Id && c.EmployeeHeadUserId == _currentUser.Id)
                           ?? throw new NotFoundException("Contracts", request.Id);

                var currentVersion = contract.Versions.First(v => v.State == ContractVersionStates.Active);

                if (!string.IsNullOrWhiteSpace(contract.HeadSignaturePath))
                {
                    await _documentHellper.DeleteAttachment(contract.HeadSignaturePath);
                }
                if (request.Value && (request.Signature is null || request.Signature.Length <= 0))
                {
                    throw new ContractSignatureNeededException();
                }
                else if (request.Value)
                {
                    var folderPath = Pathes.GetEmployeesPath();
                    contract.HeadSignaturePath = await _documentHellper.CreateAttachment(request.Signature, folderPath);
                    currentVersion.AcceptedByHead = true;
                    currentVersion.ChangedByHeadDate = DateTimeOffset.UtcNow;
                }
                else
                {
                    currentVersion.AcceptedByHead = false;
                    currentVersion.ChangedByHeadDate = DateTimeOffset.UtcNow;
                }



                if (currentVersion.AcceptedByAdmin && currentVersion.AcceptedByEmployee && currentVersion.AcceptedByHead)
                    contract.Accept();

                await _contractRepository.UpdateAsync(contract);

                var response = OperationResult.Success();

                response.AddDomainEvent(new ContractChangeEvent(contract, ContractChangeType.Head, request.Value));

                return response;
            }
        }
    }
    public class AcceptContractByHeadCommandValidator : AbstractValidator<ChangeContractByHeadCommand>
    {
        public AcceptContractByHeadCommandValidator()
        {
            RuleFor(c => c.Id)
                .NotEmpty()
                .NotNull();
        }
    }
}
