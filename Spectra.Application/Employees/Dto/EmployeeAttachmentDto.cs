using Microsoft.AspNetCore.Http;
using static Spectra.Domain.Shared.Constants.DocumentsConts;

namespace Spectra.Application.Employees.Dto
{
    public class EmployeeAttachmentDto
    {
        public string? EmpId { get; set; }
        public string? UserId { get; set; }
        public string Name { get; set; }
        public IFormFile File { get; set; }
        public FileTypes Type { get; set; }
    }
}
