using Spectra.Domain.Shared.Enums;

namespace Spectra.Application.Admin.Dto
{
    public class GetAllemployeeDto
    {
        public string Id { get; set; }
        public string EmployeeId { get; set; }
        public string Name { get; set; }
        public DateTimeOffset DateOfRequest { get; set; }
        public ContractCases? ContractCase { get; set; }
        public AdminOrEmployee? WhoSend { get; set; }


    }
}
