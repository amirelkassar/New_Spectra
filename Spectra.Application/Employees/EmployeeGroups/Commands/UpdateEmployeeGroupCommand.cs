using FluentValidation;
using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.EmployeeGroups.Commands
{
    public class UpdateEmployeeGroupCommand : IRequest<OperationResult>
    {
        public UpdateEmployeeGroupCommand()
        {
            MemeberIds = [];
        }
        public string OwnerId { get; set; }
        public ICollection<string> MemeberIds { get; set; }

        public class CreateEmployeeGroupCommandHandler(IBaseMongoDbRepository<EmployeeGroup> empGroupRepository, IBaseMongoDbRepository<Employee> empRepository) : IRequestHandler<UpdateEmployeeGroupCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmployeeGroup> _empGroupRepository = empGroupRepository;
            private readonly IBaseMongoDbRepository<Employee> _empRepository = empRepository;

            public async Task<OperationResult> Handle(UpdateEmployeeGroupCommand request, CancellationToken cancellationToken)
            {
                var owner = await _empRepository.GetByIdAsync(request.OwnerId) ?? throw new NotFoundException("Employees", request.OwnerId);
                var (memebers, total) = await _empRepository.GetAllAsync(e => request.MemeberIds.Any(m => m == e.Id));

                var group = await _empGroupRepository.GetAsync(g => g.OwnerId == request.OwnerId);
                if (group is null)
                {
                    group = EmployeeGroup.Create(Ulid.NewUlid().ToString(), owner.Id, owner.Name.FirstName, memebers.Select(m => new EmployeeGroupMemeber { Id = m.Id, Name = m.Name.FirstName }).ToArray());
                    await _empGroupRepository.AddAsync(group);
                    return OperationResult.Success();
                }
                else
                {
                    foreach (var id in request.MemeberIds.Where(m => !group.Memebers.Any(gm => gm.Id == m)).ToArray())
                    {
                        var member = memebers.FirstOrDefault(m => m.Id == id);
                        group.Memebers.Add(new EmployeeGroupMemeber { Id = member.Id, Name = member.Name.FirstName });
                    }
                    await _empGroupRepository.UpdateAsync(group);
                }

                return OperationResult.Success();
            }
        }
    }

    public class AddEmployeeToGroupCommandValidator : AbstractValidator<UpdateEmployeeGroupCommand>
    {
        public AddEmployeeToGroupCommandValidator()
        {
            RuleFor(o => o.OwnerId)
                .NotNull()
                .NotEmpty();

            RuleFor(o => o.MemeberIds)
                .NotNull()
                .Must(m => m.Count > 0);
        }
    }
}
