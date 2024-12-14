using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Mapster;
using MediatR;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetEmployeeHeadContractByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }

        public class GetEmployeeHeadContractByIdQueryHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository,
            ICurrentUser currentUser) : IRequestHandler<GetEmployeeHeadContractByIdQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;
            private readonly ICurrentUser _currentUser = currentUser;

            public async Task<OperationResult> Handle(GetEmployeeHeadContractByIdQuery request, CancellationToken cancellationToken)
            {
                Expression<Func<EmploymentContract, bool>> filter = c => c.EmployeeHeadUserId == _currentUser.Id && c.Id==request.Id;
                var contract= await _contractRepository.GetAsync(filter) ?? throw new NotFoundException("Contracts", request.Id);
                var dto = contract.Adapt<ContractWithoutFeeReadDto>();
                return OperationResult<ContractWithoutFeeReadDto>.Success(dto);
            }
        }
    }
}
