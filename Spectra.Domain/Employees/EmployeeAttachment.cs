using System;
using static Spectra.Domain.Shared.Constants.DocumentsConts;

namespace Spectra.Domain.Employees
{
    public class EmployeeAttachment
    {
        public EmployeeAttachment()
        {
            Id = Guid.NewGuid().ToString();
        }
        public string Id { get; private set; }
        public string Name { get; set; }
        public string Path { get; set; }
        public FileTypes Type { get; set; }
    }
}
