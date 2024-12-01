using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.EmployeeGroups.Commands
{
    public class AddEmployeeToGroupCommand : IRequest<OperationResult>
    {
        public string OwnerId { get; set; }
        public string MemeberId { get; set; }

        public class CreateEmployeeGroupCommandHandler(IBaseMongoDbRepository<EmployeeGroup> empGroupRepository, IBaseMongoDbRepository<Employee> empRepository) : IRequestHandler<AddEmployeeToGroupCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmployeeGroup> _empGroupRepository = empGroupRepository;
            private readonly IBaseMongoDbRepository<Employee> _empRepository = empRepository;

            public async Task<OperationResult> Handle(AddEmployeeToGroupCommand request, CancellationToken cancellationToken)
            {
                var owner = await _empRepository.GetByIdAsync(request.OwnerId) ?? throw new NotFoundException("Employees", request.OwnerId);
                var memeber = await _empRepository.GetByIdAsync(request.MemeberId) ?? throw new NotFoundException("Employees", request.MemeberId);

                var group = await _empGroupRepository.GetAsync(g => g.OwnerId == request.OwnerId);
                if (group is null)
                {
                    group = EmployeeGroup.Create(Ulid.NewUlid().ToString(),owner.Id, owner.Name.FirstName, [new EmployeeGroupMemeber {Id=memeber.Id,Name=memeber.Name.FirstName }]);
                    await _empGroupRepository.AddAsync(group);
                    return OperationResult.Success();
                }
                else if (!group.Memebers.Any(m => m.Id == memeber.Id))
                {
                    group.Memebers.Add(new EmployeeGroupMemeber { Id = memeber.Id, Name = memeber.Name.FirstName });
                    
                    await _empGroupRepository.UpdateAsync(group);
                }

                return OperationResult.Success();
            }
        }
    }
}
