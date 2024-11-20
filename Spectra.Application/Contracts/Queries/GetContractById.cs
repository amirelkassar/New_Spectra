using Mapster;
using MediatR;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Contracts.Repository;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Contracts.Queries
{
    public class GetContractById : IRequest<OperationResult>
    {
        public string Id { get; set; }
        public string EmployeeUserId { get; set; }
        public string CallerRole { get; set; }

        public class GetContractByIdHandler(IContractRepository contractRepository) : IRequestHandler<GetContractById, OperationResult>
        {
            private readonly IContractRepository _contractRepository = contractRepository;

            public async Task<OperationResult> Handle(GetContractById request, CancellationToken cancellationToken)
            {
                var contract=await _contractRepository.GetAsync(c=>c.Id==request.Id &&  c.EmployeeUserId==request.EmployeeUserId)
                    ?? throw new NotFoundException("Contracts",request.Id);

                if (request.CallerRole.Equals(Roles.SystemAdmin))
                {
                    var contractDto = contract.Adapt<ContractEmployeeReadDto>();
                    return OperationResult<ContractEmployeeReadDto>.Success(contractDto);
                }
                else
                {
                    var contractDto = contract.Adapt<ContractForEmployeeReadDto>();
                    return OperationResult<ContractForEmployeeReadDto>.Success(contractDto);
                }
            }
        }
    }
}
