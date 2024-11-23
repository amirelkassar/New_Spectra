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
    public class CreateAttachmentCommand : EmployeeAttachmentDto, IRequest<OperationResult>
    {
        public class CreateAttachmentCommandHndler(IBaseMongoDbRepository<Employee> employeeRepo, IDocumentHellper documentHellper) : IRequestHandler<CreateAttachmentCommand, OperationResult>
        {
            private readonly IBaseMongoDbRepository<Employee> _employeeRepo = employeeRepo;
            private readonly IDocumentHellper _documentHellper = documentHellper;

            public async Task<OperationResult> Handle(CreateAttachmentCommand request, CancellationToken cancellationToken)
            {
                var employee = await _employeeRepo.GetByIdAsync(request.EmpId) ?? throw new NotFoundException("MedicalProviders", request.EmpId);
                var folderPath = Path.Combine(Pathes.GetUsersPath(), employee.UserId);
                Directory.CreateDirectory(folderPath);
                if (request.File.Length > 0)
                {
                    var filePath = await _documentHellper.CreateAttachment(request.File, folderPath);
                    employee.Attachments.Add(new EmployeeAttachment
                    {
                        Name = request.Name,
                        Path = filePath,
                        Type = request.Type,
                    });

                    await _employeeRepo.UpdateAsync(employee);
                }
                return OperationResult.Success();
            }
        }
    }
}
