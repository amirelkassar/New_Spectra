using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.EmployeeGroups.Commands
{
    public class RemoveEmployeeFromGroupCommand : IRequest<OperationResult>
    {
        public string OwnerId { get; set; }
        public string MemeberId { get; set; }

        public class UpdateEmployeeGroupCommandHandler(IBaseMongoDbRepository<EmployeeGroup> empGroupRepository, IBaseMongoDbRepository<Employee> empRepository) : IRequestHandler<RemoveEmployeeFromGroupCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmployeeGroup> _empGroupRepository = empGroupRepository;
            private readonly IBaseMongoDbRepository<Employee> _empRepository = empRepository;

            public async Task<OperationResult> Handle(RemoveEmployeeFromGroupCommand request, CancellationToken cancellationToken)
            {
                var owner = await _empRepository.GetByIdAsync(request.OwnerId) ?? throw new NotFoundException("Employees", request.OwnerId);
                var memeber = await _empRepository.GetByIdAsync(request.MemeberId) ?? throw new NotFoundException("Employees", request.MemeberId);
                var group = await _empGroupRepository.GetAsync(g => g.OwnerId == request.OwnerId) ?? throw new NotFoundException("Employee Groups", request.OwnerId);

                var groupMemeber = group.Memebers.FirstOrDefault(m => m.Id == memeber.Id);
                if (groupMemeber is not null)
                {
                    group.Memebers.Remove(groupMemeber);
                    await _empGroupRepository.UpdateAsync(group);
                }

                return OperationResult.Success();
            }
        }
    }
}
