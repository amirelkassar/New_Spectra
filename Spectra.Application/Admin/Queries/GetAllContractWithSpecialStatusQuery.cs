using MediatR;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Hellper;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Admin.Queries
{

    public class GetAllContractWithSpecialStatusQuery : IRequest<OperationResult<PaginatedResult<GetAllemployeeDto>>>
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;

        public ContractCases Status { get; set; }
    }

    public class GetAllContractWithSpecialStatusQueryHandler : IRequestHandler<GetAllContractWithSpecialStatusQuery, OperationResult<PaginatedResult<GetAllemployeeDto>>>
    {
        private readonly IContractRepository _contractRepository;

        public GetAllContractWithSpecialStatusQueryHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
        }

        public async Task<OperationResult<PaginatedResult<GetAllemployeeDto>>> Handle(GetAllContractWithSpecialStatusQuery request, CancellationToken cancellationToken)
        {
           
            var paginatedContracts = await _contractRepository.GetAllAsyncP(
                c => c.ContractCase == request.Status,
                null,
                request.PageNumber,
                request.PageSize);

            var contractDataList = paginatedContracts.Items.Select(c => new GetAllemployeeDto
            {
                Name = $"{c.EmployeeName}",
                DateOfRequest = c.Created.Date,
                ContractCase = c.ContractCase
            })
            .OrderByDescending(y => y.DateOfRequest) 
            .ToList();

  
            var result = new PaginatedResult<GetAllemployeeDto>
            {
                Items = contractDataList,
              
                PageNumber = request.PageNumber,
                PageSize = request.PageSize
            };

            return OperationResult<PaginatedResult<GetAllemployeeDto>>.Success(result);
        }

    }
}


