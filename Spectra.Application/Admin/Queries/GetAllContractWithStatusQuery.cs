using MediatR;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Hellper;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Admin.Queries
{

    public class GetAllContractWithStatusQuery : IRequest<OperationResult<PaginatedResult<GetAllemployeeDto>>>
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        //public ContractCases? Status { get; set; }
    }

    public class GetAllContractWithStatusQueryHandler : IRequestHandler<GetAllContractWithStatusQuery, OperationResult<PaginatedResult<GetAllemployeeDto>>>
    {
        private readonly IContractRepository _contractRepository;

        public GetAllContractWithStatusQueryHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
        }

        public async Task<OperationResult<PaginatedResult<GetAllemployeeDto>>> Handle(GetAllContractWithStatusQuery request, CancellationToken cancellationToken)
        {

            var paginatedContracte = await _contractRepository.GetAllAsyncP(c => c.AdminOrEmployee == AdminOrEmployee.Employee && c.ContractCase != ContractCases.REFUSE,
           null,
           request.PageNumber,
           request.PageSize);

                var contractDataLists = paginatedContracte.Items.Select(c => new GetAllemployeeDto
                {
                    Name = $"{c.EmployeeName} ",
                    DateOfRequest = c.Created.Date,
                    ContractCase = c.ContractCase, WhoSend= c.AdminOrEmployee, Id=c.Id,EmployeeId=c.EmployeeId
                })
                .OrderByDescending(y => y.DateOfRequest)
                .ToList();


            var results = new PaginatedResult<GetAllemployeeDto>
            {
                Items = contractDataLists,

                PageNumber = request.PageNumber,
                PageSize = request.PageSize
            };

            return OperationResult<PaginatedResult<GetAllemployeeDto>>.Success(results);



        }
    }
}



