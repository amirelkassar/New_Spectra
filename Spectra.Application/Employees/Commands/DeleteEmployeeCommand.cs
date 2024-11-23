using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.Commands
{
    public class DeleteEmployeeCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteEmployeeCommandHandler : IRequestHandler<DeleteEmployeeCommand, OperationResult<Unit>>
    {
        private readonly IBaseMongoDbRepository<Employee> _employeeRepo;
        private readonly IDocumentHellper _addFile;

        public DeleteEmployeeCommandHandler(IBaseMongoDbRepository<Employee> employeeRepo, IDocumentHellper addFile)
        {
            _employeeRepo = employeeRepo;
            _addFile = addFile;
        }

        public async Task<OperationResult<Unit>> Handle(DeleteEmployeeCommand request, CancellationToken cancellationToken)
        {

            var doctor = await _employeeRepo.GetByIdAsync(request.Id);
            await _addFile.DeleteAttachments(doctor.Attachments.Select(a => a.Path).ToList());
            await _employeeRepo.DeleteAsync(request.Id);
            return OperationResult<Unit>.Success(Unit.Value);

        }


    }

}
