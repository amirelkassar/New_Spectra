using MediatR;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.Commands
{
    public class UpdateAttachmentCommand : EmployeeAttachmentDto, IRequest<OperationResult>
    {
        public Guid DocumentId { get; set; }

        public class UpdateAttachmentCommandHandler(IBaseMongoDbRepository<Employee, string> employeeRepo, IDocumentHellper documentHellper) : IRequestHandler<UpdateAttachmentCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee, string> _employeeRepo = employeeRepo;
            private readonly IDocumentHellper _documentHellper = documentHellper;

            public async Task<OperationResult> Handle(UpdateAttachmentCommand request, CancellationToken cancellationToken)
            {
                var employee = await _employeeRepo.GetByIdAsync(request.EmpId) ?? throw new NotFoundException("MedicalProviders", request.EmpId);
                var folderPath = Path.Combine(Pathes.GetUsersPath(), employee.UserId);
                Directory.CreateDirectory(folderPath);
                var oldAttachment = employee.Attachments.FirstOrDefault(a => a.Id == request.DocumentId) ?? throw new NotFoundException("Attachment", request.DocumentId);
                if (request.File.Length > 0)
                {
                    var filePath = await _documentHellper.CreateAttachment(request.File, folderPath);

                    if (System.IO.File.Exists(oldAttachment.Path))
                        System.IO.File.Delete(oldAttachment.Path);
                    
                    oldAttachment.Path = filePath;
                    await _employeeRepo.UpdateAsync(employee);
                }
                return OperationResult.Success();
            }
        }
    }
}
