using MediatR;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Hellper;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Admin.Queries
{

    public class GetAllContractWithStatusQuery : IRequest<OperationResult<PaginatedResult<EmploymentContract>>>
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        //public EmploymentStatus Status { get; set; }
    }

    public class GetAllContractWithStatusQueryHandler : IRequestHandler<GetAllContractWithStatusQuery, OperationResult<PaginatedResult<EmploymentContract>>>
    {
        private readonly IContractRepository _contractRepository;

        public GetAllContractWithStatusQueryHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
        }

        public async Task<OperationResult<PaginatedResult<EmploymentContract>>> Handle(GetAllContractWithStatusQuery request, CancellationToken cancellationToken)
        {
            var paginatedDoctors = await _contractRepository.GetAllAsyncP(c => c.ContractCase != ContractCases.SAVE, null, request.PageNumber, request.PageSize);

            
                paginatedDoctors.Items.Select(c => new GetAllemployeeDto
                {
                    Name = $"{c.EmployeeName.FirstName} {c.EmployeeName.LastName}",
                    DateOfRequest = c.Created.Date,ContractCase=c.ContractCase
                });
            

            return OperationResult<PaginatedResult<EmploymentContract>>.Success(paginatedDoctors);
        }

    }
}


