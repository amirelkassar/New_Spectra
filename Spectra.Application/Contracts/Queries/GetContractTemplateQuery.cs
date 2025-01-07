using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mapster;
using MediatR;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Interfaces;
using Spectra.Application.Templates.Models;
using Spectra.Application.Templates.Service;
using Spectra.Domain.Contracts;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetContractTemplateQuery : IRequest<OperationResult>
    {
        public string? UserId { get; set; }
        public string? ContractId { get; set; }

        public class GetContractTemplateQueryHandler(IBaseMongoDbRepository<EmploymentContract> contractsRepository,
            IBaseMongoDbRepository<Employee> employeeRepository,
            ITemplateService templateService) : IRequestHandler<GetContractTemplateQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractsRepository = contractsRepository;
            private readonly IBaseMongoDbRepository<Employee> _employeeRepository = employeeRepository;
            private readonly ITemplateService _templateService = templateService;

            public async Task<OperationResult> Handle(GetContractTemplateQuery request, CancellationToken cancellationToken)
            {
                Employee employee;
                EmploymentContract employmentContract;

                if(!string.IsNullOrWhiteSpace(request.ContractId))
                {
                    employmentContract = await _contractsRepository.GetAsync(c => c.Id == request.ContractId);
                    employee = await _employeeRepository.GetByIdAsync(employmentContract.EmployeeId);
                }
                else if(!string.IsNullOrWhiteSpace(request.UserId))
                {
                    employmentContract = await _contractsRepository.GetAsync(c => c.EmployeeUserId==request.UserId);
                    employee = await _employeeRepository.GetByIdAsync(employmentContract.EmployeeId);
                }
                else
                {
                    throw new NotFoundException("Contracts",request.ContractId);
                }

                if(employmentContract.ContractState != Domain.Shared.Constants.ContractConses.ContractStates.Accepted)
                {
                    throw new InvalidOperationException("Couldn't create a template for unaccepted contract");
                }

                var model = new EmployeeContractTemplateModel
                {
                    CompanyInfo = new CompanyInfoModel
                    {
                        LegalName= "شركة المستقبل للرعاية الصحية",
                        Address= "Kingdom of Saudi Arabia , Riyadh",
                        MobileNumber= "+966 550383322",
                        TaxNumber= "1010697542"
                    },
                    Employee= employee.Adapt<EmployeeByIdDto>(EmployeeByIdDto.GetConfiguration()),
                    Contract= employmentContract.Adapt<ContractReadDto>(),
                    ActiveVersion= employmentContract.Versions.First(v=>v.State==Domain.Shared.Constants.ContractConses.ContractVersionStates.Active).Adapt<ContractVersionReadDto>()
                };

                var template=await _templateService.GetContractTemplateAsync(model);

                return OperationResult<byte[]>.Success(template);
            }
        }
    }
}
