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
        public Guid DocumentId { get; set; }
        public string EmpId { get; set; }
        public class DeleteAttachmentCommandHandler(IBaseMongoDbRepository<Employee, string> employeeRepo, IDocumentHellper documentHellper) : IRequestHandler<DeleteAttachmentCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee, string> _employeeRepo = employeeRepo;
            private readonly IDocumentHellper _documentHellper = documentHellper;

            public async Task<OperationResult> Handle(DeleteAttachmentCommand request, CancellationToken cancellationToken)
            {
                var employee = await _employeeRepo.GetByIdAsync(request.EmpId) ?? throw new NotFoundException("MedicalProviders", request.EmpId);
                var attachment = employee.Attachments.FirstOrDefault(a => a.Id == request.DocumentId) ?? throw new NotFoundException("Attachment", request.DocumentId);

                employee.Attachments.Remove(attachment);

                await _employeeRepo.UpdateAsync(employee);

                if (File.Exists(attachment.Path))
                    File.Delete(attachment.Path);

                return OperationResult.Success();
            }
        }
    }
}
