using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.Commands
{
    public class DeleteAttachmentCommand : IRequest<OperationResult>
    {
        public string DocumentId { get; set; }
        public string? EmpId { get; set; }
        public string? UserId { get; set; }
        public class DeleteAttachmentCommandHandler(IBaseMongoDbRepository<Employee> employeeRepo, IDocumentHellper documentHellper) : IRequestHandler<DeleteAttachmentCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee> _employeeRepo = employeeRepo;
            private readonly IDocumentHellper _documentHellper = documentHellper;

            public async Task<OperationResult> Handle(DeleteAttachmentCommand request, CancellationToken cancellationToken)
            {
                Employee employee = null;

                if (!string.IsNullOrWhiteSpace(request.EmpId))
                    employee = await _employeeRepo.GetByIdAsync(request.EmpId) ?? throw new NotFoundException("Employees", request.EmpId);
                else if (!string.IsNullOrWhiteSpace(request.UserId))
                    employee = await _employeeRepo.GetAsync(e => e.UserId == request.UserId) ?? throw new NotFoundException("Employees", request.UserId);

                var attachment = employee.Attachments.FirstOrDefault(a => a.Id == request.DocumentId) ?? throw new NotFoundException("Attachment", request.DocumentId);

                employee.Attachments.Remove(attachment);

                await _employeeRepo.UpdateAsync(employee);

                await _documentHellper.DeleteAttachment(attachment.Path);

                return OperationResult.Success();
            }
        }
    }
}
