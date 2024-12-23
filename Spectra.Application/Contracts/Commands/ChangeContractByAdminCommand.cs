using System.Security.Cryptography.Xml;
using FluentValidation;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Contracts.DTO;
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
    public class ChangeContractByAdminCommand : IRequest<OperationResult>
    {
        public bool Value { get; set; }
        public string Id { get; set; }
        public IFormFile? Signature { get; set; }
        public ICollection<ContractTextSectionCreateDto>? TextSections { get; set; }

        public class AcceptContractByAdminCommandHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository,
            ICurrentUser currentUser,
            IDocumentHellper documentHellper) : IRequestHandler<ChangeContractByAdminCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;
            private readonly ICurrentUser _currentUser = currentUser;
            private readonly IDocumentHellper _documentHellper = documentHellper;

            public async Task<OperationResult> Handle(ChangeContractByAdminCommand request, CancellationToken cancellationToken)
            {
                var contract = await _contractRepository.GetAsync(c => c.Id == request.Id)
                            ?? throw new NotFoundException("Contracts", request.Id);

                var currentVersion = contract.Versions.First(v => v.State == ContractVersionStates.Active);

                if (!string.IsNullOrWhiteSpace(contract.AdminSignaturePath))
                {
                    await _documentHellper.DeleteAttachment(contract.AdminSignaturePath);
                }
                if (request.Value && (request.Signature is null || request.Signature.Length <= 0))
                {
                    throw new ContractSignatureNeededException();
                }
                else if(request.Value)
                {
                    var folderPath = Pathes.GetEmployeesPath();

                    contract.AdminSignaturePath = await _documentHellper.CreateAttachment(request.Signature, folderPath);
                    currentVersion.AcceptedByAdmin = true;
                    currentVersion.ChangedByAdminDate = DateTimeOffset.UtcNow;

                    if (currentVersion.AcceptedByAdmin && currentVersion.AcceptedByEmployee && currentVersion.AcceptedByHead)
                    {
                        contract.Accept();
                        contract.Sections = request.TextSections.Adapt<ICollection<ContractTextSection>>();
                    }
                }
                else
                {
                    currentVersion.State = ContractVersionStates.Draft;
                    currentVersion.AcceptedByAdmin = false;
                }





                await _contractRepository.UpdateAsync(contract);

                var response = OperationResult.Success();

                response.AddDomainEvent(new ContractChangeEvent(contract, ContractChangeType.Admin,request.Value));

                return response;
            }
        }
    }
    public class AcceptContractByAdminCommandValidator : AbstractValidator<ChangeContractByAdminCommand>
    {
        public AcceptContractByAdminCommandValidator()
        {
            RuleFor(c => c.Id)
                .NotEmpty()
                .NotNull();
        }
    }
}
