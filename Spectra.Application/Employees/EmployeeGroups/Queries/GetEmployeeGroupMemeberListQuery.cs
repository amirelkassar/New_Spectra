using Mapster;
using MediatR;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Employees.EmployeeGroups.Queries
{
    public class GetEmployeeGroupMemeberListQuery:IRequest<OperationResult>
    {
        public string OwnerId { get; set; }

        public class GetEmployeeGroupMemeberListQueryHandler(IBaseMongoDbRepository<Employee> empRepository,
            IBaseMongoDbRepository<EmployeeGroup> empGroupRepository) : IRequestHandler<GetEmployeeGroupMemeberListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee> _empRepository = empRepository;
            private readonly IBaseMongoDbRepository<EmployeeGroup> _empGroupRepository = empGroupRepository;

            public async Task<OperationResult> Handle(GetEmployeeGroupMemeberListQuery request, CancellationToken cancellationToken)
            {
                var owner = await _empRepository.GetByIdAsync(request.OwnerId) ?? throw new NotFoundException("Employees", request.OwnerId);
                var group = await _empGroupRepository.GetAsync(g => g.OwnerId == request.OwnerId);
                if (group == null) 
                    return OperationResult.Success();

                var (memebers,total) = await _empRepository.GetAllAsync(e => group.Memebers.Any(m => m.Id == e.Id));
                var dtos = memebers.Adapt<IReadOnlyCollection<EmployeeListDto>>();
                return OperationResult<IReadOnlyCollection<EmployeeListDto>>.Success(dtos);
            }
        }
    }
}
