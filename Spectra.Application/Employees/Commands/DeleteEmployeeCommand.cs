using MediatR;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.Commands
{
    public class DeleteEmployeeCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteEmployeeCommandHandler(IBaseMongoDbRepository<Employee> employeeRepo,
        IDocumentHellper addFile,
        IIdentityService identityService) : IRequestHandler<DeleteEmployeeCommand, OperationResult<Unit>>
    {
        private readonly IBaseMongoDbRepository<Employee> _employeeRepo = employeeRepo;
        private readonly IDocumentHellper _addFile = addFile;
        private readonly IIdentityService _identityService = identityService;

        public async Task<OperationResult<Unit>> Handle(DeleteEmployeeCommand request, CancellationToken cancellationToken)
        {
            var doctor = await _employeeRepo.GetByIdAsync(request.Id) ?? throw new NotFoundException("Employees", request.Id);
            await _addFile.DeleteAttachments(doctor.Attachments.Select(a => a.Path).ToList());
            await _employeeRepo.DeleteAsync(request.Id);
            await _identityService.DeleteUserAsync(doctor.UserId);
            return OperationResult<Unit>.Success(Unit.Value);

        }


    }

}
